
var weekday = "";
var day = 0;
var month = "";
var hour = 0;
//arrays with all month names and weekday names
var monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
var weekdayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

var currentDayEl = $('#currentDay');

//set variables to current date and time with dayjs
weekday = weekdayName[dayjs().day()]; //0 to 6 starts on sat
day = dayjs().date(); //1 to 31
month = monthName[dayjs().month()]; //0 to 11 starts on Janaury
hour = dayjs().hour(); // 0 to 23 starts on 12 AM

//prints out current date
currentDayEl.text(weekday + ", " + month + " " + day);

//adjust the styling of each time block depending on the time of day
$('.hour').each(function () {
    if ($(this).data("time") === hour) {
        $(this).parent().next().children().removeClass('future').addClass('present');

    } else if ($(this).data("time") < hour) {
        $(this).parent().next().children().removeClass('present').addClass('past');

    } else if ($(this).data("time") > hour) {
        $(this).parent().next().children().removeClass('past').addClass('future');
    }
});

//same purpose as lines of code above but repeats every second
setInterval(function () {
    weekday = weekdayName[dayjs().day()];
    day = dayjs().date();
    month = monthName[dayjs().month()];
    hour = dayjs().hour();

    currentDayEl.text(weekday + ", " + month + " " + day);

    $('.hour').each(function () {
        if ($(this).data("time") === hour) {
            $(this).parent().next().children().removeClass('future').addClass('present');

        } else if ($(this).data("time") < hour) {
            $(this).parent().next().children().removeClass('present').addClass('past');

        } else if ($(this).data("time") > hour) {
            $(this).parent().next().children().removeClass('past').addClass('future');
        }
    });

}, 1000);

//functions clears out all saved events in local storage if within 12 am (checks once an hour)
setInterval(function () {
    if (hour === 0) {
        $(".hour").each(function () {
            var timeHour = $(this).data("time");
            localStorage.setItem(timeHour, "");
            var eventPrevInput = localStorage.getItem(timeHour);
            $(this).parent().next().children().val(eventPrevInput);

        });
    }
}, 3600000);

setTime();

//function to print out the event saved to the local drive onto the approporiate text area
function setTime() {
    $(".hour").each(function () {
        var timeHour = $(this).data("time");
        var eventPrevInput = localStorage.getItem(timeHour);
        $(this).parent().next().children().val(eventPrevInput);
    });
};

//save button logic when clicked value in text area saved to local drive and display saved message
$(".saveBtn").click(function () {
    var eventInputted = $(this).prev().children().val();
    var timeOfInput = $(this).prev().prev().children().data("time");
    localStorage.setItem(timeOfInput, eventInputted);
    $(".saveMessage").css("display", "flex");
    setTime();
});






//use moment js or an alt to post the date on the page and check what the current hour is
var weekday = "";
var day = 0;
var month = "";
var hour = 0;
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
var nineAM


setInterval(function () {
    weekday = weekdayName[dayjs().day()]; //0 to 6 starts on sat
    day = dayjs().date(); //1 to 31
    month = monthName[dayjs().month()]; //0 to 11
    hour = dayjs().hour(); // 0 to 23 

    //prints out current date
    currentDayEl.text(weekday+", "+month+" "+day);

    //adjust the styling of each time block depending on the time of day
    $('.hour').each(function(){
        if ($( this ).data("time")===hour){
            $( this ).parent().next().children().removeClass('future').addClass('present');

        } else if ($( this ).data("time") < hour) {
            $( this ).parent().next().children().removeClass('present').addClass('past');

        } else {
            $( this ).parent().next().children().removeClass('past').addClass('future');
        }
        return;
    });

}, 1000);


//logic for save button to store in local storage and show the saved in local storage text and keep the text as the message

//when time passes a past event is marked as past

//clear out at the end of the day?

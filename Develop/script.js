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

        } else if( $( this ).data("time") > hour){
            $( this ).parent().next().children().removeClass('past').addClass('future');
        }
        return;
    });


}, 1000);


//logic for save button to store in local storage and show the saved in local storage text and keep the text as the message
$(".saveBtn").click(function() {
    var eventInputted = $( this ).prev().children().val();
    var timeOfInput = $( this ).prev().prev().children().data("time");
    localStorage.setItem(timeOfInput,eventInputted);

    $(".saveMessage").css("display","flex");
    setTime();
    
});

setTime();

//function to print out the event saved to the local drive
function setTime(){
    $(".hour").each(function (){
        var timeHour = $( this ).data("time");
        console.log(timeHour);
        var eventPrevInput = localStorage.getItem(timeHour);
        console.log(eventPrevInput);
        $( this ).parent().next().children().val(eventPrevInput);
    });  
};

//clear out at the end of the day?
//set interval for one hour
//if hour is 12 am then set all local memory to empty strings and change values in containers to the new local storage items
setInterval(function() {
    if (hour === 0) {
        $(".hour").each(function (){
            var timeHour = $( this ).data("time");
            localStorage.setItem(timeHour, "");
            var eventPrevInput = localStorage.getItem(timeHour);
            $( this ).parent().next().children().val(eventPrevInput);
          
        }); 
    }
},3600000);

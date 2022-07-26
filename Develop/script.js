//use moment js or an alt to post the date on the page and check what the current hour is\
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

    currentDayEl.text(weekday+", "+month+" "+day);


}, 1000);


//change the formatting of the text area depending on the time of day

//logic for save button to store in local storage and show the saved in local storage text and keep the text as the message

//when time passes a past event is marked as passed

//clear out at the end of the day?

//dynamically generate the time slots?
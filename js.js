console.log("hello");

function updateClock(){


    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();

    let timeOfDay = (currentTime<12) ? "AM" : "PM";

    currentMinute = (currentMinute<10) ? "0"+currentMinute : currentMinute;
    currentSecond = (currentSecond<10) ? "0"+currentSecond : currentSecond;

    currentHour = (currentHour>12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour==0) ? currentHour = 12 : currentHour;
    

    currentTimeStr = currentHour + ":" + currentMinute + ":" + currentSecond + ":" + timeOfDay ;

    document.getElementById("clock").innerHTML = currentTimeStr;


}
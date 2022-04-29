// Colton Wade

"use strict";
var $ = function(id) { return document.getElementById(id); };

var displayCurrentTime = function() {

	// Variables
    const d = new Date()
    var hour = d.getHours();
    var ampm = "AM";

	// Get's the correct hour in 12 hour format
	// by subtracting 12 from the hour if hour is greater than 12, and setting it to PM
     if ( hour > 12) {
        hour -= 12;
        ampm = "PM";
    }
    else {
    // Switch statement
        switch(hour = d.getHours()) {
        	// if hour = 12, hour is 12PM
            case hour = 12:
                ampm = "PM";
                break;
            // If hour = 0, hour is 12AM
            case hour = 0:
                ampm = "AM";
                hour = 12;
                break;
            // If none of the above is true, then hour is equal to the date's hour
            default:
                hour = d.getHours();
                break;
        }       
    }   
 
 
     $("hours").firstChild.nodeValue = padSingleDigit(hour);
     $("minutes").firstChild.nodeValue = padSingleDigit(d.getMinutes());
     $("seconds").firstChild.nodeValue = padSingleDigit(d.getSeconds());
     $("ampm").firstChild.nodeValue = ampm;
  
};

var padSingleDigit = function(num) {
	if (num < 10) {	return "0" + num; }
	else { return num; }
};

window.onload = function() {
    displayCurrentTime();
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
    window.setInterval(displayCurrentTime, 1000);
};
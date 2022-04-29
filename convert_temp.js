// Colton Wade
"use strict";
var $ = function(id) { return document.getElementById(id); };


var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

// toFahrenheit function
function toFahrenheit() { 
	// Updates Labels
	$("degree_label_1").innerHTML = "Enter C degrees:"; 		
    $("degree_label_2").innerHTML = "Degrees Fahrenheit:";
	clearTextBoxes();
}

// toCelsius function
function toCelsius() {
	// Updates Labels
	$("degree_label_1").innerHTML = "Enter F degrees:";
	$("degree_label_2").innerHTML = "Degrees Celsius::";
	clearTextBoxes();
 }

 // convertTemp function
function convertTemp() {
	
	// creates variable degreeEntered, stores the value of degrees_entered.
	var degreeEntered = parseFloat($("degrees_entered").value); 
	var convertedTemp;

	// If degreeEntered is not a number it will alert
	if(isNaN(degreeEntered)) {	
		alert("You must enter a valid number for degrees"); 
	}
	// If degreeEntered is a valid number it will convert temp
	else
	{
		// checks to see if to_fahrenheit is checked
		if ($("to_fahrenheit").checked) { 
			// Converts Celsius to Fahrenehit and updates textbox
			convertedTemp = (degreeEntered * 1.8) + 32;
			$("degrees_computed").value = convertedTemp.toFixed(2);
		}
		// checks to see if to_celsius is checked
		else if($("to_celsius").checked) { 
			// Converts Fahrenheit to Celsius and updates textbox
			convertedTemp = (degreeEntered - 32) / 1.8;
			$("degrees_computed").value = convertedTemp.toFixed(2);
		}
		
	}
}

window.onload = function() {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();
};


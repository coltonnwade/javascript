// Colton Wade
"use strict";

const scores = []
const scoresString = []

const displayScores = (scores, scoresString) => {

    // Variables
    var allScores = "";
    var sum = 0;

    // Loops through scoresString and appends the new entry onto allScores
    // also adds all the scores in scores[] to get the sum
    for (var i = 0; i < scoresString.length; i++)
        {       
            allScores += (scoresString[i]+ "\n");
            $("#scores").val(allScores);
            sum += parseFloat(scores[i]);
            console.log("Sum: " + sum);    
        }

    
    // Calculates and Displays average
    var average = sum / scoresString.length;
    $("#average_score").text(average);
    console.log("Average: " + average);

};


$(document).ready( () => {

    // Add
    $("#add_button").click( () => {

            // if score is not a number, less than or equal to 0 or 100, or empty it will alert the user to enter a valid number.
            if (isNaN($("#score").val()) || $("#score").val() <= 0 || $("#score").val() > 100 || $("#score").val() == "") {
                alert("Please enter a valid number");
            }
            // if first_name or last_name is empty, it will alert the user to enter a valid na,e
            else if ($("#first_name").val() == "" || $("#last_name").val() == "") {
                alert("Please enter a valid name ");
            }
            // if the validation passes it will add the score to scores[] and the last name, first name, and score to scoresString[], then calls displayScores
            else if (!isNaN($("#score").val()) && $("#score").val() >= 0 && $("#first_name").val() != "" && $("#last_name").val() != "") {
                parseFloat(scores.push($("#score").val()));
                scoresString.push(($("#last_name").val()) + ", " + ($("#first_name").val()) + " : " + ($("#score").val()));
                displayScores(scores, scoresString);
            }


            // Logs values
            console.log($("#score").val());
            console.log($("#first_name").val());
            console.log($("#last_name").val());
            console.log(scoresString);
            console.log(scores);



                
        // get the add form ready for next entry
        $("#first_name").val( "" );
        $("#last_name").val( "" );
        $("#score").val( "" );
        $("#first_name").focus();
    }); // end click()
    


    $("#clear_button").click( () => {



        // remove the score data from the web page
        $("#average_score").val( "" );
        $("#scores").val( "" );
        scores = []
        scoresString = []

        $("#first_name").focus();
    }); // end click()
       

    $("#sort_button").click( () => {

        // Create new variable of the sorted list.
        var sortedList = scoresString.sort();
        console.log(sortedList);
        

        var newList = "";
        // Loop through array and appends the new var sortedList onto var newList and displays it in the textarea
        for (var i = 0; i < scoresString.length; i++) {
            newList += sortedList[i] + "\n";
            $("#scores").val(newList);
        }
         


    }); // end click()
    
    $("#first_name").focus();
}); // end ready()
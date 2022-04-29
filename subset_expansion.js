"use strict";
// Ready Function
$(document).ready(function() { 
    
    // Attatches click function to all <a> tags
    $("#jdom a").click(function() { 

        // Toggles the Hide class on the previous DIV area      
        $(this).prev().toggleClass("hide"); 
        
        // If the previous DIV class attribute doesn't equal hide
        if($(this).prev().attr("class") != "hide"){
            // Changes text to "Show Less"
            $(this).text("Show Less");
        }
        else {
            // Changes text to "Show More"
            $(this).text("Show More");
        }

     });


});


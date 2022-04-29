"use strict";

$(document).ready( () => {
    $("#validate").click( () => {
        const phone = $("#phone").val();
        const pattern = /^\d{1}.\d{3}|\(\d{3}\).\d{3}.\d{4}$/;  // 1.555.555.5555 or 1-555-555-5555 or 1 (555).555.5555 or 1 (555)-555-5555
        //const pattern = /^\d{1}.\d{3}.\d{3}.\d{4}$/;          // 1-123-456-7890 or 1.123.456.7890
        //const pattern = /^\d{1}-\d{3}-\d{3}-\d{4}$/;          // 1-123-456-7890
        //const pattern = /^\d{3}-\d{3}-\d{4}$/;                // 123-456-7890
        const isValid = pattern.test(phone);

        $("#message").text( (isValid) ? "Valid phone number" : "Invalid phone number" );
        $("#phone").focus();
    }); // end click()
    
    $("#phone").val("123-456-7890");             // set default phone number
    $("#phone").focus();                         // set focus on initial load
    
}); // end ready()
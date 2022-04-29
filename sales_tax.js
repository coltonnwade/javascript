var $ = function (id) {
    return document.getElementById(id); 
};


// processEntries Function
function processEntries()
{  
    // Creates variables for subtotal and tax rate
    var subtotal = $("subtotal").value;
    var taxRate = $("tax_rate").value;


    // Tests if Subtotal is a number OR if subtotal is less than 10,000 OR greater than 0
    if (isNaN(subtotal) || subtotal <= 0 || subtotal > 10000) 
    {
        // If test's fail it will show an appropriate alert
        alert(" Subtotal must be > 0 and < 10000");
    }
    // Tests if Tax Rate is a number OR if Tax Rate is less than 12 OR greater than 0
    else if (isNaN(taxRate) || taxRate <= 0 || taxRate > 12)
    {
        // If test's fail it will show an appropriate alert
        alert("Tax Rate must be > 0 and < 12")
    }
    // If Neither Subtotal or Tax Rate validation fails it will continue to the last else statement
    else 
    {
        
    //     var salesTax = (subtotal * taxRate) / 100;      // calculates Sales Tax                                                
    //     parseFloat(salesTax);                           //  and parses it to a float
                                                        
    //     var total = parseFloat(subtotal) + salesTax;    // parses subtotal to float and adds that to sales tax to calculate final total
    //     parseFloat(total);                              // parses final total to float

    //    $("sales_tax").value = salesTax.toFixed(2);      // set's sales_tax id value equal to salesTax variable, and fixes it to 2 decimal places
    //    $("total").value = total.toFixed(2);             // set's total id value equal to total variable, and fixes it to 2 deimal palces

        calculateTax(subtotal, taxRate);
       $("subtotal").focus();                           // moves cursor back to subtotal input box when method is executed
    }
};


// Calculate Tax
function calculateTax(subtotal, taxRate){

    var salesTax = (subtotal *taxRate) / 100;
    parseFloat(salesTax);

    var total = parseFloat(subtotal) + salesTax;
    parseFloat(total);

    $("sales_tax").value = salesTax.toFixed(2);
    $("total").value = total.toFixed(2);
};

// clearEntities function
var clearEntities = function(){
    $("subtotal").value = "";
    $("tax_rate").value = "";
    $("sales_tax").value = "";
    $("total").value = "";
    $("subtotal").focus();
};

// On load attatches processEntries() to click event for calculate button
document.addEventListener("DOMContentLoaded", () => {
    $("subtotal").focus();
    $("calculate").addEventListener("click", processEntries);
    $("clear").addEventListener("click", clearEntities);
});

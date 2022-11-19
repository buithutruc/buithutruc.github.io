// JavaScript source code
// gpsware.js 

// Script Date: November 2022


/* Function list
1. startup function - displays the current date
2. today function - returns the current date in the format mm/dd/yyyy
3. calculatePrice - calculates the subtotal of
     product unit price multiply by the quantity
4. calculateShipping(shipOption) - calculates the shipping value
5. calculateTotal - calculates the total of placed order
6. validateForm - validates user data entry
*/


/**
 * displays the current date
 */
 function startup() {
    // display the current date in the txtDateNow textbox
    // SYNTAX: object_name.property_name = expression
    // document.form1.txtDateNow.value = '12/05/2022';
    document.getElementById('txtDateNow').value = today();
} // end function startup


/**
 * returns the current date
 */
function today() {
    // create an instance of the Date object 
    let currentdate = new Date();
    
    // extract from the current date variable the date, month, and year
    let thisDate = currentdate.getDate();
    let thisMonth = currentdate.getMonth() + 1;
    let thisYear = currentdate.getFullYear();

   // return the current date in the format mm/dd/yyyy
   let todayDate = thisMonth + '/' + thisDate + '/' + thisYear;
    return todayDate;
}
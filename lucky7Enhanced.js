"use strict";
   /*
            Sandra Mihalos 02/012/2021
            DPR-214 Lab 2 Number Tricks
            
            This program promts the user for a number
            There are several math equations performed
            on the users number
            The final number returned is alway 7, no matter
            what whole number is entered
            
            Promt user to enter their number; validate as number
   */ 
    let number = parseInt(prompt("Enter a whole number."));
    while (isNaN(number)){
        alert("You must enter a whole number")
         number = parseInt(prompt("Enter another number.\n" + "(Must be a valid whole number)"));
    }
		 //create variables and perform calculations
        //each value is carried to the next value for more calculations
	let newNumber = number+9;            //user number entered plus 9
          newNumber = parseInt(newNumber);    
         let newNumber2 = newNumber*2;       //new value multiply by 2
          newNumber2 = parseInt(newNumber2);
         let newNumber3 = newNumber2-4;      //new value subtract 4
          newNumber3 = parseInt(newNumber3);
         let newNumber4 = newNumber3/2;      //new value divided by 2
          newNumber4 = parseInt(newNumber4);
         let newNumber5 = newNumber4-number; // new value minus user entry number
     //this is the value after all calculations are complete
          newNumber5 = parseInt(newNumber5);
		  
	//show an alert box displaying the final result
    alert("Your final number is " + newNumber5);
	//display the calculations and results to the webpage
	document.write("<h2>The Lucky 7 Amazing Number Trick</h2>");
    /*
        Each calculation is displayed on
        a new line with text plus variables
    */
	document.write("The number you have entered is " + number + "<br><br>" +
	" *  " + number +   " plus 9 is          " + newNumber + "<br>" +
    " *  " + newNumber +    " multiplied by 2 is " + newNumber2 + "<br>" +
    " *  " + newNumber2 +   " minus 4 is         " + newNumber3 + "<br>" +
    " *  " + newNumber3 +   " divided by 2 is    " + newNumber4 + "<br>" +                     
    " *  " + newNumber4 +   " minus your entry of " + number + " gives you " + newNumber5 + "<br><br>" +
    "Your final number is " + newNumber5 + "<br><br>");
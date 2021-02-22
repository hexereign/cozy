"use strict";

/*          Sandra Mihalos 02/21/2021
            DPR-214 Lab 4 MadLibs 
            js to collect and process info 
            collected from madLibs.html       */ 

document.getElementById("madLibs-button").addEventListener("click", createMadLibs);

function createMadLibs(){
    // collect entries from madLibs.html
     let pluralNoun = document.getElementById("pluralNoun").value; 
     let noun1 = document.getElementById("noun1").value; 
     let noun2 = document.getElementById("noun2").value;
     let song = document.getElementById("song").value;
     let verb = document.getElementById("verb").value;
    // set as strings
    let strPN = pluralNoun;
    let strN1 = noun1;
    let strN2 = noun2;
    let strS = song;
    let strV = verb;
    // convert strings to lowercase letters 
    let pn = strPN.toLowerCase();
    let n1 = strN1.toLowerCase();
    let n2 = strN2.toLowerCase();
    let s = strS.toLowerCase();
    let v = strV.toLowerCase();
  // Format result output  
let result = "Your MadLibs Results" + "<br><br>"  +
    "Taking cooking lessons can produce unusual results. " + "<br><br>" +
"1. Keep two " + pn + " on the stand mixer during your prep." + "<br>" +
"2. Pour in the " + n1 + " for some extra flavor and a " + n2 + " to add texture ." + "<br>" +
"3. Keep singing " + s  + " while you stir. " + "<br>" +
"4. Stop stirring when you see the mixture " + v +
    " on the sides of the bowl. " + "<br><br>" +
    '<button id="goAgain-button" onclick="goAgain()">Go Again</button>';
    
    document.getElementById("result").innerHTML = result;   
} // close createMadLibs function
function goAgain(){
   document.getElementById("pluralNoun").value = ""; 
   document.getElementById("noun1").value = ""; 
   document.getElementById("noun2").value = ""; 
   document.getElementById("song").value = ""; 
   document.getElementById("verb").value = ""; 
   location.reload();
} //close go Again
"use strict";
/*  Sandra Mihalos 03/21/2021
    DPR-214 Lab 6 Test Score App 
    js to manipulate DOM        
*/ 

let $ = function(id) {
	return document.getElementById(id);
};
let names = ["Ben", "Joel", "Judy", "Anne"];
let scores = [88, 98, 77, 88];

// validate name and score inputs and add to arrays
// push to add user input to names and scores arrays$
let addScore = function(){
	let name = $("name").value;
	let score = $("score").value;
    if (name == ""){
         alert("You must enter a name and a valid score")
    }
    else if (isNaN(score) || score ==""){
        alert('You must enter a name and a valid score')
    } 
    else if (score < 0 || score > 100){
         alert('You must enter a name and a valid score')
    } 
    else {
		 names.push($("name").value);
         scores.push($("score").value);
    }
    $("name").value = "";
    $("score").value = "";
    $("name").focus();
 };  // close addScore   

// iterate through scores array to get highest score and also calculate average score
let displayResults = function () {
    	
    let results = $("results"); // selecting parent 'results'
    
    const Heading2 = document.createElement("h2"); // creating child heading
    Heading2.innerHTML = "Results"; 
    results.append(Heading2);
  let sum = 0;
  let highScore = 0;
  let j;
    for( let i = 0; i < scores.length; i++ ){
        j = parseInt(scores[i],10);
        sum += j;
    if (j > highScore)highScore = j;  
    } 
	let avg = sum/scores.length;
    let avgScore = Math.round(avg);
    
      const paragraph = document.createElement("p"); // creating child
      paragraph.innerHTML = "The average score is " + avgScore + "<br>" + "The High Score is " + highScore; // adding some content
      results.append(paragraph);
 
}; // close displayResults

//  display table of names and scores
let displayScores = function () {

    let table = $("scores_table");
	
	let headers = ['Name', 'Score'];
    const scoresTable = $("scores_table"); // selecting parent "scores_table"

    const heading2 = document.createElement("h2"); // creating child heading
    heading2.innerHTML = "Scores"; // adding heading
    scoresTable.append(heading2);
    
	let headerRow = document.createElement('tr');
    	let tBody = table.tBodies[0];

	headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
	table.appendChild(headerRow);
    
    if (tBody == undefined) {
        tBody = document.createElement("tBody");
        table.appendChild(tBody);
    }
    for (let i = 0; i < scores.length; i++) {
        let row = tBody.insertRow(-1);
        let textNode = document.createTextNode(names[i]);
        let cellNode = row.insertCell(-1);
        cellNode.appendChild(textNode);
        let scoreNode = document.createTextNode(scores[i]);
        let cellNode2 = row.insertCell(-1);
        cellNode2.appendChild(scoreNode);
    }
}; //  close displayScores

window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
    $("name").focus();
};


"use strict";
/*  Sandra Mihalos 04/12/2021
    DPR-214 Lab 9
    Monster Mash
*/
$(document).ready(function(){
    
    lightning_one();
    lightning_two();
    lightning_three();

    var headclix=0, eyeclix=0, noseclix=0, mouthclix=0;
    $("#head").click(function(){
        if(headclix<9){ 
            $(this).animate({left: "-=367px"},500);
            headclix += 1;
        }
        else{ 
            $(this).animate({left: "0px"}, 500);
            headclix=0;
        }
    });

    $("#eyes").click(function(){
        if(eyeclix<9){
            $(this).animate({left: "-=367px"},500);
            eyeclix += 1;
        }
        else{ 
            $(this).animate({left: "0px"}, 500);
            eyeclix=0;
        }
    });

    $("#nose").click(function(){
        $(this).animate({left: "-=367px"},500);
        if(noseclix<9){
            noseclix += 1;
        }
        else{ 
            $(this).animate({left: "0px"}, 500);
            noseclix=0;
        }
    });

    $("#mouth").click(function(){
        $(this).animate({left: "-=367px"},500);
        if(mouthclix<9){
            mouthclix += 1;
        }
        else{ 
            $(this).animate({left: "0px"}, 500);
            mouthclix=0;
        }
    });

});//end doc.onready function

function lightning_one(t){
    $("#container #lightning1").fadeIn(250).fadeOut(250);
    setTimeout("lightning_one()", 7000);
};
function lightning_two(){
    $("#container #lightning2").fadeIn(250).fadeOut(250);
    setTimeout("lightning_two()", 8000);
};
function lightning_three(){
    $("#container #lightning3").fadeIn(250).fadeOut(250);
    setTimeout("lightning_three()", 10000);
};


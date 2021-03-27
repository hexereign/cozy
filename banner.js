"use strict";
/*  Sandra Mihalos 03/27/2021
    DPR-214 Lab 7  
    Cycling Banners       
*/ 
window.onload = initBannerLink;

let $ = function(id) {
	return document.getElementById(id);
};
//  Arrays to hold banners and URLs
let theAd = 0;
let adURL = new Array("javascript.com","java.com","cplusplus.com","python.org", "ruby-lang.org/en/","golang.org")
let adImages = new Array("images/superhero1.png","images/superhero2.png","images/superhero3.png","images/superhero4.png","images/superhero5.png","images/superhero6.png");
//   functions to add URLs to banners and add click event and timer 
function initBannerLink() {
    if ($("adBanner").parentNode.tagName == "A")
    {
    $("adBanner").parentNode.onclick =
    newLocation;
    }
    rotate();
    }
    function newLocation() {
        // open banner link in new tab
     window.open('http:/www.' + adURL[theAd]);   
    return false;
    }
function rotate() {
     theAd++;
     if (theAd == adImages.length) {
        theAd = 0;
     }
     $("adBanner").src = adImages[theAd];

     setTimeout(rotate, 4 * 1000);
}
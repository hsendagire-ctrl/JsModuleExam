// JavaScript IPO Written Response

// Var Definitions:
var inputBox = document.getElementById("q1-out");
var firstInput = document.getElementById("q1-input");
var nameBtn = document.getElementById("q1-btn");
var heroBtn = document.getElementById("q2-btn");
var secondHeader = document.getElementById("q2-char");
var heroBorder = document.getElementById("q2-div");
var heroImage = document.getElementById("q2-img");
var calcBtn = document.getElementById("q3-btn");
var radius = document.getElementById("q3-radius").value;
var height = document.getElementById("q3-height").value;
var slant = document.getElementById("q3-slant").value;
var volumeOut = document.getElementById("q3-volume");
var areaOut = document.getElementById("q3-area");

// Event Listeners
calcBtn.addEventListener("click", calculate);
heroBtn.addEventListener("click", changeHero);
nameBtn.addEventListener("click", addstars);

// Question 1 (7 marks)
// The user types any 3 letter word in the input. Then, in the box below, their name appears, surrounded by stars. For example:
//    *********
//    ***CAT***
//    *********

function addstars() {
  var threeLetterWord = firstInput.value;
  console.log(threeLetterWord);
  let starstring = `********* ${threeLetterWord} *********`;
  var finalstring = starstring;
  console.log(finalstring);
  finalstring = inputBox.innerHTML;
}

// Question 2 (8 marks)
// When the user clicks the button, these 4 things happen:
//  - The image changes from hulk to captain america (the images are already in the images folder)
//  - The h2 should say "Captain America" instead of "The Incredible Hulk"
//  - The site background changes to blue (this is the color along the sides that is currently green)
//  - The border color around the image changes to blue

function changeHero() {
  heroImage.src = "images/captain.jpg";
  secondHeader.innerHTML = "Captain America";
  document.body.style.background = "blue";
  heroBorder.style.border = "blue";
}

// Question 3 (10 marks)
// When the user clicks the button, take the numbers typed in the radius, height, and slant inputs, and calculate both the volume and area of the cone.  Then output the results to the appropriate spans. Round to 2 decimal places. Use either 3.14 or Math.PI for your calculations.

function calculate() {
  var area =
    Math.PI * Number(radius) ** 2 + Math.PI * Number(radius) * Number(slant);
  var volume = (Math.PI * Number(radius) ** 2 * Number(height)) / 3;
  volumeOut.innerHTML = volume;
  areaOut.innerHTML = area;
}

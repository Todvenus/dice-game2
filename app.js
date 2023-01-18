// Toglogchinn eeljiig xadgalax xuwisagch
var activePlayer = 1;

//Toglogchiin onoog xadgalax xuwisagch
var score = [0, 0];

//Eeljiin onoo xuwisagch
var roundScore = 0;
// Shonii ali talaataa buusang xadgalax xuwisagch  
var dice = Math.floor (Math.random()*6) + 1;

console.log("shoo :" +dice);
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";


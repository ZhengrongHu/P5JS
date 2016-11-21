/*
note: 
use for loop to make repetation

*/

function setup() {
  createCanvas(800, 800);
  strokeWeight(2);
}

function draw() {
  background(255);  
  for (var i = 20; i < 400; i+=60){
    line(i, 40, i+60, 80);
  }
}



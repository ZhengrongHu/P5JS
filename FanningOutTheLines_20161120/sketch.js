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
  for (var i = 20; i < 400; i+=20){
    line(i, 0, i+ i/2, 80);
    line(i+i/2, 80, i+1.2, 120);
  }
}



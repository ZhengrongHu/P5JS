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
  for (var y = 0; y <= height; y += 40){
    for (var x = 0; x <= width; x += 40){
      fill(255, 140);
      ellipse(x, y, 40, 40);
    }
  }
}



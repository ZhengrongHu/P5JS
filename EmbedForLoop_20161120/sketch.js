/*
note: 
use for loop to make repetation

*/

function setup() {
  createCanvas(400, 400);
  strokeWeight(2);
}

function draw() {
  background(255);  
  for (var y = 0; y <= height; y += 40){
    fill(255, 140);
    ellipse(0, y, 40, 40);
  }
  
  for (var x = 0; x <= width+45; x += 40){
    fill(255, 140);
    ellipse(x, 0, 40, 40);
    }
  }



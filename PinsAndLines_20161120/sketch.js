/*
note: 
use for loop to make repetation

*/

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);  
  for (var y = 32; y <= height; y += 8){
    for (var x = 12; x <= width; x += 15){
      ellipse( x+y, y , 16 - y/10.0, 16 - y/10.0);
    }
  }
}

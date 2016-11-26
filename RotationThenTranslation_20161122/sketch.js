/*
note: 
  The order in which translate() and rotate() appear affects the result
 
*/
var angle = 0.0;

function setup() {
  
  createCanvas(120, 120);
  background(204);
  
}

function draw() {
  
  translate(mouseX, mouseY);
  rotate(angle);

  rect(-15, -15, 30, 30);
  angle += 0.1;
  
  
}
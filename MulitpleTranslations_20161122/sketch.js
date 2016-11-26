/*
note: 
 rotate() functions has one parameter angle(in radians) to rotate. It always rotate relative to (0, 0) know as the origin. 
 
*/
function setup() {
  
  createCanvas(120, 120);
  background(204);
  
}

function draw() {
  
  rotate(mouseX / 100.0);
  rect(40, 30, 160, 20);
  
  
}
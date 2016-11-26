/*
note: 
 To rotate a shape, first define the rotation angle with rotate(), then draw the shape
 To rotate a shape around its own center, it must be drawn with coordinate (0, 0) in the middle. 
 
*/
function setup() {
  
  createCanvas(120, 120);
  background(204);
  
}

function draw() {
  
  rotate(mouseX /100.0);
  rect(-80, -10, 160, 20);
  
  
}
/*
note: 

if you want a shape to be drawn on top of all other shapes, it need to follow the others in the code

*/


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(204);
  ellipse(140, 100, 60, 60);
  strokeWeight(8);
  ellipse(200, 100, 60, 60);
  ellipse(260, 100, 60, 60);
  strokeWeight(20);
  ellipse(320, 100, 60, 60);
}



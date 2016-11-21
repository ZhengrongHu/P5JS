/*
note: 

if you want a shape to be drawn on top of all other shapes, it need to follow the others in the code

*/


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(204);
  ellipse(140, 0, 190, 190);
  //the rect draws on top of the ellipse
  rect(160, 30, 260, 20);
  
  //reverse
  rect(260, 60, 260, 20);
  ellipse( 200, 100, 190, 190);
}



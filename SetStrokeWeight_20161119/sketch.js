/*
note: 

if you want a shape to be drawn on top of all other shapes, it need to follow the others in the code

*/


function setup() {
  createCanvas(600, 600);
  strokeWeight(12);
}

function draw() {
  background(204);
  strokeJoin(ROUND); //Round the stroke corners
  rect(40, 25, 70, 70);
  
  strokeJoin(BEVEL); // Bevel the stroke corners
  rect(140, 25, 70, 70);
  
  strokeCap(SQUARE); // Square the line endings
  line(270, 25, 340, 95);
  
  strokeCap(ROUND); // Round the line endings
  line(350, 25, 420, 95);
}



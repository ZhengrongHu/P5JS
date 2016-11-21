/*
note: 

if you want a shape to be drawn on top of all other shapes, it need to follow the others in the code

*/


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(204);              //Black 
  fill(153);                  // Light Gray 
  ellipse(132, 82, 200, 200); // Light Gray 
  
  noFill();                  //Turn off fill 
  ellipse(228, -16, 200, 200); //Outline circle
  
  noStroke();                  //Turn off stroke
  ellipse(268, 118, 200, 200); //Dosen't draw
}



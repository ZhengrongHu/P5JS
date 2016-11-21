/*
note: 

if you want a shape to be drawn on top of all other shapes, it need to follow the others in the code

*/


function setup() {
  createCanvas(600, 600);
  strokeWeight(12);
}

function draw() {
  background(0);              //Black 
  fill(204);                  // Light Gray 
  ellipse(132, 82, 200, 200); // Light Gray 
  
  fill(153);                  //Meduim Gray
  ellipse(228, -16, 200, 200); //Meduim Gray
  
  fill(102);                  //Drak Gray
  ellipse(268, 118, 200, 200); //Drak Gray
}



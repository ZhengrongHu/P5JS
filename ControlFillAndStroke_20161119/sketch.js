/*
note: 

if you want a shape to be drawn on top of all other shapes, it need to follow the others in the code

*/


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0, 26, 51);      //Dark blue color 
  fill(255, 0, 0);            // Red color
  ellipse(132, 82, 200, 200); // Red circle 
  
  fill(0, 255, 0);             //Green color  
  ellipse(228, -16, 200, 200); //Green circle
  
  fill(0, 0, 255);            //Blue color 
  ellipse(268, 118, 200, 200); //Blue circle
}



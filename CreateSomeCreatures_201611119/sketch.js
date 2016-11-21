/*
note: 

beginShaPpe() signals the start of a new shape, the vertex() is used to define each pair of x and y coordinates for the shape, endShape() is called to signal that shape is finished

*/

function setup() {
  createCanvas(800, 800);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  background(0, 26, 51);  
  //Neck 
  stroke(102);  // set strokc to gray
  line(266, 257, 266, 162); //left
  line(276, 257, 276, 162); //Middle
  line(286, 257, 286, 162); //Right
  
  //Antennae
  line(276, 155, 246, 122); //small
  line(276, 155, 306, 56); //tall
  line(276, 155, 342, 170); //Medium
  
  //Body
  noStroke(); //Disable stroke
  fill(102); //set fill to gray
  ellipse(264, 377, 33, 33); //Antigravity orb
  fill(0); //set fill to black
  rect(219, 257, 90, 120); //Main body
  fill(102); //set fill to gray
  rect(219, 274, 90, 6); //Gray Stripe
  
  //Head
  fill(0); 
  ellipse(276, 155, 45, 45); //Head
  fill(255); 
  ellipse(288, 150, 14, 14); //large eye
  fill(0); 
  ellipse(288, 150, 3, 3); //pupil
  fill(153); 
  ellipse(263, 148, 5, 5); //small eye 1
  ellipse(296, 130, 4, 4); //small eye 2
  ellipse(305, 162, 3, 3); //small eye 3
  
}



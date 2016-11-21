/*
note: 

beginShaPpe() signals the start of a new shape, the vertex() is used to define each pair of x and y coordinates for the shape, endShape() is called to signal that shape is finished

*/

function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  background(0, 26, 51);  
  
  beginShape();
  vertex(180, 82);
  vertex(207, 36);
  vertex(214, 63);
  vertex(407, 11);
  vertex(412, 30);
  vertex(219, 82);
  vertex(226, 109);
  endShape();
  
}



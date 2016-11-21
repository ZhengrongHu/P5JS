/*
note: 
Each trip through draw() is called a frame. The default frame rate is 60 frames per second
*/

function setup() {
  createCanvas(480, 120);
  strokeWeight(30);
}

function draw() {
  background(204);
  stroke(102);
  line(40, 0, 70, height);
  if (mouseIsPressed == true){
    stroke(0);
  }
  line(0, 70, width, 50);
}


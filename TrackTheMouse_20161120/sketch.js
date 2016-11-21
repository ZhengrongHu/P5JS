/*
note: 
Each trip through draw() is called a frame. The default frame rate is 60 frames per second
*/

function setup() {
  createCanvas(480, 120);
  fill(0, 102);
  noStroke();
}

function draw() {
background(203);
ellipse(mouseX, mouseY, 9, 9);

}


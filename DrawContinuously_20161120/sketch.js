/*
note: 
Each trip through draw() is called a frame. The default frame rate is 60 frames per second
*/

function setup() {
  createCanvas(480, 120);
  strokeWeight(4);
  stroke(0, 102);

}

function draw() {
  var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
  strokeWeight(weight);
  line(mouseX, mouseY, pmouseX, pmouseY);
}


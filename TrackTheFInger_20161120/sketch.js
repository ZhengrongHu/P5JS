/*
note:MAP 
*/

function setup() {
  createCanvas(480, 120);
  strokeWeight(12);
}

function draw() {
  background(204);
  stroke(102);
  line(mouseX, 0, mouseY, height);//gray line
  stroke(0);
  var mx = mouseX/2 + 60;
  line(mx, 0, mx, height); //black line
}
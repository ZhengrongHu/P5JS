/*
note: for touch Screen devices
*/

function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  line(20, 20, 220, 100);
  if(touchIsDown){
    line(220, 20, 20, 100);
  }
}
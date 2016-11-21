/*
note:MAP 
map(ValueNeedToBeMapped, OriginalStartValue, OriginalEndValue, NewStartValue, NewEndValue)
*/

function setup() {
  createCanvas(480, 120);
  strokeWeight(12);
}

function draw() {
  background(204);
  stroke(102);
  line(126, 60, mouseY, height);//white line
  stroke(0);
  var mx = map(mouseX, 0, width, 60, 180);
  line(120, 60, mx, mouseY); //black line
} 
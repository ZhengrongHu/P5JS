/*
note: 
Each trip through draw() is called a frame. The default frame rate is 60 frames per second
*/
var x; 
var offset = 10;

function setup() {
  createCanvas(480, 120);
  x = width/2
}

function draw() {
  background(204);
  if (mouseX > x){
    x+= 0.5;
    offset = -10;
  }
  if (mouseX < x){
    x-= 0.5;
    offset = 10;
  }
  //draw arrow left to right depending on "offset" value 
  line(x, 0, x, height);
  line(mouseX, mouseY, mouseX + offset, mouseY - 10);
  line(mouseX, mouseY, mouseX + offset, mouseY + 10);
  line(mouseX, mouseY, mouseX + offset, mouseY); // mid
  }

/*
note: 
Each trip through draw() is called a frame. The default frame rate is 60 frames per second
*/
var x = 0; 
var easing = 0.01;

function setup() {
  createCanvas(220, 120);
}

function draw() {
  var targetX = mouseX;
  x+= (targetX - x)* easing;
  ellipse(x, 40, 12, 12);
  print(targetX + ":" + x);
}


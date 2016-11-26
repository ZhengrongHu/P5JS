/* 
note:
 the cos() values provide the x coordinates and the sin() values provide the y 
 coordinates. Both are multiplied by a variable named scalar to change the 
 radius of the movement. 
*/
var angle = 0.0;
var offset = 60; 
var scalar = 2; 
var speed = 0.05;

function setup() {
  createCanvas(120, 120);
  fill(0);
  background(204);
}

function draw() {
  var x = offset + cos(angle)*scalar;
  var y = offset + sin(angle)*scalar;
  ellipse(x, y, 2, 2);
  angle += speed;
  scalar += speed;
}
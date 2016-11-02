var circle1 = {
    x: 0, y:200, diameter: 50
}

var circle2 = {
    x: 0, y:200, diameter: 50
}

var r = 218;
var g = 160;
var b = 221;

function setup() {
  
  createCanvas(500,500);
  
}

function draw() {
  background(r,g,b);
  fill(250, 200, 200);
  ellipse(circle1.x, circle1.y, circle1.diameter, circle1.diameter);
  ellipse(circle2.x, circle2.y, circle2.diameter, circle2.diameter);
  circle1.x = circle1.x +1;
  circle2.x = circle2.x +3;
  
}
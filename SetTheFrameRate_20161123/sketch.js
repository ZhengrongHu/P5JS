/*
note: 
  arc(a,b,c,d,start,stop,[mode])
  Parameters
  a	Number: x-coordinate of the arc's ellipse
  b	Number: y-coordinate of the arc's ellipse
  c	Number: width of the arc's ellipse by default
  d	Number: height of the arc's ellipse by default
  start	Number: angle to start the arc, specified in radians
  stop	Number: angle to stop the arc, specified in radians
  [mode]	Constant: optional parameter to determine the way of drawing the arc
*/

var radius = 40;
var x = -radius;
var speed = 0.5;

function setup(){
  createCanvas(240, 120);
  ellipseMode(RADIUS);
}

function draw(){
 background(0);
 x += speed // increas the value of x
 arc(x, 60, radius, radius, 0.52, 5.76);
}
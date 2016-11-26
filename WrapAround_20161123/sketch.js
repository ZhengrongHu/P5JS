/*
note: 
#1: 
  arc(a,b,c,d,start,stop,[mode])
  Parameters
  a	Number: x-coordinate of the arc's ellipse
  b	Number: y-coordinate of the arc's ellipse
  c	Number: width of the arc's ellipse by default
  d	Number: height of the arc's ellipse by default
  start	Number: angle to start the arc, specified in radians
  stop	Number: angle to stop the arc, specified in radians
  [mode]	Constant: optional parameter to determine the way of drawing the arc
  
#2: 
  
  

*/

var radius = 40;
var x = 110;
var speed = 0.5;
var direction = 1;

function setup(){
  createCanvas(240, 120);
  ellipseMode(RADIUS);
}

function draw(){
 background(0);
 x += speed * direction; 
  if ((x > width - radius) || ( x < radius )){
   direction = - direction;  // flip direction
 }
  if (direction == 1){
    arc(x, 60, radius, radius, 0.52, 5.76); // face right
  } else {
    arc(x, 60, radius, radius, 3.67, 8.9); // face left
  }
}
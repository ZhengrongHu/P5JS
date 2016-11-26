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
  [mode]	Constant: optional parameter to determine the way of drawing the +
  
#2: 
  
  
*/

var startX = 20; //initial x coordinate
var stopX = 160; //final x coordiante
var startY = 30; //intial y coordinate
var stopY = 80; //final y coordinate
var x = startX; //current x coordinate 
var y = startY; //current y coordinate 
var step = 0.005; //creatCanvas of each step(0.0 to 1.0);
var pct = 0.0; // percentage traveled (0.0 to 1.0);

function setup(){
  createCanvas(240, 120);
}

function draw(){
 background(0);
 if (pct < 1.0 ) {
   x = startX + ((stopX - startX)*pct);
   y = startY + ((stopY - startX)*pct); 
   pct += step;
 }
 ellipse(x, y, 20, 20);
}
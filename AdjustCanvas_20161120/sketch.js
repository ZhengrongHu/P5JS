/*
note: 
+, -, *, /, == 
all are operators

y += 10; equals x = x + 10;

x++; equals x = x+1;

*/
//declrea variables
var x = 25; 
var h = 20; 
var y = 25; 

function setup() {
  createCanvas(800, 800);
  strokeWeight(2);
}

function draw() {
  background(0, 26, 51);  
  x = 20; 
  rect(x, y, 300, h); //Top
  x = x+100; 
  rect(x, y+h, 300, h) //Middle
  x = x-25;
  rect(x, y+h*2, 300, h); //Bottom
}



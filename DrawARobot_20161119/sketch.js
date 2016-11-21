/*
note: 

*/

function setup() {
  createCanvas(800, 800);
  strokeWeight(2);
}

function draw() {
  background(0, 26, 51);  
  line(0, 0, width, height); 
  line(width, 0, 0, height); 
  ellipse(width/2, height/2, 60, 60); 
}



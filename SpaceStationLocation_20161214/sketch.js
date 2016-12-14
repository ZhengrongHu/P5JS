var lineX = 0; 

function setup(){
  createCanvas(600, 400); 
}

function draw() {
  background(0);
  
  stroke(255); 
  line ( lineX, 0, lineX, height); 
  lineX = lineX +5; 
  if (lineX > width){
    lineX = 0; 
  }
}
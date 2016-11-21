/*
note: 

fill()  and sthroke() alpha value range from 0 to 255 to set the amount of transparency 
255 entriely opaque 

*/


function setup() {
  
  createCanvas(600, 600);
  noStroke();
  
}

function draw() {
  background(0, 26, 51);      //Light blue color 
  fill(255, 0, 0, 160);       //Red color
  ellipse(132, 82, 200, 200); //Red circle
  
  fill(0, 255, 0, 160);        //Green color 
  ellipse(228, -16, 200, 200); //Green circle
  
  fill(0, 0, 255, 160);       //Blue color
  ellipse(268, 188, 200, 200); //Blue circle
  
}



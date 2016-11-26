/* 
note:
  translate() is used to move the origin (0, 0) to 110 pixeis over and 110 pixeis down. 
  
  Syntax
  quad(x1,y1,x2,y2,x3,y3,x4,y4)
  quad(x1,y1,x2,y2,x3,y3,x4,y4)
  Parameters
  x1	Number: the x-coordinate of the first point
  y1	Number: the y-coordinate of the first point
  x2	Number: the x-coordinate of the second point
  y2	Number: the y-coordinate of the second point
  x3	Number: the x-coordinate of the third point
  y3	Number: the y-coordinate of the third point
  x4	Number: the x-coordinate of the fourth point
  y4	Number: the y-coordinate of the fourth point

*/

function setup(){
  createCanvas(500, 120);
}

function draw(){
  background(204);
  translate(200, 110);
  stroke(0);
  strokeWeight(70);
  line(0, -35, 0, -65); // body
  noStroke();
  fill(204);
  ellipse(-17.5, -65, 35, 35); // left eye dome
  ellipse(17.5, -65, 35, 35); // right eye dome
  arc(0, -65, 70, 70, 0, PI); // chin
  fill(0);
  ellipse(-14, -65, 8, 8); // left eye 
  ellipse(14, -65, 8, 8); // right eye
  quad(0, -58, 4, -51, 0, -44, -4, -51); // beak 
}

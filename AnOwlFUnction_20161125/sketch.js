/* 
note:
  translate() is used to move the origin (0, 0) to 110 pixeis over and 110 pixeis down. 

*/

function setup(){
  createCanvas(500, 120);
}

function draw(){
  background(204);
  for (var x = 35; x < width + 70; x += 70){
    owl(x, 110);
  }
}
  
function owl(x, y){
  push();
  translate(x, y);
  stroke(0);
  strokeWeight(70);
  line(0, -35, 0, -65); // body
  noStroke();
  fill(255);
  ellipse(-17.5, -65, 35, 35); // left eye dome
  ellipse(17.5, -65, 35, 35); // right eye dome
  arc(0, -65, 70, 70, 0, PI); // chin
  fill(0);
  ellipse(-14, -65, 8, 8); // left eye 
  ellipse(14, -65, 8, 8); // right eye
  quad(0, -58, 4, -51, 0, -44, -4, -51); // beak 
  pop();
}
  
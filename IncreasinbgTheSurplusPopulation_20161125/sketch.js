/* 
note:
  translate() is used to move the origin (0, 0) to 110 pixeis over and 110 pixeis down. 

*/

function setup(){
  createCanvas(500, 120);
}

function draw(){
  background(204);
  for (var i = 35; i < width +40; i += 40){
    var gray = int (random(0, 102));
    var scaler = random(0.25, 1.0);
    owl(i, 110, gray, scaler);
  }
}
  
function owl(x, y, g, s){
  push();
  translate(x, y);
  scale(s); // set the scale
  stroke(g); //set the gray value
  strokeWeight(70);
  line(0, -35, 0, -65); // body
  noStroke();
  fill(255);
  ellipse(-17.5, -65, 35, 35); // left eye dome
  ellipse(17.5, -65, 35, 35); // right eye dome
  arc(0, -65, 70, 70, 0, PI); // chin
  fill(g);
  ellipse(-14, -65, 8, 8); // left eye 
  ellipse(14, -65, 8, 8); // right eye
  quad(0, -58, 4, -51, 0, -44, -4, -51); // beak 
  pop();
}
  
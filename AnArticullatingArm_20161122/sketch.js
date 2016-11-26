/*
note: 
  scale is written as decimal percentages, therefore, parameter 1.5 to scale() is 150% and 3 is 300%
  like rotate(), the scale() function transorms from the origin
 
*/


function setup() {
  createCanvas(120, 120);
  background(204);
}

function draw() {
  translate(mouseX, mouseY); 
  scale(mouseX / 60.0);
  rect(-15, -15, 30, 30);
}

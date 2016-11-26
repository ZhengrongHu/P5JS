/*
note: 
  scale is written as decimal percentages, therefore, parameter 1.5 to scale() is 150% and 3 is 300%
  like rotate(), the scale() function transorms from the origin
  To maintain a consistent stroke weight as a shape scales, divide the desired stroke weight by the scalar value
 
*/


function setup() {
  createCanvas(240, 240);
  background(204);
}

function draw() {
  translate(mouseX, mouseY); 
  var scalar = mouseX / 60.0
  scale(scalar);
  strokeWeight(1.0 / scalar);
  rect(-15, -15, 30, 30);
}

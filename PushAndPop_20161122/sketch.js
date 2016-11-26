/*
note: 
  To isolate the effects of transformations so they don't affect 
  later function. 
  When push() is run, it saves a copy of the current coordinate 
  system and then restores that system adter pop()
 
*/


function setup() {
  createCanvas(240, 240);
  background(204);
}

function draw() {
  // push();
  // translate(mouseX, mouseY);
  // rect(0, 0, 30, 30);
  // pop();
  translate(35, 10);
  rect(0, 0, 15, 15);
}

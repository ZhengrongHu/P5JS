/*
note: keyCode, ALT, CONTROL, SHIFT, UP_ ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW
*/
var x = 215; 

function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  if (keyIsPressed){
    if (keyCode == LEFT_ARROW ){
      x--;
    } else if (keyCode == RIGHT_ARROW){
      x++;
    }
  }
  rect(x, 45, 50, 50);
}
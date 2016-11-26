/*
note: 
  The order in which translate() and rotate() appear affects the result
 
*/
var angle = 0.0;
var angleDirection = 1;
var speed = 0.005;


function setup() {
  createCanvas(120, 120);
}

function draw() {
  background(204);
  translate(20, 25); // move to start position
  rotate(angle);
  strokeWeight(12);
  line(0, 0, 40, 0);
  translate(40, 0); // move to next joint
  rotate(angle*2.0);
  strokeWeight(6);
  line(0, 0, 30, 0);
  translate(30, 0); // move to next joint
  rotate(angle*2.5);
  strokeWeight(3);
  line(0, 0, 20, 0);
  
  angle += speed*angleDirection;
  if ((angle > QUARTER_PI) || (angle < 0)){
    angleDirection*=-1; // the angle variable grows from 0 to Quarter_pi; the angleDirection is -1 or 1 to make the value of anlge correspondinly increase or decrease
}
}
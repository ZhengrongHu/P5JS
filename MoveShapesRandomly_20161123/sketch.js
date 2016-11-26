/*
note: 
   the constrain() function limits a value to a specific range
*/

var time1 = 2000;
var time2 = 4000;
var x = 0;

function setuo(){
  createCanvas(480, 120);
}
 
function draw(){
  var currentTime = millis();
  background(204);
  if (currentTime > time2){
    x -= 0.5;
  } else if (currentTime > time1) {
    x += 2;
  }
  ellipse(x, 60, 90, 90);
}
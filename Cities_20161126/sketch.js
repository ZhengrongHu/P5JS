var blip; 

var radius = 120;
var x = 0;
var speed = 1.0;
var direction = 1;

function preload(){
  blip = loadSound("blip.wav");
}

function setup(){
  createCanvas(440, 440);
  ellipseMode(RADIUS);
  x = width/2; // start in the center
}

function draw(){
  background(0);
  x += speed * directions;
  if (( x > width-radius) || ( x < radius)){
    direction = - direction; // flip direction
    blip.play();
  }
if (direction == 1){
  arc ( x, 220, radius, radius, 0.52, 5.76); // face right
  arc ( x, 220, radius, radius, 3.67, 8.9); // face left
}
}
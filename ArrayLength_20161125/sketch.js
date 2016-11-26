/*
note: 
 avoid creating arrays with draw(), as creating a new array on every frame will
 slow down your frame rate
 */
 
var gray = [];

function setup(){
  createCanvas(240, 120);
  for (var i = 0; i < width; i++){
    gray[i] = random(0, 255);
  }
}

function draw(){
  background(204); 
  for (var i = 0; i < gray.length; i++){
    stroke(gray[i]);
    line(i, 0, i, height);
  }
}
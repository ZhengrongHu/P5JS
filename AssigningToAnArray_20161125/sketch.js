/*
note: 
 avoid creating arrays with draw(), as creating a new array on every frame will
 slow down your frame rate
 */
 
var x = [-20, 20];
console.log(x.length);

function setup(){
  createCanvas(240, 120);
  noStroke();
}

function draw(){
  background(0);
  x[0] += 0.5; //increase the first element
  x[1] += 0.5; // increase the second element
  arc(x[0], 30, 40, 40, 0.52, 5.76);
  arc(x[1], 90, 40, 40, 0.52, 5.76);
}
var words = [ "rain", "hard", "sand", "tomoorw"];

var num = 23;
var index = 0; 


function setup() {
  createCanvas(400, 500);
}

function draw() {
  background(0);
  fill(255);
  textSize(32);
  text("rain", 30, 21);
  text(words[index], 12, 200);
}

function mousePressed(){
  index = index + 1; 
}
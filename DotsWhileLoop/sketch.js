




function setup() {
  createCanvas(600, 600)
}

function draw() {
  background(0);
  strokeWeight(5);
  stroke(255);
  
  var x = 0;
  
  while(x < width){
  ellipse(x, 100, 25, 25);
  x = x + 50;
  
  // ellipse(x, 200, 25, 25);
  // x = x + 50;
  
  // ellipse(x, 200, 25, 25);
  // x = x + 50;
  
  // ellipse(x, 200, 25, 25);
  // x = x + 50;
  
  // ellipse(x, 200, 25, 25);
  // x = x + 50;
}
for (var x = 0; x < width; x = x + 50){
  fill(255, 0, 200);
  ellipse(x, 300, 25, 25);
  //x += 50 : x = x + 50
}
}
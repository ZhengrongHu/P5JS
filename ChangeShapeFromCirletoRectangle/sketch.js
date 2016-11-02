var on = false;

function setup() {
  
  createCanvas(600,600);
}

function draw() {
  if (on == true) {
    background(0, 255, 0);
  } else{
  background(0);
  }
  stroke(255);
  strokeWeight(5);
  noFill();
  
  // if(mouseX > 250 && mouseX<350){
  //   fill(255, 0, 200);
  //   // ellipse(300, 200, 100, 100);
  // }
  // else{
  rectMode(CENTER);
  rect(300, 300, 100, 100);
  
  // rectMode(CORNER);
  // rect(300, 300, 100, 100);
  
  // rectMode(RADIUS);
  // rect(300, 300, 100, 100);
  }
function mousePressed(){
  on = true;
}
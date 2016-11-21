function setup() {
  createCanvas(480, 120);
}

function draw() {
    if ( mouseIsPressed ){
      fill(0);
    } else{
      fill(255);
    }
  ellipse(mouseX, mouseX, 80, 80);
  //if mouseX, mouseX || mouseY, mouseY >>> circle move in diagonal direction
}
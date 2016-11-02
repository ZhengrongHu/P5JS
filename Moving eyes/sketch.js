var pupilX = 50;
var pupilY  = 50;
var eyeX = 50;
var eyeY = 50;
var nose = (200,10,100);


function setup() {
 createCanvas(500,500);
}

function draw() {

  background(10,200,150);//as the loop is keep covring the circle
  
  mapX = map(mouseX, 0, width, -30, 30);
  mapY = map(mouseY, 0, height, 0, -25);
  
  ellipse(pupilX+ + mapX,pupilY + mapY,100,100);
  ellipse(pupilX*7 + mapX,pupilY + mapY,100,100);
  ellipse(eyeX + mapX,eyeY + mapY,20,20);
  ellipse(eyeX*7 + mapX,eyeY + mapY,20,20);
  rect(100,300,150,25,10,5,30)
  ellipse(width/3, height/3, 50, 50);
  
  textSize(32);
  text("Where is the Food???", 50, 400);
  //fill(0, 102, 153);
  fill (nose);
  ellipse(mouseX,mouseY,30,30);
  // clear();
  // ellipse(mouseX,mouseY,30,30);
  // clear();

  
  
}
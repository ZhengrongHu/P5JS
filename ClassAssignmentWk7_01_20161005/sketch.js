var img1; 
var img2;
var x = 60; 
var y = 440;
var pusheen01; 
var pusheen02; 

function preload(){
  img1 = loadImage("p3.PNG"); 
  img2 = loadImage("p4.PNG"); 
}

function setup(){
  createCanvas(720, 720); 
  pusheen01 = new Pusheen(img1, 90, 80);
  pusheen02 = new Pusheen(img2, 300, 200); 
}

function draw(){
  background(204);
  pusheen01.update(); 
  pusheen01.display(); 
  
  pusheen02.update();
  pusheen02.display(); 
  
  translate(mouseX, mouseY);
  if (mouseIsPressed){
    scale(1.0); 
  } else {
    scale(0.6);
    
  pusheen01.update(); 
  pusheen01.display(); 
  
  pusheen02.update();
  pusheen02.display();
  }
}

function Pusheen(img, tempX, tempY){
  this.xpos = tempX; 
  this.ypos = tempY; 
  this.angle = random(0,  TWO_PI); 
  this.pusheenImage = img; 
  this.yoffset = 0.0;
  
  this.update = function(){
    this.angle += 0.05; 
    this.yoffset = sin(this.angle) * 20; 
  }

this.display = function(){
  image(this.pusheenImage, this.xpos, this.ypos + this.yoffset);
}
}
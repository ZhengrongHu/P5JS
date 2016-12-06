var img1; 
var img2; 

var pusheen01; 
var pusheen02; 

function preload(){
  img1 = loadImage("pusheen1, JPG"); 
  img2 = loadImage("pusheen2, JPG"); 
}

function setup(){
  createCanvas(720, 720); 
  bot1 = new pusheen(img1, 90, 80);
  bot2 = new pusheen(img2, 300, 200); 
}

function draw(){
  background(204);
  pusheen01.update(); 
  pusheen01.display(); 
  
  pusheen02.update();
  pusheen02.display(); 
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
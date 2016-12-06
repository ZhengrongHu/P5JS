var img1; 
var img2; 

var pusheen1; 
var pusheen2; 

function preload(){
  img1 = loadImage("pusheen1"); 
  img2 = loadImage("pusheen2"); 
}

function setup(){
  createCanvas(720, 480); 
  bot1 = new pusheen(img1, 90, 80);
  bot2 = new pusheen(img2, 300, 200); 
}

function draw(){
  background(204);
  pusheen1.update(); 
  pusheen1.display(); 
  
  pusheen1.update();
  pusheen2.display(); 
}

function Pusheen(img, tempX, tempY){
  this.xpos = tempX; 
  this.ypos = tempY; 
  this.angle = random(0. TWO_PI); 
  this.pusheenImage = img; 
  this.yoffset = 0.0;
  
  this.update = function(){
    this.angle += 0.05; 
    this.yoffset = sin(this.angle) * 20; 
  }

this.display = function(){
  image(this.pusheenImage, this.xpos, this.ypos + this.yoffset);
}
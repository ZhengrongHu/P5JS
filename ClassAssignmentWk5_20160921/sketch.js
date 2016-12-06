//Assignment #3

var stars; 

function setup(){
  createCanvas(500, 500);
  background(204);
  
  starts = new Start(width/2, height/2, 20);
}

function draw(){
  starts.move();
  starts.display();
}

//starts constructors 
function Start(tempX, tempY, tempDir){
  this.x = tempX;
  this.y = tempY;
  this.dir = tempDir;
  this.speed = 10;

  this.move = function(){
    this.x += random( -this.speed, this.speed);
    this.y += random( -this.speed, this.speed);
  };
  
  this.display = function(){
    ellipse(this.x, this.y, this.dir, this.dir);
  }
}
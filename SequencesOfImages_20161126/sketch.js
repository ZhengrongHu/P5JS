/*
note: 
  #1: 
  Description
  Draw an image to the main canvas of the p5js sketch
  
  Syntax
   image(img,x,y,width,height)
  image(img,dx,dy,dWidth,dHeight,sx,sy,[sWidth],[sHeight])
  Parameters
  img	p5.Image: the image to display
  x	Number: the x-coordinate at which to place the top-left corner of the source image
  y	Number: the y-coordinate at which to place the top-left corner of the source image
  width	Number: the width to draw the image
  height	Number: the height to draw the image
  dx	Number: the -xcoordinate in the destination canvas at which to place the top-left corner of the source image
  dy	Number: the y-coordinate in the destination canvas at which to place the top-left corner of the source image
  dWidth	Number: the width to draw the image in the destination canvas
  dHeight	Number: the height to draw the image in the destination canvas
  sx	Number: the x-coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination canvas
  sy	Number: the y-coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination canvas
  [sWidth]	Number: the width of the sub-rectangle of the source image to draw into the destination canvas
  [sHeight]	Number: the height of the sub-rectangle of the source image to draw into the destination context
*/

var robotImages; 
var bots = []; // declare array to hold robot objects

function preload(){
  robotImage = loadImage("robot1.png");
}

function setup(){
  createCanvas(720, 720);
  
  var numRobots = 20; 
  
  //create each object
  for (var i = 0; i < numRobots; i++){
    //create a random x coordinate
    var x = random(-40, width -40);
    
    //assign the y coordinate based on the order
    var y = map(i, 0, numRobots, -100, height -200);
    bots[i] = new Robot(robotImage, x, y);
  }
}

function draw(){
  background(204); 
  
  //update and display each bot in the array
  for (var i = 0; i < bots.length; i ++){
    bots[i].update();
    bots[i].display();
  }
}

function Robot(img, tempX, tempY){
  // set inital values for properties
  this.xpos = tempX;
  this.ypos = tempY; 
  this.angle = random(0, TWO_PI);
  this.botImage = img;
  this.yoffset = 0.0;
  
  //update the properties
  this.update = function(){
    this.angle += 0.05; 
    this.yoffset = sin(this.angle) * 20;
  }
  
  //draw the robot to the screen
  this.display = function(){
    image(this.botImage, this.xpos, this.ypos + this.yoffset);
  }
}
  

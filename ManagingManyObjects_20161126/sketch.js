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
var numFrames = 12; 
var images = []; 
var currentFrame = 0;

function preload(){
  for (var i = 0; i < numFrames; i++){
    var imageName = "frame-" + nf(i, 4) + ".png"; // good way to assgin the name of each png
    images[i] = loadImage(imageName); // load each image
  }
}

function setup(){
  createCanvas(240, 120);
  frameRate(24);
}

function draw(){
  image(images[currentFrame], 0, 0);
  currentFrame++; // next frame
  if (currentFrame == image.length){
    currentFrame = 0; // return to first frame
  }
}
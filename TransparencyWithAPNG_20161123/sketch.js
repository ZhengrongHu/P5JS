/*
note: 
#1: 
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
  
#2: 
  Asynchronicity: your browser will begin the process of loading the image, but skip onto the next line before the image finishes loading
*/
var img;

function setup(){
    createCanvas(900, 900);
    img = loadImage("lunar.jpg");
    noLoop();
}

function draw(){
  background(204);
  image(img, 0, 0);
}
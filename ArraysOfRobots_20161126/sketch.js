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

var stats;

function preload(){
  stats = loadTable("test1.csv")
}

function setup(){
  for (var i = 0; i < stats.getRowCount(); i++){
    // get the value from row i,  column 0 in the file 
    var year = stats.get(i, 0);
    
    // get the value from row i, column i 
    var homeRuns = stats.get{i, 1); 
    var rbi = stats.get(i, 2);
    var average = stats.get(i, 3);
    console.log(year, homeRuns, rbi, average);
  }
}

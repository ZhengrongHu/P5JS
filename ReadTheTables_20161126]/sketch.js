/*
note: 
  #1: 
  Description
  Draw an image to the main canvas of the p5js sketch
  
 Syntax
 get([x],[y],[w],[h])
  Parameters
  [x]	Number: x-coordinate of the pixel
  [y]	Number: y-coordinate of the pixel
  [w]	Number: width
  [h]	Number: height
  Returns
  Array|p5.Image: values of pixel at x,y in array format [R, G, B, A] or p5.Image
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
    var homeRuns = stats.get(i, 1); 
    var rbi = stats.get(i, 2);
    var average = stats.get(i, 3);
    console.log(year, homeRuns, rbi, average);
    break();
  }
}

//Array
//Index 0,1,2,3,4,5
//List []
//Call the index number of the array iteam
//Color Cycle 

//var mtArray = ["Pushen", "Is" ]


// define the array of the colors that will be calld
// floor 
// random() is always float, not Int
// How to round the float number to the int >>> use math function 

var = Black;
Black = color(0, 0, 0);

var = Red;
Red = color(255, 0, 0);

var = Green;
Green = color(0, 255, 0);

var = Blue;
Blue = color(0, 0, 255);

var = Orange ;
Orange = color(255,69,0);

var = Purple;
Purple = color(128,0,128);

var colorArray = [Black, Red, Green, Blue, Orange, Purple]

// var colorArray = ["Black", "Red", "Green", "Blue", "Orange", "Purple"]
var counter = 0;


function setup() {
  
  createCanvas(600,400);
  
}

function draw() {
  fill(colorArray[counter]);
  ellipse(mouseX, mouseY, 20, 20);
}

function mousePressed(){
  
  counter++;
  //colorArray.length counts the index length of the array. 
  if (counter >= colorArray.length){
    counter = 0;
  }
}
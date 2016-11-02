var topB = 0;
var bottomB = 0;
var B0 = 0;
var B1 = 0;
var B2 = 0;
var B3 = 0;
var B4 = 0;

var buttonSize = 100;
var currentC = "black"; 
var brushSize = 10;

//placeholder 
var currentArea =="";


//var boundaryArray = [topB, bottomB, B0, B1, B2, B3, B4]
//var counter = 0;


function setup() {
  createCanvas(400,500);
  topB = 400;
  bottomB = height;
  B0 = 0
  B1 = 100;
  B2 = 200;
  B3 = 300;
  B4 = 400;
  
}

function draw() {
  
  fill ("green");
  rect(B0, topB,buttonSize, buttonSize);
  
  fill("yellow");
  rect(B1, topB,buttonSize, buttonSize);
  
  fill("red");
  rect(B2, topB,buttonSize, buttonSize);
  
  fill("blue");
  rect(B3, topB,buttonSize, buttonSize);
  
  if (mouseY > topB && mouseY < bottomB){
    console.log("colorPicker");
    
    if ( mouseX > B0 && mouseX < B1){
        console.log("Area1");
      }else if (mouseX > B1 && mouseX < B2){
        console.log("Area2");
      }else if (mouseX > B2 && mouseX < B3){
        console.log("Area3");
      }else if (mouseX > B3 && mouseX < B4){
        console.log("Area4");
}
}

function mousePressed(){
  
  if (currentArea == "area1 "){
    currentColor = "green"
  }
}
currentColor = ""
// Create the brush 
// currenArea is  a string 

fill(currentC);
ellipse(mouseX, mouseY, brushSize, brushSize);







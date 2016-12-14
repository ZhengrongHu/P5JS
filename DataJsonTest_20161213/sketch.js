var bgcolor; 
var button; 
var fish; 


function preload(){
    fish = loadJSON("fish.json");
}

function setup(){
  canvas = createCanvas(200, 200); 
}

function draw() {
  
  background(0);
  fill(255);
  text(fish.name, 30, 50);
  
}
var fishData;
var datafish;
var dataBird;


function preload(){
    dataFish = loadJSON("fish.json");
    dataBird = loadJSON("bird.json");
}

function setup(){
  canvas = createCanvas(200, 200); 
  var bird = dataBird.birds[1].members[2];
  createP(bird); 
}

function draw() {
  
  background(0);
  fill(255);
  //text(dataFish.name, 30, 50);
  
}
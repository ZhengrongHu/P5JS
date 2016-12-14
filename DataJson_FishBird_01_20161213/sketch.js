
var datafish;
var dataBird;


function preload(){
    dataFish = loadJSON("fish.json");
    dataBird = loadJSON("bird.json");
}

function setup(){
  canvas = createCanvas(200, 200); 
  var birds = dataBird.birds;
  for (var i = 0; i < birds.length; i++){
   createElement('h1', birds[i].family);
   var members = birds[i].members;
   for ( var j = 0; j < members.length; j++){
     createDiv(members[j]);
   }
 }
}

function draw() {
}
var x = 0; 
var spaceData; 

function setup() {
  createCanvas(200, 200); 
  loadJSON("http://api.open-notify.org/astros.json", gotData, 'jsonp');
  
}

function gotData(data){
  spaceData = data; 
  console.log(spaceData); 
  }

function draw() {
  background(0);
  if (spaceData){
    randomSeed(4);
    //check this out
  }
   for (var i = 0; i < spaceData.number; i ++){
     fill(200); 
     ellipse(random(width), random(height), 16, 18);
    stroke(255); 
   }
}
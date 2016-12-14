var lineX = 0; 
var url = 'http://api.open-notify.org/iss-now.json';
var issX; 
var issY; 

//need to map the river to your canvas 

function setup(){
  createCanvas(800, 800); 
  setInterval(askISS, 500); 
}

function askISS(){
    loadJSON(url, gotData, 'jsonp');
}

function gotData(data){
  var lat  = data.iss_position.latitude; 
  var long = data.iss_position.longitude;
  issX = map(lat, 30, 50, 0, width); 
  issY = map(long, -30, 50, 0, height); 
}

function draw() {
  background(30);
  
  fill(100); 
  ellipse(issX, issY, 50, 50); 

  stroke(255); 
  line ( lineX, 0, lineX, height); 
  lineX = lineX +5; 
  if (lineX > width){
    lineX = 0; 
  }
}
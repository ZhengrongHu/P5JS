var lineX = 0; 
var url = 'http://api.open-notify.org/iss-now.json';

function setup(){
  createCanvas(600, 400); 
  loadJSON(url, gotData, 'jsonp');
}

function gotData(data){
  print(data.iss_position.latitude); 
  print(data.iss_position.longitude);
}
function draw() {
  background(0);
  
  stroke(255); 
  line ( lineX, 0, lineX, height); 
  lineX = lineX +5; 
  if (lineX > width){
    lineX = 0; 
  }
}
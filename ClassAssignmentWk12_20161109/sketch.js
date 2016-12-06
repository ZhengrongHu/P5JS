//using OpenWebAPI

var weatherData;

function setup(){
  createCanvas(500, 500); 
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=338660762d65eb626a73de60509cd8c4', gotData);
}

function gotData(data){
  //console.log(data);
  weatherData = data; 
}

function draw(){
  background(100);
  if (weatherData){
    ellipse( 70, 30, weatherData.main.temp, weatherData.main.temp); 
    ellipse( 50, 100, weatherData.main.humidity, weatherData.main.humidity);
  }
}
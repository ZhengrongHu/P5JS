/*
Syntax
 fill(v1,[v2],[v3],[a])
Parameters
v1	Number|Array|String|p5.Color: gray value, red or hue value (depending on the current color mode), or color Array, or CSS color string
[v2]	Number: green or saturation value (depending on the current color mode)
[v3]	Number: blue or brightness value (depending on the current color mode)
[a]	Number: opacity of the background
*/
var mic;
var amp;

var scaler = 1.0;

function setup(){
  createCanvas(440, 440);
  background(0);
  //create an audio input and start it 
  mic = new p5.AudioIn();
  mic.start();
  //craate a new amplitude analyzer and patch into input
  amp = new p5.Amplitude();
  amp.setInput(mic);
}

function draw(){
  //draw a background that fades to black
  noStroke();
  fill(0, 10);
  rect(0, 0, width, height);
  //the getLevel() method returns values btw 0 and 1
  //so map() is used to convert the values to larger numbers
  scaler = map(amp.getLevel(), 0, 1.0, 10, width);
  //draw the circle based on the volume
  fill(255);
  ellipse(width/2, height/2, scaler. scaler);
}
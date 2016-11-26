/*

*/

var sine; 

var freq = 400; 

function setup(){
  createCanvas(440, 440);
  //create and start the sine oslillator
  sine = new p5.SinOsc();
  sine.start();
}

function draw(){
  background(0);
  // map the mouseX value from 20HZ to 440HZ for frequency 
  var hertz = map(mouseX, 0, width, 20.0, 440.0); 
  sine.freq(hertz);
  // draw a wave to visualize the frequency of the sound
  stroke(204);
  for (var x = 0; x < width; x++){
    var angle = map(x, 0, width, 0, TWO_PI * hertz);
    var sinValue = sin(angle) * 120;//?
    line(x, 0, x, height/2 + sinValue);
  }
}
/*
note: 
#1: 
  noLoop():
  Stops p5.js from continuously executing the code within draw(). If loop() is called, the code in draw() begins to run continuously again. If using noLoop() in setup(),
  it should be the last line inside the block
  . 
  When noLoop() is used, it's not possible to manipulate or access the screen inside event handling functions such as mousePressed() or keyPressed(). Instead, 
  use those functions to call redraw() or loop(), which will run draw(), which can update the screen properly. This means that when noLoop() has been called, 
  no drawing can happen, and functions like saveFrame() or loadPixels() may not be used. 
  
  Note that if the sketch is resized, redraw() will be called to update the sketch, even after noLoop() has been specified. Otherwise, 
  the sketch would enter an odd state until loop() was called.

#2: 
  Callback function is passed as an argument to a second function, and runs after the second function has completed
  
#3: 
  
*/

function setup(){
    createCanvas(900, 900);
    loadImage("lunar.jpg", drawImage);
    noLoop();
}

function draw(){
  background(200);
}

function drawImage(img){
  image(img, 0, 0);
}
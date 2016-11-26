/*
note: 
  TrueTyoe(,ttf), and openType(.off) fonts. 
  Step#1: add the font to the sketch's folder
  Step#2: create a variable to store the font
  Step#3: load the font into the variable with loadFont()
  Step#4: use the textFont() function to set the current font
*/

function setup() {
  createCanvas(480, 400);
  textFont("Arial");
  textSize(24);
}

function draw() {
  background(102); 
  text("one small step for pusheen", 25, 24, 240, 100); 
  
}
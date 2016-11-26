/*
note: 
  TrueTyoe(,ttf), and openType(.off) fonts. 
  Step#1: add the font to the sketch's folder
  Step#2: create a variable to store the font
  Step#3: load the font into the variable with loadFont()
  Step#4: use the textFont() function to set the current font
*/

var font; 

function preload(){
  font = loadFont("bakery.otf");
  
}

function setup() {
  createCanvas(480, 120);
  textFont(font);
  fill(0);
  stroke(255);
}

function draw() {
  background(102); 
  textSize(50);
  text("one small step for pusheen", 25, 60); 
  textSize(36); 
  text("one small step for pusheen", 27, 90);
}
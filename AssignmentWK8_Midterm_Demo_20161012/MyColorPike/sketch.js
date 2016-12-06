var topBoundary = 0;
var bottomBoundary = 0;

var boundary0 = 0;
var boundary1 = 0;
var boundary2 = 0;
var boundary3 = 0;
var boundary4 = 0;
var boundary5 = 0;
var boundary6 = 0;

var buttonSize = 100;

var currentColor = "black";
var brushSize = 10;

var currentArea = "";

function setup() {
  createCanvas(1920, 1080);
  topBoundary = 1000;
  bottomBoundary = height;
  boundary0 = 0;
  boundary1 = width/3;
  boundary2 = (width/3) + (width/3);
  boundary3 = (width/3) + (width/3) + (width/3);
  boundary4 = width;
  noStroke();
}

function draw() {

  fill("green");
  rect(boundary0, topBoundary, buttonSize, buttonSize);
  fill("red");
  rect(boundary1, topBoundary, buttonSize, buttonSize);
  fill("blue");
  rect(boundary2, topBoundary, buttonSize, buttonSize);
  fill("yellow");
  rect(boundary3, topBoundary, buttonSize, buttonSize);

  if (mouseY > topBoundary && mouseY < bottomBoundary) {
    //console.log("colorPicker");

    if (mouseX > boundary0 && mouseX < boundary1) {
      //console.log("area1");
      currentArea = "area1";
    } else if (mouseX > boundary1 && mouseX < boundary2) {
      //console.log("area2");
      currentArea = "area2";
    } else if (mouseX > boundary2 && mouseX < boundary3) {
      //console.log("area3");
      currentArea = "area3";
    } else if (mouseX > boundary3 && mouseX < boundary4) {
      //console.log("area4");
      currentArea = "area4";
    }

  } else {
    currentArea = "";
  }

  fill(currentColor);
  ellipse(mouseX, mouseY, brushSize, brushSize);

}

function mousePressed() {
  console.log(currentArea);

  if (currentArea == "area1") {
    currentColor = "green";
  } else if (currentArea == "area2") {
    currentColor = "red";
  } else if (currentArea == "area3") {
    currentColor = "blue";
  } else if (currentArea == "area4") {
    currentColor = "yellow";
  } 
 else {
    currentColor = "black";
  }
}
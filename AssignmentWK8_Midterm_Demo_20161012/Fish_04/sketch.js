var R= 50;
var r=30;
var r1=7;
var r2=3;
var r3=15;
var x=200;
var y=280;
var x1=(0,400);
var y1=(0,400);
var radius=15;
var y2=radius+400;
var speed = 0.5;
var speedS=0.1;
var direction = 1;
var D=-70;
var depth;

var  body;
var  tailR;
var  tailL;
var  finR;
var finL;

var lastAteTimer;
var numBodySegments;
var numTailSegments;
var numFinSegments;

var originalBodySizeW;
var originalBodySizeH;
var bodySizeW;
var bodySizeH;
var tailSizeW;
var tailSizeH;
var offset = 100;
function setup() {
  createCanvas(400, 400);
ellipseMode(RADIUS);
    x1=width/2;
  y1=height/2;
  angleMode(DEGREES);
}

function draw() {
//base set_up
strokeWeight(10);
stroke(47,179,164);
fill(47,179,164);
strokeWeight(0);

  numBodySegments = 10;
  numTailSegments = 10;
  
  tailSizeW		= bodySizeW * 0.6;
  tailSizeH		= bodySizeH * 0.25;
  
  body = bodySizeW, bodySizeH, numBodySegments;
  
  tailR = tailSizeW, tailSizeH, numTailSegments ;
  tailL = tailSizeW * 0.8, tailSizeH * 0.8, numTailSegments ;
  
  numFinSegments = 9;
  finR = tailSizeW * 0.5, tailSizeH, numFinSegments 
  finL = tailSizeW * 0.5, tailSizeH, numFinSegments 


//tail
function tailDown(){
beginShape();
vertex(30+ offset, 30+ offset);
bezierVertex(0+ offset, 50 + offset, 90+ offset, 50 + offset, 100+ offset, 20 + offset);
bezierVertex(30+ offset, 30 + offset, 30+ offset, 10 + offset, 10+ offset, 10 + offset);
endShape();
}

function tailUp(){
beginShape();
vertex(30+ offset, 30+ offset);
bezierVertex(0+ offset, 50 + offset, 90+ offset, 50 + offset, 100+ offset, 20 + offset);
bezierVertex(30+ offset, 30 + offset, 30+ offset, 10 + offset, 10+ offset, 10 + offset);
translate(2,55);
rotate(-10);
endShape();
}

tailDown_01 = tailDown();
tialUp_01 = tailUp();

tialUp_02 = tailUp();
scale(0.3, 0.5);
translate(10, 10);


var finDown;

//Body
// ellipse(x-50,y,100,5);
// ellipse(x-50,y+10,100,5);
// ellipse(x-50,y-10,100,5);
//   //tail off
//   fill(176,215,215);
//   triangle(x-55,y,x-90,y-20,x-90,y+20);
// //body
//   fill(247,143,54);
// ellipse(x, y, R, R);
//   //blush
//       fill(239,65,106);
// ellipse(x+6, y, 15,15);
//   //eyes
//     fill(255);
// ellipse(x+30, y-10, 10,10);
//     //eyeball
//     fill(0);
//   pos=map(mouseX,0,400,x+25,x+35);
//   pos1=map(mouseY,0,400,y-15,y-5);
// ellipse(pos, pos1, 4,4);
//   //mouth
//     strokeWeight(2);
//   stroke(0);
//   noFill();
//   curve(x+50,y,x+47,y+15,x+25,y+13,x+25,y);
}
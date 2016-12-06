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

function setup() {
  createCanvas(400, 400);
ellipseMode(RADIUS);
    x1=width/2;
  y1=height/2;
  angleMode(DEGREES);
}

function draw() {
  background(176,215,215);
    fill(47,179,164);
      strokeWeight(10);
    stroke(47,179,164);
      fill(47,179,164);
  strokeWeight(0);

//tail
ellipse(x-50,y,random(r-8,r-10),random(r-12,r-13));
  //tail off
  fill(176,215,215);
  triangle(x-55,y,x-90,y-20,x-90,y+20);
//body
  fill(247,143,54);
ellipse(x, y, R, R);
  //blush
      fill(239,65,106);
ellipse(x+6, y, 15,15);
  //eyes
    fill(255);
ellipse(x+30, y-10, 10,10);
    //eyeball
    fill(0);
  pos=map(mouseX,0,400,x+25,x+35);
  pos1=map(mouseY,0,400,y-15,y-5);
ellipse(pos, pos1, 4,4);
  //mouth
    strokeWeight(2);
  stroke(0);
  noFill();
  curve(x+50,y,x+47,y+15,x+25,y+13,x+25,y);
}
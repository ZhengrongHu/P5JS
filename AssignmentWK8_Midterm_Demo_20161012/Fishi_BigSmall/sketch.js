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
  createCanvas(1920, 1080);
ellipseMode(RADIUS);
    x1=width/2;
  y1=height/2;
  angleMode(DEGREES);
}
function draw() {
  background(176,215,215);
             //bubbles//
  fill(255,100);
  ellipse(200,200,r3,r3);
  ellipse(10,100,10,10);
  fill(255,150);
   ellipse(150,400,r3+10,r3+10);
     ellipse(400,350,r3+20,r3+20);
    //bubbles/moving bubbles
  fill(255,80);
  y2-=speed; //Increase the value of yb
  if(y2<radius){
    //if the shape is off screen
    y2=radius+400; //move to end
  }
      ellipse(70,y2,radius,radius);

      //bubbles/moving bubbles
  fill(255,80);
  y2-=0.2; //decrease the value of yb
  if(y2<radius){
    //if the shape is off screen
    y2=radius+400; //move to end
  } ellipse(360,y2,8,8);
  ellipse(260,y2+200,10,10);

  //seasurface//

  for(d=0;d<= width+70;d+=70){
    fill(255);
    strokeWeight(0);
      ellipse(d,0,50,60);
    fill(255,100);
    strokeWeight(0);
      ellipse(10*sin(d+10)+100,10*cos(20+d)+20,50,60);
  }
           //fishfood//
    fill(random(120),random(200),random(90),90);
ellipse(mouseX,mouseY,10,10);
  noStroke();
fill(235,117,47);
x += speed * direction;
if ((x > width-R) || (x < R)) {
direction = -direction; // Flip direction
}
// Face right
    if (direction == 1) {

          //big fish//

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
} else {  // Face left
      fill(47,179,164);

//tail
ellipse(x+50,y,random(r-8,r-10),random(r-12,r-13));
  //tail off
  fill(176,215,215);
  triangle(x+55,y,x+90,y-20,x+90,y+20);
//body
  fill(247,143,54);
ellipse(x, y, R, R);
  //blush
      fill(239,65,106);
ellipse(x-6, y, 15,15);
  //eyes
    fill(255);
ellipse(x-30, y-10, 10,10);
    //eyeball
    fill(0);
  pos=map(mouseX,0,400,x-35,x-25);
  pos1=map(mouseY,0,400,y-15,y-5);
ellipse(pos, pos1, 4,4);
  //mouth
    strokeWeight(2);
  stroke(0);
  noFill();
  curve(x-50,y,x-47,y+15,x-25,y+13,x-25,y);

}

               //small fish//
    strokeWeight(0);
        if (mouseX > x1&&mouseY > y1) {
    x1+=0.5;
      y1+=0.5;
    //tail
      fill(226,52,60);
  arc(x1-30,y1,random(r-7,r-10),r-10,random(135,140),random(220,225));
  //body
    fill(54,94,129);
  ellipse(x1,y1,r+5,r-3);
  //mouth
  strokeWeight(2);
  stroke(0);
  curve(x1+40,y1-20,x1+30,y1+12,x1+20,y1+10,x1+25,y1);
  //dots
      fill(226,52,60);
    strokeWeight(0);
  ellipse(x1+10,y1,r1,r1);
  //eyes
    strokeWeight(0);
  fill(255);
  ellipse(x1+20,y1-5,r1,r1);

    //eyeball
pos2=map(mouseX,0,400,x1+19,x1+25);
                pos3=map(mouseY,0,400,y1-8,y1-2);

  fill(0);
  ellipse(pos2,pos3,r2,r2);
  //ellipse(x1+22,y1-5,r2,r2);

     }
          if (mouseX > x1&&mouseY<y1) {
    x1+=0.5;
     y1-=0.5;
   //tail
      fill(226,52,60);
  arc(x1-30,y1,random(r-7,r-10),r-10,random(135,140),random(220,225));
  //body
    fill(54,94,129);
  ellipse(x1,y1,r+5,r-3);
  //mouth
  strokeWeight(2);
  stroke(0);
  curve(x1+40,y1-20,x1+30,y1+12,x1+20,y1+10,x1+25,y1);
  //dots
      fill(226,52,60);
    strokeWeight(0);
  ellipse(x1+10,y1,r1,r1);
  //eyes
    strokeWeight(0);
  fill(255);
  ellipse(x1+20,y1-5,r1,r1);

    //eyeball
pos2=map(mouseX,0,400,x1+19,x1+25);
                pos3=map(mouseY,0,400,y1-8,y1-2);

  fill(0);
  ellipse(pos2,pos3,r2,r2);
     }

        if (mouseX < x1&&mouseY<y1) {
    x1-=0.5;
      y1-=0.5;
        strokeWeight(0);
  //tail
      fill(226,52,60);
  arc(x1+30,y1,random(r-7,r-10),r-10,random(-40,-45),random(40,45));
  //body
    fill(54,94,129);
  ellipse(x1,y1,r+5,r-3);
  //mouth
  strokeWeight(2);
  stroke(0);
  curve(x1-40,y1-20,x1-30,y1+12,x1-20,y1+10,x1-25,y1);
  //dots
      fill(226,52,60);
    strokeWeight(0);
  ellipse(x1-10,y1,r1,r1);
  //eyes
    strokeWeight(0);
  fill(255);
  ellipse(x1-20,y1-5,r1,r1);

    //eyeball
pos2=map(mouseX,0,400,x1-25,x1-19);
                pos3=map(mouseY,0,400,y1-8,y1-2);

  fill(0);
  ellipse(pos2,pos3,r2,r2);

    }
                if (mouseX < x1&&mouseY>y1) {
    x1-=0.5;
     y1+=0.5;
                            strokeWeight(0);
  //tail
      fill(226,52,60);
  arc(x1+30,y1,random(r-7,r-10),r-10,random(-40,-45),random(40,45));
  //body
    fill(54,94,129);
  ellipse(x1,y1,r+5,r-3);
  //mouth
  strokeWeight(2);
  stroke(0);
  curve(x1-40,y1-20,x1-30,y1+12,x1-20,y1+10,x1-25,y1);
  //dots
      fill(226,52,60);
    strokeWeight(0);
  ellipse(x1-10,y1,r1,r1);
  //eyes
    strokeWeight(0);
  fill(255);
  ellipse(x1-20,y1-5,r1,r1);

    //eyeball
pos2=map(mouseX,0,400,x1-25,x1-19);
                pos3=map(mouseY,0,400,y1-8,y1-2);

  fill(0);
  ellipse(pos2,pos3,r2,r2);

     }
    }
/*
note: 
Line (x1, y1, x2, y2); >>> pointStart = (x1, y1); pointEnd = (x2, y2);

triangle(x1, y1, x2, y2, x3, y3);

quad(x1, y1, x2, y2, x3, y3, x4, y4);

rect( x, y, width, height); >>> StartPoint(x, y);

ellipse(x, y, width, height); CenterPoint(x, y);

arc(x, y, width, heigth, start, stop); CenterPoint(x, y); width = width of the circle; height = height
of the circle; start = strat Radians of the arc; stop = end Radians of the arc;

*/

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(204);
  arc(90, 60, 80, 80, 0, 90);
  arc(190, 60, 80, 80, 0, 270);
  arc(290, 60, 80, 80, 180, 450);
  arc(390, 60, 80, 80, 45, 225);
}

/*
Note: For converting degree to radians:
radians();

example:  

function setup(){
  createCanvas(480, 120);
}

function draw(){
  background(204);
  arc(90, 60, 80, 80, 0, radians(90);
  arc(190, 60, 80, 80, 0, radians(270));
  arc(390, 60, 80, 80, radians(180), radians(450));
  arc(390, 60, 80, 80, radians(45), radians(225));
}

*/

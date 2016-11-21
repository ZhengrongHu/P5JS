/*
note: 
Line (x1, y1, x2, y2); >>> pointStart = (x1, y1); pointEnd = (x2, y2);

triangle(x1, y1, x2, y2, x3, y3);

quad(x1, y1, x2, y2, x3, y3, x4, y4);

rect( x, y, width, height); >>> StartPoint(x, y);

ellipse(x, y, width, height); CenterPoint(x, y);

arc(x, y, width, heigth, start, stop); CenterPoint(x, y); width = width of the circle; height = height
of the circle; start = strat line of the arc; stop = end line of the arc;

*/
function setup() {
  createCanvas(480, 120);
}

function draw() {
  line(0,0, 100,200);
}
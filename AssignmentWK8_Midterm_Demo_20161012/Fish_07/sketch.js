var offset = 100;

function setup() {
  createCanvas(400, 400);
ellipseMode(RADIUS);
    x1=width/2;
  y1=height/2;
  angleMode(DEGREES);
}

function drawFish() {
//base set_up
strokeWeight(10);
stroke(47,179,164);
fill(47,179,164);
strokeWeight(0);

beginShape();
vertex(30+ offset, 30+ offset);
bezierVertex(0+ offset, 50 + offset, 90+ offset, 50 + offset, 100+ offset, 20 + offset);
bezierVertex(30+ offset, 30 + offset, 30+ offset, 10 + offset, 10+ offset, 10 + offset);
endShape();

beginShape();
vertex(30+ offset, 30+ offset);
bezierVertex(0+ offset, 50 + offset, 90+ offset, 50 + offset, 100+ offset, 20 + offset);
bezierVertex(30+ offset, 30 + offset, 30+ offset, 10 + offset, 10+ offset, 10 + offset);
translate(2,54);
rotate(-14);
endShape();

ellipse(225, 120, 65, 25);
}

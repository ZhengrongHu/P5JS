var flock;
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

function setup() {
  createCanvas(1920,1080);
  createP();
  
  flock = new Flock();
  // Add an initial set of boids into the system
  for (var i = 0; i < 50; i++) {
    //generate starting from the center of the canvas 
    var b = new Boid(width/2,height/2);
    flock.addBoid(b);
  }
}

function draw() {
  background(color(104,149,197));
  flock.run();
}

// Add a new boid into the System
function mouseDragged() {
  flock.addBoid(new Boid(mouseX,mouseY));
}

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Flock object
// Does very little, simply manages the array of all the boids

function Flock() {
  // An array for all the boids
  this.boids = []; // Initialize the array
}

Flock.prototype.run = function() {
  for (var i = 0; i < this.boids.length; i++) {
    this.boids[i].run(this.boids);  // Passing the entire list of boids to each boid individually
  }
}

Flock.prototype.addBoid = function(b) {
  this.boids.push(b);
}

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Boid class
// Methods for Separation, Cohesion, Alignment added

function Boid(x,y) {
  this.acceleration = createVector(0,0);
  this.velocity = createVector(random(-1,1),random(-1,1));
  this.position = createVector(x,y);
  this.r = 3.0;
  this.maxspeed = 3;    // Maximum speed
  this.maxforce = 0.05; // Maximum steering force
}

Boid.prototype.run = function(boids) {
  this.flock(boids);
  this.update();
  this.borders();
  this.render();
}

Boid.prototype.applyForce = function(force) {
  // We could add mass here if we want A = F / M
  this.acceleration.add(force);
}

// We accumulate a new acceleration each time based on three rules
Boid.prototype.flock = function(boids) {
  var sep = this.separate(boids);   // Separation
  var ali = this.align(boids);      // Alignment
  var coh = this.cohesion(boids);   // Cohesion
  // Arbitrarily weight these forces
  sep.mult(1.5);
  ali.mult(1.0);
  coh.mult(1.0);
  // Add the force vectors to acceleration
  this.applyForce(sep);
  this.applyForce(ali);
  this.applyForce(coh);
}

// Method to update location
Boid.prototype.update = function() {
  // Update velocity
  this.velocity.add(this.acceleration);
  // Limit speed
  this.velocity.limit(this.maxspeed);
  this.position.add(this.velocity);
  // Reset accelertion to 0 each cycle
  this.acceleration.mult(0);
}

// A method that calculates and applies a steering force towards a target
// STEER = DESIRED MINUS VELOCITY
Boid.prototype.seek = function(target) {
  var desired = p5.Vector.sub(target,this.position);  // A vector pointing from the location to the target
  // Normalize desired and scale to maximum speed
  desired.normalize();
  desired.mult(this.maxspeed);
  // Steering = Desired minus Velocity
  var steer = p5.Vector.sub(desired,this.velocity);
  steer.limit(this.maxforce);  // Limit to maximum steering force
  return steer;
}

Boid.prototype.render = function() {
  // Draw a triangle rotated in the direction of velocity
  //Big Fish
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
  
 //small fish//
  strokeWeight(0);
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
  
  var theta = this.velocity.heading() + radians(90);
  fill(color(254,77,17));
  stroke(200);
  push();
  translate(this.position.x,this.position.y);
  rotate(theta);
  beginShape();
  vertex(0, -this.r*2);
  vertex(-this.r, this.r*2);
  vertex(this.r, this.r*2);
  endShape(CLOSE);
  pop();
}
// Wraparound
Boid.prototype.borders = function() {
  if (this.position.x < -this.r)  this.position.x = width +this.r;
  if (this.position.y < -this.r)  this.position.y = height+this.r;
  if (this.position.x > width +this.r) this.position.x = -this.r;
  if (this.position.y > height+this.r) this.position.y = -this.r;
}

// Separation
// Method checks for nearby boids and steers away
Boid.prototype.separate = function(boids) {
  var desiredseparation = 25.0;
  var steer = createVector(0,0);
  var count = 0;
  // For every boid in the system, check if it's too close
  for (var i = 0; i < boids.length; i++) {
    var d = p5.Vector.dist(this.position,boids[i].position);
    // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
    if ((d > 0) && (d < desiredseparation)) {
      // Calculate vector pointing away from neighbor
      var diff = p5.Vector.sub(this.position,boids[i].position);
      diff.normalize();
      diff.div(d);        // Weight by distance
      steer.add(diff);
      count++;            // Keep track of how many
    }
  }
  // Average -- divide by how many
  if (count > 0) {
    steer.div(count);
  }

  // As long as the vector is greater than 0
  if (steer.mag() > 0) {
    // Implement Reynolds: Steering = Desired - Velocity
    steer.normalize();
    steer.mult(this.maxspeed);
    steer.sub(this.velocity);
    steer.limit(this.maxforce);
  }
  return steer;
}

// Alignment
// For every nearby boid in the system, calculate the average velocity
Boid.prototype.align = function(boids) {
  var neighbordist = 50;
  var sum = createVector(0,0);
  var count = 0;
  for (var i = 0; i < boids.length; i++) {
    var d = p5.Vector.dist(this.position,boids[i].position);
    if ((d > 0) && (d < neighbordist)) {
      sum.add(boids[i].velocity);
      count++;
    }
  }
  if (count > 0) {
    sum.div(count);
    sum.normalize();
    sum.mult(this.maxspeed);
    var steer = p5.Vector.sub(sum,this.velocity);
    steer.limit(this.maxforce);
    return steer;
  } else {
    return createVector(0,0);
  }
}

// Cohesion
// For the average location (i.e. center) of all nearby boids, calculate steering vector towards that location
Boid.prototype.cohesion = function(boids) {
  var neighbordist = 50;
  var sum = createVector(0,0);   // Start with empty vector to accumulate all locations
  var count = 0;
  for (var i = 0; i < boids.length; i++) {
    var d = p5.Vector.dist(this.position,boids[i].position);
    if ((d > 0) && (d < neighbordist)) {
      sum.add(boids[i].position); // Add location
      count++;
    }
  }
  if (count > 0) {
    sum.div(count);
    return this.seek(sum);  // Steer towards the location
  } else {
    return createVector(0,0);
  }
}
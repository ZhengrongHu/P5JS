/* 
note:
  translate() is used to move the origin (0, 0) to 110 pixeis over and 110 pixeis down. 
*/

function JitterBug(tempX, tempY, tempDiameter){
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.speed = 2.5; // same for every instance 

this.move = function(){
  this.x += random(-this.speed, this.speed);
  this.y += random(-this.speed, this.speed);
};

this.display = function(){
  ellipse(this.x, this.y, this.diameter, this.diameter);
};
}



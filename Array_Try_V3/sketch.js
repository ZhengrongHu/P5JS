var nums = [10, 5, 3, 20];
var num = 23;
var index = 0; 


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  
  ellipse(200, 200, nums[0], nums[0]);
  ellipse(200, 200, nums[1], nums[1]);
  ellipse(300, 200, nums[2], nums[2]);
  ellipse(400, 200, nums[3], nums[3]);
}

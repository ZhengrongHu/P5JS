// -, -, -, -
//R,G,B,A
//method to get the index
// (x, y) >>> x + y * width *4

var video; 
var scalar = 10;

function setup(){
  createCanvas( 600, 480); 
  pixelDensity(1); 
  video = createCapture(VIDEO);
  video.size (width/scalar, height/scalar); 
}

function draw(){
  
  background(51); 
  
  video.loadPixels();
  loadPixels(); 
  for ( var y = 0; y < video.height; y ++){
    for ( var x = 0; x < video.width; x ++){
      var index = (x + y * video.width)*4;
      var r = video.pixles[index+0]; 
      var g = video.pixles[index+1]; 
      var b = video.pixles[index+2];
      
      var bright = (r+g+b)/3;
      var w = map(bright, 0, 255, 0, scalar);
      noStroke(S);
      fill(bright); 
      ellipseMode(CENTE);
      ellipse(x*scalar, y*scalar, scalar, scalar);
      // pixels[index] = bright; 
      // pixels[index+1] = bright; 
      // pixels[index+2] = bright;
      // pixels[index+3] = 255; 
    }
    updatePixels();
  }
}

var randomHello = [];

function setup(){
  // console.log(randomHello);
  randomHello.push("Hello");
  randomHello.push("Hey");
  randomHello.push("Hi");
  randomHello.push("Run out of word");
  randomHello.push("Ohayo");
  randomHello.push("Nihao");
  //This is showing you how to modify the console array
    // console.log(randomHello);
    // console.log(randomHello.shift());//take out the first of the list
    // console.log(randomHello);
    
    // console.log(randomHello.pop());
    // console.log(randomHello);
    
    // console.log(randomHello.sort());
    // console.log(randomHello);
    
    // console.log(randomHello.reverse());
    // console.log(randomHello)
    
}

function draw(){
  while(randomHello.length >= 1){
    var currentHello = randomHello.pop();
    text(currentHello, random(width), random(height));
    
  }
}
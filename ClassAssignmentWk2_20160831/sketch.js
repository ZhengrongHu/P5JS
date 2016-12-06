//Week2-Assignment

var input, button, greeting;

function setup() {
  createCanvas(710, 400);

  input = createInput();
  input.position(20, 65);

  button = createButton('apply');
  button.position(150, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'how do you feel today?');
  greeting.position(20, 5);

  textAlign(CENTER)
  textSize(50);
}

function greet() {
  var feeling = input.value();
  greeting.html('hello '+feeling+'!');
  input.value('');

  for (var i=0; i<200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2*PI));
    text(name, 0, 0);
    pop();
  }
}

a = 40;
r = 100;
function bauhaus_circle () {
  strokeWeight(1.25);
  ellipse(0, 0, 2*r, 2*r);
  ellipse(0, 0, 4*r, 4*r);
  for (var i = 0; i < 180; i = i + 1) {
    push();
    translate(0, -2*r);
    triangle(0, 0, r/2, r, -r/2, r);
    pop();
    rotate(PI/90);
  }
}
function inner_loop () {
  stroke(193, 50, 25);
  strokeWeight(5);
  for (var i = 0; i < 180; i = i + 1) {
    push();
    translate(6*r, 3*r -25);
    arc(0, 0, a*r/4, 3*a*r/4, HALF_PI, PI + HALF_PI);
    arc(0, 0, a*r/4, a*3*r/4, PI + HALF_PI, HALF_PI);
    pop();
    rotate(PI/37);
  }
}  
function setup() {
  strokeWeight(5);
  createCanvas( 9*r, 6*r);
  background(255, 255, 255);
  noFill(); 
  ellipseMode(CENTER);
  stroke(39, 95, 186);
  // draw left circle
  push();
  translate(3*r, 3*r);
  bauhaus_circle();
  pop();
  // draw right circle
  push();
  stroke(25, 38, 33);
  translate(6*r, 3*r);
  bauhaus_circle();
  pop();
  push();
  translate(6*r, 3*r);
  scale(0.05);
  inner_loop();
  pop();
}

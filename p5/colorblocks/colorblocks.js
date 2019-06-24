function setup() {
  x = 600;
  createCanvas(x, x/2);
  let r = random(0, 256);
  let g = random(0, 256);
  let b = random(0, 256);
  noStroke();
  fill(r, g, b);
  rect(0, 0, x/2, x/2);
  var num_panels = 4; //is divided by two to get the actual number of panels
  for (var i = 0; i < 4; i++) {
    var v = x/8;
    fill(r + random(0, 50), g + random(0, 50), b + random(0, 50)); 
    rect(x/2, 0, x/2 - v*i, x/num_panels);
  }
  fill(255, 0, 0);
  text("monochromatic", 5*x/8, x/num_panels - 5);  

  for (var j = 0; j < 4; j++) {
    var m = x/8;
    var r1 = random(0, 256);
    var g1 = random(0, 256);
    var b1 = random(0, 256);
    var neutral = random(0, 3);
    if (j == 0) {
      if (neutral == 0) {
        fill(255, 255, 255);
      } else if (neutral == 1) {
        fill(105, 114, 108);
      } else if (neutral == 2) {
        fill(0, 0, 0);
      }
    } else if (j == 1) {
      fill(r + random(0, 50), g + random(0, 50), b + random(0, 50));
    } else if (j == 2) {
      fill(r1, g1, b1);
    } else if (j == 3) {
      fill(r1 + random(0, 40), g1 + random(0, 40), b1 + random(0, 40));
    }  
    rect(x/2, x/4, x/2 - m*j, x/4);
  }
  fill(255, 255, 255);
  var num_panels2 = num_panels/2;
  text("split complementary", 5*x/8, x/num_panels2 - 5);
}

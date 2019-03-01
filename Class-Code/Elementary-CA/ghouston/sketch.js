// Gordon Houston
// Elementary CA Project
// 2/28/19

// Class Project

let gen1 = Array(57).fill(0);
let gridsize;
function setup() {
  createCanvas(400, 400);
  gen1[round(gen1.length / 2)] = 1;
  gridsize = width / gen1.length;
  console.log(gridsize);
}

function draw() {
  background(120);

  for (let i = 0; i < gen1.length; i++) {
    if (gen1[i] == 1) {
      fill(0);
    } else {
      fill(255);
    }
    noStroke();
    rect(i * gridsize, 0, gridsize, gridsize);
  }
}

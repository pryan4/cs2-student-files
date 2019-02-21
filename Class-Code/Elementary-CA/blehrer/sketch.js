//Ben Lehrer
//Elementary-CA
//Date

/* A brief description of what the program is */

let gen = [];
let genNum = 0;
let cellSize;

function setup() {
    createCanvas(400, 400);

    gen[genNum] = Array(101).fill(0);
    gen[genNum][floor(gen[genNum].length / 2)] = 1;

    cellSize = width / gen[genNum].length;
}

function draw() {
    for(let i = 0; i < gen[genNum].length; ++i){

    }
    background(220);
}
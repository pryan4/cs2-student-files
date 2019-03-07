//Your Name(s)
//Project Name
//Date

/* A brief description of what the program is */

let cellSize;
let cellCount = 200;

let backgroundColor = 220;

let ca = new Array(cellCount);

function setup() {
    createCanvas(600, 600);
    noStroke();

    frameRate(3);

    cellSize = width / cellCount;

    for (let i = 0; i < cellCount; ++i) {
        ca[i] = new Array(cellCount).fill(0);
    }

    for (let i = 1; i < cellCount - 1; ++i) {
        for (let j = 1; j < cellCount - 1; ++j) {
            ca[i][j] = random() < 0.03 ? 1 : 0;
        }
    }
}

function draw() {
    background(backgroundColor);
    for (let i = 0; i < cellCount; ++i) {
        for (let j = 0; j < cellCount; ++j) {
            ca[i][j] == 1 ? fill(0) : fill(backgroundColor);
            rect(i * cellSize, j * cellSize, cellSize, cellSize);
        }
    }

    oldCA = ca;

    for (let i = 1; i < cellCount - 1; ++i) {
        for (let j = 1; j < cellCount - 1; ++j) {
            ca[i][j] = applyRule(oldCA, i, j);
        }
    }
    //noLoop();
}

function applyRule(CA, x, y) {
    let neighborhood = 0;

    for(let i = -1; i < 2; ++i){
        for(let j = -1; j < 2; ++j){
            if(i != 0 && j != 0)
                if(CA[x - i][y - j] == 1)
                    ++neighborhood;
        }
    }

    if(neighborhood < 2)
        return 0;
    if(neighborhood > 3)
        return 0;
    if(neighborhood = 3)
        return 1;
    return CA[x][y];
}
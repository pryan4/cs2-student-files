//Your Name(s)
//Project Name
//Date

/* A brief description of what the program is */

let cellSize;
const cellCount = 40;

const backgroundColor = 220;

let ca = new Array(cellCount);

function setup() {
    createCanvas(400, 400);
    //noStroke();
    strokeWeight(0.5);
    fill(0);

    frameRate(3);

    cellSize = width / cellCount;

    for (let i = 0; i < cellCount; ++i) {
        ca[i] = new Array(cellCount).fill(0);
    }

    for (let i = 1; i < cellCount - 1; ++i) {
        for (let j = 1; j < cellCount - 1; ++j) {
            ca[i][j] = random() < 0.5 ? 1 : 0;
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

    let oldCA = new Array(cellCount);

    for (let i = 0; i < cellCount; ++i) {
        oldCA[i] = new Array(cellCount);
        for (let j = 0; j < cellCount; ++j) {
            oldCA[i][j] = ca[i][j];
        }
    }

    for (let i = 1; i < cellCount - 1; ++i) {
        for (let j = 1; j < cellCount - 1; ++j) {
            ca[i][j] = applyRule(oldCA, i, j);
        }
    }
}

function applyRule(_ca, x, y) {
    let neighborhood = 0;

    for (let i = -1; i < 2; ++i) {
        for (let j = -1; j < 2; ++j) {
            if (i != 0 || j != 0)
                neighborhood += _ca[x + i][y + j];
        }
    }

    if (neighborhood < 2 || neighborhood > 3)
        return 0;
    if (neighborhood == 3)
        return 1;
    return _ca[x][y];
}
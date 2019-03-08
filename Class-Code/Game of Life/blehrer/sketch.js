//Your Name(s)
//Project Name
//Date

/* A brief description of what the program is */

let cellSize;
const cellCount = 100;

let backgroundColor = 220;

let ca = new Array(cellCount);

function setup() {
    createCanvas(400, 400);
    noStroke();
    fill(0);

    frameRate(10);

    cellSize = width / cellCount;

    for (let i = 0; i < cellCount; ++i) {
        ca[i] = new Array(cellCount).fill(0);
    }

    for (let i = 1; i < cellCount - 1; ++i) {
        for (let j = 1; j < cellCount - 1; ++j) {
            //ca[i][j] = random() < 0.1 ? 1 : 0;
        }
    }
    ca[50][50] = 1;
    ca[51][51] = 1;
    ca[52][49] = 1;
    ca[52][50] = 1;
    ca[52][51] = 1;
}

function draw() {
    //display
    background(backgroundColor);
    for (let i = 0; i < cellCount; ++i) {
        for (let j = 0; j < cellCount; ++j) {
            if (ca[i][j] == 1) rect(i * cellSize, j * cellSize, cellSize, cellSize);
        }
    }

    let oldCA = ca;

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
            if (i != 0 && j != 0)
                neighborhood += _ca[x - i][y - j];
        }
    }

    if (neighborhood < 2 || neighborhood > 3)
        return 0;
    if (neighborhood == 3)
        return 1;
    return _ca[x][y];
}
// Ben Lehrer
// Game of Life
// March 14th, 2019

/*  
    This is an implementation of Conway's Game of Life in p5.js.
    It creates a grid on the screen full of cells with states 1 or 0.
    A rule is applied to each grid state to create a consecutive
    generation. Follow the directions on the screen to play!
*/

let cellSize;
const cellCount = 100;

let started = false;
let startButton;

let paused = false;
let pauseButton;

let resetButton;

const backgroundColor = 220;

let ca = new Array(cellCount);

function setup() {
    createCanvas(600, 600);
    background(backgroundColor);
    noStroke();
    fill(0);

    frameRate(10);

    startButton = createButton('CLICK HERE TO BEGIN');
    startButton.mousePressed(initCA);

    pauseButton = createButton('PAUSE');
    pauseButton.mousePressed(pauseCA);

    resetButton = createButton('RESET');
    resetButton.mousePressed(resetCA);

    cellSize = width / cellCount;

    for (let i = 0; i < cellCount; ++i) {
        ca[i] = new Array(cellCount).fill(0);
    }

    textAlign(CENTER, CENTER);
    textSize(20);
    text("CLICK AND DRAG MOUSE OVER CELLS TO INIT", width / 2, height / 2);
}

function draw() {
    if (!started) { //wait until the board is init
        if (mouseIsPressed) {   //init cells to 1 when mouse is dragged over
            if (mouseX > width || mouseY > height)
                return;
            let cellX = floor(map(mouseX, 0, width, 0, cellCount));
            let cellY = floor(map(mouseY, 0, width, 0, cellCount));
            ca[cellX][cellY] = 1;
            drawCA();
        }
        return;
    }

    if (paused)
        return;

    drawCA();

    if (checkExtinction()) {
        text("ALL CELLS ARE DEAD \n CLICK AND DRAG TO RESTART", width / 2, height / 2);
        started = false;
        return;
    }

    calcNewCA();
}



function resetCA() {
    for (let i = 0; i < cellCount; ++i) {
        ca[i].fill(0);
    }
    started = false;
    background(backgroundColor);
    text("CLICK AND DRAG MOUSE OVER CELLS TO INIT", width / 2, height / 2);
}

function checkExtinction() {
    for (let i = 0; i < cellCount; ++i) {
        for (let j = 0; j < cellCount; ++j) {
            if (ca[i][j] == 1)
                return false;
        }
    }
    return true;
}

function initCA() {
    started = true;
}

function pauseCA() {
    paused = !paused;
}

function drawCA() {
    background(backgroundColor);
    for (let i = 0; i < cellCount; ++i) {
        for (let j = 0; j < cellCount; ++j) {
            if (ca[i][j] == 1) rect(i * cellSize, j * cellSize, cellSize, cellSize);
        }
    }
}

function calcNewCA() {
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
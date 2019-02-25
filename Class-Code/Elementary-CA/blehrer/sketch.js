//Ben Lehrer
//Elementary-CA
//Date

/* A brief description of what the program is */

let ca = [];
let genNum = 0;
let cellSize;

let rule = 90;
let ruleString = "";

const arraySize = 501;

const backgroundColor = 220;

function setup() {
    background(backgroundColor);
    createCanvas(arraySize - 1, (arraySize - 1) / 2);
    noStroke();

    ca[genNum] = Array(arraySize).fill(0);
    ca[genNum][floor(arraySize / 2)] = 1;

    cellSize = width / arraySize;

    let digits = int(rule).toString(2).length;
    for (let i = 0; i < 8 - digits; ++i) {
        ruleString += "0";
    }
    ruleString += int(rule).toString(2);
    console.log(ruleString);
}

function newDigit(index) {
    let codon = String(ca[genNum][index - 1]) + String(ca[genNum][index]) + String(ca[genNum][index + 1]);
    let value = parseInt(codon, 2);
    return ruleString[7 - value];
}

function draw() {
    for (let i = 0; i < ca[genNum].length; ++i) {
        ca[genNum][i] == 0 ? fill(backgroundColor) : fill(0);
        rect(i * cellSize, cellSize * genNum, cellSize, cellSize);
    }
    ca[genNum + 1] = Array(arraySize).fill(0);
    for (let i = 1; i < arraySize - 1; ++i) {
        ca[genNum + 1][i] = newDigit(i);
    }
    ++genNum;
}
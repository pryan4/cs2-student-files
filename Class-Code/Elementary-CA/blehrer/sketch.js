//Ben Lehrer
//Elementary-CA
//Date

/* A brief description of what the program is */

let genNum = 1;

let rule = 30;
let ruleString = "";

const arraySize = 501;

const backgroundColor = 220;

function setup() {
    createCanvas(arraySize - 1, (arraySize - 1) / 2);
    pixelDensity(1);
    background(backgroundColor);

    let digits = int(rule).toString(2).length;
    for (let i = 0; i < 8 - digits; ++i) {
        ruleString += "0";
    }
    ruleString += int(rule).toString(2);
    console.log(ruleString);

    loadPixels();
    pixels[3 + (4 * floor(arraySize / 2))] = 255;
    updatePixels();
}

function newDigit(index) {
    let codon = String(int(pixels[index - 4] / 255)) + String(int(pixels[index] / 255)) + String(int(pixels[index + 4] / 255));
    let value = parseInt(codon, 2);
    return ruleString[7 - value];
}

function draw() {
    loadPixels();

    let startIndex = 3 + (4 * genNum * arraySize);

    for (let i = startIndex; i < startIndex + (4 * arraySize) - 8; i += 4) {
        pixels[i] = newDigit(i) == 1 ? 255 : 255 - backgroundColor;
    }
    ++genNum;

    updatePixels();
    noLoop();
}
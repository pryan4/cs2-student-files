//Ben Lehrer
//Elementary-CA
//Date

/* A brief description of what the program is */

let genNum = 1;

let rule = 30;
let ruleString = "";

const pixelNum = 601;
const arraySize = 4 * pixelNum;

const backgroundColor = 220;

function setup() {
    createCanvas(pixelNum / 5, pixelNum / 10);
    background(backgroundColor);

    let digits = int(rule).toString(2).length;
    for (let i = 0; i < 8 - digits; ++i) {
        ruleString += "0";
    }
    ruleString += int(rule).toString(2);
    console.log(ruleString);

    loadPixels();
    colorPixel(4 * floor(pixelNum / 2));
    updatePixels();
}

function colorPixel(index) {
    for (let i = 0; i < 3; ++i) {
        pixels[index + i] = 0;
    }
}

function newDigit(index) {
    let codon = String(1 - int(pixels[index - 4] / 220)) + String(1 - int(pixels[index] / 220)) + String(1 - int(pixels[index + 4] / 220));
    let value = parseInt(codon, 2);
    return ruleString[7 - value];
}

function draw() {
    loadPixels();

    let startIndex = 4 + ((genNum - 1) * arraySize);

    if (startIndex >= pixels.length - arraySize)
        noLoop();

    for (let i = startIndex; i < startIndex + arraySize - 4; i += 4) {
        if (newDigit(i) == 1)
            colorPixel(i + arraySize);
    }
    ++genNum;

    updatePixels();
}
//Ben Lehrer
//Elementary-CA
//Feb 28, 2019

/*
    This program runs an cellular automata
    algorithm to produce an image given an inputed
    ruleset. It employes the p5.js pixel array to
    store the cells and compares each generation to
    a given rule to determine the make up of the next
    generation.
*/

/* USE:
    Input a rule number in either binary or decimal
    into the text field and press the enter button on
    screen to begin. To run a new rule, simply input
    the new rule and press enter again.
*/

let genNum = 0;

let ruleString = "";

const pixelNum = 601;
const arraySize = 4 * pixelNum;

const backgroundColor = 220;

let ruleBox;
let inputRule;

function setup() {
    createCanvas(pixelNum, pixelNum / 2);
    background(backgroundColor);

    ruleBox = createInput("", text);
    inputRule = createButton('enter');
    inputRule.mousePressed(assignRule);
}

function assignRule() {
    ruleString = "";
    genNum = 0;
    background(backgroundColor);
    setFirstRow();

    let val = ruleBox.value();
    if (val.length == 8) {
        ruleString = val;
        console.log(ruleString);
    } else {
        console.log(findRuleString(int(val)));
    }
}

function setFirstRow() {
    loadPixels();
    colorPixel(4 * floor(pixelNum / 2));
    updatePixels();
}

function findRuleString(rule) {
    const digits = int(rule).toString(2).length;
    for (let i = 0; i < 8 - digits; ++i) {
        ruleString += "0";
    }
    ruleString += int(rule).toString(2);
    return ruleString;
}

function colorPixel(index) {
    for (let i = 0; i < 3; ++i) {
        pixels[index + i] = 0;
    }
}

function newDigit(index) {
    const left = String(1 - int(pixels[index - 4] / 220));
    const center = String(1 - int(pixels[index] / 220));
    const right = String(1 - int(pixels[index + 4] / 220));
    const value = parseInt(left + center + right, 2);
    return ruleString[7 - value];
}

function draw() {
    if (ruleString == "")
        return;

    loadPixels();

    const startIndex = 4 + ((genNum) * arraySize);

    if (startIndex >= pixels.length - arraySize) {
        ruleString = "";
        return;
    }

    for (let i = startIndex; i < startIndex + arraySize - 4; i += 4) {
        if (newDigit(i) == 1)
            colorPixel(i + arraySize);
    }
    ++genNum;

    updatePixels();
}


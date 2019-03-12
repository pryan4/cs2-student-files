//Pat Ryan
//Elementary CA
//Feb 21 2019

/An Elementary Cellular Automata/

let gensize = 61
let middleIndexVal = Math.floor(gensize / 2);
const ruleset = [0, 1, 0, 1, 1, 0, 1, 0];
let gen1 = Array(gensize).fill(0);
gen1[middleIndexVal] = 1;
let ca = [];
let gridsize;

function setup() {
    createCanvas(800, 400);
    gridsize = width / gen1.length
    ca.push(gen1)
    
}

function draw() {
    background(255);
    noStroke();
    fill(0);
    for (let j = 0; j < ca.length; j++) {


        for (let i = 0; i < gensize; i++) {
            if (ca[j][i] == 1) {
                rect(i * gridsize, j * gridsize, gridsize, gridsize);
            }
        }
    }
    let thisGen = ca[ca.length - 1]
    let nextGen = Array(gensize).fill(0)

    for (let i = 1; i < nextGen.length - 1; i++) {
        let nextval = applyRules(thisGen[i - 1], thisGen[i], thisGen[i + 1]);
        nextGen[i] = nextval
    }
    ca.push(nextGen);




}

function applyRules(l, me, r) {
    if (l == 1 && me == 1 && r == 1) return ruleset[0];
    else if (l == 1 && me == 1 && r == 0) return ruleset[1];
    else if (l == 1 && me == 0 && r == 1) return ruleset[2];
    else if (l == 1 && me == 0 && r == 0) return ruleset[3];
    else if (l == 0 && me == 1 && r == 1) return ruleset[4];
    else if (l == 0 && me == 1 && r == 0) return ruleset[5];
    else if (l == 0 && me == 0 && r == 1) return ruleset[6];
    else if (l == 0 && me == 0 && r == 0) return ruleset[7];


}
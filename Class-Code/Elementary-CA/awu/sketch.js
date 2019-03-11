//Your Name(s) Alex Wu
//Project Name Elementary CA peoject
//Date FEB 25

/* A brief description of what the program is 
to mimic the CA operation by javascript*/
const rules = [0, 0, 0, 1, 1, 1, 1, 0]
let ca = [];
let cell_size;
let list_length = 201;
let gen_0 = Array(list_length).fill(0);
gen_0[Math.floor(list_length / 2)] = 1;
let resetButton;


function setup() {
    createCanvas(400, 400);
    cell_size = width / list_length;
    console.log(cell_size);
    resetButton = createButton('reset');
    resetButton.mousePressed(restart);
    ca.push(gen_0);
}

function restart() {
    ca = [];
    ca.push(gen_0);
}

function draw() {
    background(255)

    for (let m = 0; m < ca.length; m++) {
        for (let i = 0; i < list_length; i++) {

            if (ca[m][i] == 1) {
                noStroke();
                fill(0);
                rect(i * cell_size, m * cell_size, cell_size, cell_size);
            }
        }
    }
    let gen_old = ca[ca.length - 1];
    let gen_new = Array(list_length).fill(0);
    gen_new[0] = gen_old[0];
    gen_new[list_length - 1] = gen_old[list_length - 1];

    for (let j = 1; j < list_length - 1; j++) {
        gen_new[j] = ruleset(gen_old[j - 1], gen_old[j], gen_old[j + 1])
    }
    ca.push(gen_new);

    if (ca.length * cell_size > width) {
        ca.shift();
    }

}








function ruleset(left, middle, right) {
    if (left == 1 && middle == 1 && right == 1) {
        return rules[0]
    } else if (left == 1 && middle == 1 && right == 0) {
        return rules[1]
    } else if (left == 1 && middle == 0 && right == 1) {
        return rules[2]
    } else if (left == 1 && middle == 0 && right == 0) {
        return rules[3]
    } else if (left == 0 && middle == 1 && right == 1) {
        return rules[4]
    } else if (left == 0 && middle == 1 && right == 0) {
        return rules[5]
    } else if (left == 0 && middle == 0 && right == 1) {
        return rules[6]
    } else if (left == 0 && middle == 0 && right == 0) {
        return rules[7]
    }
}
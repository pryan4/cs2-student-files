//Your Name(s) Alex Wu
//Project Name
//Date

/* A brief description of what the program is */

const rules = [0, 1, 0, 1, 1, 0, 1, 0]
var m = 0
let ca = []
let cell_size
let list_length = 101
let gen_0 = Array(list_length).fill(0)
gen_0[Math.floor(list_length / 2)] = 1

function setup() {
    createCanvas(400, 4000);
    cell_size = width / list_length;
    console.log(cell_size)
}

function draw() {
    
    for (let i = 0; i < list_length; i++) {

        if (gen_0[i] == 1) {
            noStroke();
            fill(0);
            rect(i * cell_size, m * cell_size, cell_size, cell_size)
        }
    }
    ca.push(gen_0);

    let gen_new = Array(list_length).fill(0);
    gen_new[0] = gen_0[0];
    gen_new[list_length - 1] = gen_0[list_length - 1];

    for (let j = 1; j < list_length - 1; j++) {
        gen_new[j] = ruleset(gen_0[j - 1], gen_0[j], gen_0[j + 1])
    }
    gen_0 = gen_new 
    m++
}

/*function draw() {
    background(200);
    for (let i = 0; i < list_length; i++) {

        if (gen_0[i] == 1) {
            noStroke();
            fill(0);
            rect(i * cell_size, 0, cell_size, cell_size)
        }
    }

    let gen_new
    for (let k = 1; k < 400; k++) {
        gen_new = Array(list_length).fill(0);
        gen_new[0] = gen_0[0];
        gen_new[list_length - 1] = gen_0[list_length - 1];
        for (let j = 1; j < list_length - 1; j++) {
            gen_new[j] = ruleset(gen_0[j - 1], gen_0[j], gen_0[j + 1])
        }
        ca.push(gen_new);
        gen_0 = gen_new;

        for (let i = 0; i < list_length; i++) {
            if (ca[k][i] == 1) {
                noStroke();
                fill(0);
                rect(i * cell_size, k * cell_size, cell_size, cell_size)
            }
        }
    }

}
*/

function ruleset(uno, dos, tres) {
    if (uno == 1, dos == 1, tres == 1) return rules[0]
    else if (uno == 1, dos == 1, tres == 0) return rules[1]
    else if (uno == 1, dos == 0, tres == 1) return rules[2]
    else if (uno == 1, dos == 0, tres == 0) return rules[3]
    else if (uno == 0, dos == 1, tres == 1) return rules[4]
    else if (uno == 0, dos == 1, tres == 0) return rules[5]
    else if (uno == 0, dos == 0, tres == 1) return rules[6]
    else if (uno == 0, dos == 0, tres == 0) return rules[7];
}

/*
let gen_new
for(let k = 1; k < 400; k++) {
    gen_new = Array(list_length).fill(0);
    gen_new[0]=gen_0[0];
    gen_new[list_length-1]=gen_0[list_length-1];
    for(let j =1; j < list_length -1; j++){gen_new[j]=ruleset(gen_0[j-1],gen_0[j],gen_0[j+1])}
    ca.push(gen_new);
    gen_0 = gen_new ;}

function draw() {
    background(200);       
    for(let i =0; i < list_length; i++){
    
        if(ca[6][i] == 1){
            noStroke();
            fill(0);
            rect(i*cell_size, 0, cell_size, cell_size)}}}
*/


/*
let gen_new
for(let k = 1; k < 400; k++) {
gen_new = Array(list_length).fill(0);
gen_new[0]=gen_0[0];
gen_new[list_length-1]=gen_0[list_length-1];
for(let j =1; j < list_length -1; j++){gen_new[j]=ruleset(gen_0[j-1],gen_0[j],gen_0[j+1])}
ca.push(gen_new);
gen_0 = gen_new ;

for(let i =0; i < list_length; i++){
    if(gen_new[i] == 1){
        noStroke();
        fill(0);
        rect(i*cell_size, k*cell_size, cell_size, cell_size)
}}}
*/
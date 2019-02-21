//Your Name(s)
//Project Name
//Date

/* A brief description of what the program is */

let cell_size
let list_length = 101
let gen_0 = Array(list_length).fill(0)
gen_0[Math.floor(list_length/2)]=1

function setup() {
    createCanvas(400, 400);
    cell_size=width/list_length;
    console.log(cell_size)
}

gen = 0

function draw() {
    background(200);

for(let i =0; i < list_length; i++){
    if(gen_0[i] == 1){
        noStroke();
        fill(0);
        rect(i*cell_size, gen, cell_size, cell_size)
    }
}
}


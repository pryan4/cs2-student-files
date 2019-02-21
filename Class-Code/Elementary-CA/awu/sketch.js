//Your Name(s)
//Project Name
//Date

/* A brief description of what the program is */

let width = 400

function setup() {
    createCanvas(width, 400);
}

function draw() {
    background(200);
}

let list_length = 100
let gen_0 = Array(list_length).fill(0)
gen_0[Math.floor(list_length/2)]=1

let cell_size = width/list_lengthcell

gen = 0

for(let i =0; list_length; i++){
    if(gen_0[i] == 1){
        rect(i*cell_size, gen, cellsize, cellsize)
    }

}
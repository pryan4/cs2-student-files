//Jacob Kohl
//Elementary-CA
//February 26, 2019

/* A brief description of what the program is */

const ruleset = (0,1,0,1,1,0,1,0);
let ca = [];
let gensize = 101;
let gridsize;


function setup() {
    createCanvas(400,800);
    let gen0 = Array(gensize).fill(0);
    gen0[floor(gensize/2)]=1;
    ca.push(gen0);
    gridsize = width/gensize
    
}

function draw() {
    rect(50,250,300,300);
    
    noStroke()
    fill(0);
    for(let j = 0; j < ca.length; j++){
        for(let i = 0; i < gensize; i++){
            if(ca[j][i] == 1){
                rect(i+gridsize,j*gridsize,gridsize,drisize)
            }
        }
    }

    for(let i = 0; i < gen1.length; i++){
        if(gen1[i] == 1){
            noStroke();
            fill(0);
            rect(i+gridsize,0,gridsize,gridsize);
        }
    }
}
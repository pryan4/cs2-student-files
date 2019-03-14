//Jacob Kohl
//Game of Life
//March 15, 2019


let current = [];
let cellsize = 10;

let columns,rows;

function setup() {
    createCanvas(900, 500);

    columns = floor(width/cellsize);
    rows = floor(height/cellsize)

    for(let row = 0; row < rows; row++){
        current.push(new Array(columns).fill(0).map(()=>round(random())))
    }
    noStroke();
    current[5][5] = 1
    current[5][6] = 1
    current[5][7] = 1
    //noLoop()


    
}

function draw() {

    display()

    let nextgen = [];
    nextgen.push(Array(columns).fill(0))

    for(let row = 1; row < rows - 1; row++){
        let newrow = [0];
        for(let col = 1; col < columns - 1; col++){
            let neighbors = 0;
            for(let y = -1; y <=1; y++){
                for(let x = -1; x <= 1; x++){
                    neighbors += current[row + y][col + x]
                }
            }
            neighbors -= current[row][col]
            let nextstate = applyrules(current[row][col],neighbors)
            newrow.push(nextstate)

        }
        newrow.push(0);
        nextgen.push(newrow);
    }
    nextgen.push(Array(columns).fill(0))
    //console.log(nextgen)
    current = nextgen
}

function display(){
    for(let row = 0; row < rows; row++){
        for(let col = 0; col < columns; col++){
            if(current[row][col]==1){
                fill(0);
            } else {
                fill(255)
            }
           rect(col*cellsize,row*cellsize,cellsize,cellsize)
        }
    }
}

function applyrules(curentstate, numneighbors){
    if(curentstate == 1 && numneighbors < 2) return 0
    else if(curentstate == 1 && numneighbors > 3) return 0
    else if(curentstate == 0 && numneighbors == 3) return 1
    else return curentstate
}
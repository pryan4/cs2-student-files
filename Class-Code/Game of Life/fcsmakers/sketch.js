//Your Name(s)
//Project Name
//Date

/* A brief description of what the program is */


let current = [];
let cellSize = 10;

let columns,rows;

function setup() {
    createCanvas(800,400)
    frameRate(10)

    columns = floor(width/cellSize);
    rows = floor(height/cellSize)

    for(let row = 0; row < rows; row++){
        current
        .push(new Array(columns)
        .fill(0)
        .map(() => round(random())))
    }
    noStroke()
    current[5][5] = 1
    current[5][6] = 1
    current[5][7] = 1
    //noLoop()

}


function draw() {
    displayCurrent()
    generateNext(); 
}

function displayCurrent(){
    for(let row = 0; row < rows; row++){
        for(let col = 0; col < columns; col++){
            if(current[row][col]==1){
                fill(0);
            } else {
                fill(255)
            }
            rect(col*cellSize,row*cellSize,cellSize,cellSize)
        }
    }
    noFill()
    rect(0,0,width-1,height-1)
}

function generateNext(){
    let nextGen = [];
    nextGen.push(Array(columns).fill(0))

    for(let row = 1; row < rows - 1; row++){
        let newRow = [0];
        for(let col = 1; col < columns - 1; col++){
            let neighbors = 0;
            for(let y = -1; y <= 1; y++){
                for(let x = -1; x <= 1; x++){
                    neighbors += current[row + y][col + x]
                }
            }
            neighbors -= current[row][col]
            let nextState = applyRules(current[row][col],neighbors)
            newRow.push(nextState);
        }
        newRow.push(0);
        nextGen.push(newRow);
    }
    nextGen.push(Array(columns).fill(0))
    current = nextGen
}

function applyRules(currentState, numNeighbors){
    if(currentState == 1 && numNeighbors < 2) return 0
    else if(currentState == 1 && numNeighbors > 3) return 0
    else if(currentState == 0 && numNeighbors == 3) return 1
    else return currentState
}

//Your Name(s)
//Project Name
//Date

/* A brief description of what the program is */
let cell_console;
let cell_size;
let color = 250;
let cell_length;
let next_cell;

function setup() {
    createCanvas(400, 400);
    frameRate(5)
    cell_length = 101;
    // specify the length of column and row
    cell_console = Array(cell_length);
    for (i = 0; i < cell_length - 1; i++) {
        cell_console[i] = Array(cell_length).fill(0);
    }
    //initialize columns and rows of cells with 0
    for (i = 1; i < cell_length - 1; i++) {
        for (j = 1; j < cell_length - 1; j++) {
            cell_console[i][j] = (random() < 0.5) ? 1 : 0;

        }
    }
    

    cell_size = width / cell_length;
}

function draw() {
    background(color);
    //draw the current cell
    for (let i = 0; i < cell_length-1; i++) {
        for (let j = 0; j < cell_length-1; j++) {
            if (cell_console[i][j] == 1) {
                noStroke();
                fill(0);
                rect(i * cell_size, j * cell_size, cell_size, cell_size);
            }
        }
    }


    //initialize the next cell
    next_cell = Array(cell_length);
    for (i = 0; i < cell_length - 1; i++) {
        next_cell[i] = Array(cell_length).fill(0);
    }


    //compute the next cell
    for (let a = 1; a < cell_length - 2; a++) {
        for (let b = 1; b < cell_length - 2; b++) {
            // given the cell at (a,b)
            let neighbors = 0;
            for (let m = -1; m < 2; m++) {
                for (let f = -1; f < 2; f++) {
                    neighbors += cell_console[a + m][b + f];
                    //find the value of its neighbor
                }
            }
            neighbors -= cell_console[a][b];
            //subtract by its own value

            if ((cell_console[a][b] == 1) && (neighbors < 2)) {
                next_cell[a][b] = 0;
            } else if ((cell_console[a][b] == 1) && (neighbors > 3)) {
                next_cell[a][b] = 0;
            } else if ((cell_console[a][b] == 0) && (neighbors == 3)) {
                next_cell[a][b] = 1;
            } else {
                next_cell[a][b] = cell_console[a][b];
            }
            // compute next_cell at (a,b)
        }
        //looping over the whole cell
    }

    //set the current cell to be the next cell
    cell_console = next_cell
    //loop
}


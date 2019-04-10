//Your Name(s)
//Project Name
//Date

/* A brief description of what the program is */


let x,y,r;
let xVel = 5;
let yVel = 5;

function setup() {
    createCanvas(600, 400);
    x = width/2;
    y = height/2;
    r = 10;

    ellipseMode(RADIUS)
}

function draw() {
    background(0,50);

    //display
    fill(0,255,100);
    stroke(255);
    ellipse(x,y,r)

    //move ball

    x += xVel;
    y += yVel;

    //check edges

    if(x + r >= width || x - r <= 0) xVel *= -1;
    if(y + r >= height || y - r <= 0) yVel *= -1;

}

//Pat Ryan
//OOP
//April 2019

/* Refactored code into classes */


let x, y, r;
let xVel = 5;
let yVel = 5;
let ball; 
function setup() {
    ball = new Ball();
    createCanvas(600, 400);
    x = width / 2;
    y = height / 2;
    r = 10;

    ellipseMode(RADIUS)

}

function draw() {
    background(0, 50);
    ball.display()
    ball.moveBall()
    ball.checkEdges()


}

class Ball {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.r = 10;
        this.xVel = 5;
        this.yVel = 5;
    }
    display() {
        fill(0, 255, 100);
        stroke(255);
        ellipse(this.x, this.y, this.r)
    }
    moveBall() {
        this.x += this.xVel;
        this.y += this.yVel;
    }
    checkEdges() {
        if (this.x + this.r >= width || this.x - this.r <= 0) this.xVel *= -1;
        if (this.y + this.r >= height || this.y - this.r <= 0) this.yVel *= -1;
    }
}
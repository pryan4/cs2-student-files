//Alex Wu
//Object, arrays, and classes 
//April 9th, 2019

/* A brief description of what the program is */
let bubbles = [];

function setup() {
    createCanvas(400, 400);
    for(i=0; i<1000; i++){
    let rgb = [random(0,250),random(0,250),random(0,250)]
    bubbles.push(new Bubble(random(0,400),random(0,400),random(0,10),random(0,5),rgb));
    }
}

class Bubble {
    constructor(tempX, tempY, tempR, tempV, tempColor) {
        this.x = tempX;
        this.y = tempY;
        this.r = tempR;
        this.speed = tempV;
        this.color = tempColor
    }

    rmove() {
        this.x += random(this.speed, -this.speed);
        this.y += random(this.speed, -this.speed);
    }

    show() {
        strokeWeight(4);
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, 2 * this.r);
        
    }

    large(scale) {
        this.r += scale;
    }


}

function draw() {
    background(220);
    for(i=0;i<bubbles.length; i++){
        bubbles[i].show();
        bubbles[i].rmove();
    }
}
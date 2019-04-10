//Your Name(s)
//Project Name
//Date

/* A brief description of what the program is */
let bubble1

function setup() {
    createCanvas(400, 400);
    bubble1 = new Bubble(200,100,10,5,[5,100,200]);
    bubble2 = new Bubble(100,100,5,20,[200,100,5]);
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
    bubble1.show();
    bubble2.show();
    bubble1.rmove();
    bubble2.rmove();
}
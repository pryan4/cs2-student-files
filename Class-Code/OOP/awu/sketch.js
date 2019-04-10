//Your Name(s)
//Project Name
//Date

/* A brief description of what the program is */
let bubble1

function setup() {
    createCanvas(400, 400);
    bubble1 = new Bubble();
}

class Bubble {
    constructor() {
        this.x = 100;
        this.y = 200;
        this.r = 5;
    }

    rmove(speed) {
        this.x += random(speed, -speed);
        this.y += random(speed, -speed);
    }

    show() {
        strokeWeight(4);
        ellipse(this.x, this.y, this.r, this.r);
    }

    large(scale) {
        this.r += scale;
    }


}

function draw() {
    background(220);
    bubble1.show();
    bubble1.rmove(5);
}
//Mr. Darfler
//DLA Simulation
//April 16th 2019

/* This sketch simulates a basic Diffusion
Limited Aggregation Model using p5.js and
a walker class */

let walkers = [];

function setup() {
    createCanvas(600, 400);

    for (let i = 0; i < 50; i++) {
        walkers.push(new Walker(
            random(width), random(height)
        ));
    }

    let seed = new Walker(width / 2, height / 2);
    seed.static = true;
    walkers.push(seed);
}

function draw() {
    background(220);

    for (let i = 0; i < walkers.length; i++) {
        walkers[i].move();
        walkers[i].show();

        for(let j = i +1; j < walkers.length; j++){
            walkers[i].checkCollision(walkers[j])
        }
    }
}

class Walker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 10;
        this.static = false;
    }

    move() {
        if (!this.static) {
            this.x += random(-5, 5);
            this.y += random(-5, 5);

            if (this.x > width) this.x = width;
            if (this.x < 0) this.x = 0;
            if (this.y > width) this.y = width;
            if (this.y < 0) this.y = 0;
        }
    }

    show() {
        ellipseMode(RADIUS);
        if (this.static) {
            fill(0);
        } else {
            fill(200);
        }
        ellipse(this.x, this.y, this.r)
    }

    checkCollision(other) {
        let d = dist(this.x, this.y, other.x, other.y);
        let sumOfRadii = this.r + other.r;

        let collision = d <= sumOfRadii;

        if (collision){
            // console.log("collision")
            this.static = true;
            other.static = true;
        }


    }

}
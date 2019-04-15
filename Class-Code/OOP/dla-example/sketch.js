//Mr. Darfler
//DLA - Starter Code
//Monday, April 15th 2019

/* This sketch creates a simple simulation of 
diffusion limited aggregation using classes and objects */

let walkers = [];

function setup() {
    createCanvas(600, 400);
    ellipseMode(RADIUS)
    for (let i = 0; i < 100; i++) {
        walkers.push(new Walker(random(width), random(height)));
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
        for (let j = i + 1; j < walkers.length; j++) {
            walkers[i].checkCollision(walkers[j]);
        }
    }
}

class Walker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 5;
        this.static = false;
    }

    move() {
        if (!this.static) {
            this.x += random(-5, 5);
            this.y += random(-5, 5);

            if(this.x < 0) this.x = 0;
            if(this.x > width) this.x = width;
            if(this.y < 0) this.y = 0;
            if(this.y > height) this.y = height;
        }


    }

    show() {
        if (!this.static) {
            fill(200);
        } else {
            fill(0);
        }
        ellipse(this.x, this.y, this.r)
    }

    checkCollision(other) {
        if(other.static){
            let d = dist(this.x, this.y, other.x, other.y);
            let sumOfRadii = this.r + other.r;
            
            let collided = d <= sumOfRadii * 1.25;
            if (collided && random() > 0.2) {
                this.static = true;
            }
        }
        

        
        
    }
}
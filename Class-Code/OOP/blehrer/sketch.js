//Ben Lehrer
//In Class Assignment
//4/9/19

/*
    In your fork of cs2-student-files navigate to OOP/object-classes/yourname.
    (If it’s not there, make sure to pull in the updates from fcs-cs to your fork)
    There you will find a sketch of a bouncing ball written without using object classes.
    Refactor the code so that there is a Ball class that knows about its x, y and r
    and has at least three methods. After refactoring create at least two instances
    of the Ball class (ball1 and ball2). When you have finished submit a pull request
    back to fcs-cs/cs2-student-files MASTER.
*/

class Bubble {
    constructor(_x, _y, _r, _speed, _color) {
        this.x = _x;
        this.y = _y;
        this.r = _r;
        this.angle = random(0, 2 * PI);
        this.speed = _speed;
        this.color = _color;
    }
    show() {
        push();
        colorMode(HSB);
        fill(this.color, 255, 255);
        ellipse(this.x, this.y, this.r)
        pop();
    }
    move() {
        this.x += this.speed * cos(this.angle);
        this.y += this.speed * sin(this.angle);
        this.angle += random(-PI / 6, PI / 6);
    }
    edge() {
        if (this.x >= width || this.x <= 0) {
            this.angle *= -1;
            return;
        }
        if (this.y >= height || this.y <= 0) {
            this.angle *= -1;
        }
    }
    touch(index) {
        for (let i = 0; i < bubbles.length; ++i) {
            if (i == index) continue;
            if (dist(this.x, this.y, bubbles[i].x, bubbles[i].y) < this.r + bubbles[i].r) {
                if (this.r > bubbles[i].r) {
                    this.r += bubbles[i].r;
                    bubbles[i].r = 0;
                } else {
                    bubbles[i].r += this.r;
                    this.r = 0;
                }
            }
        }
    }
}

let bubbles = new Array(2);

function setup() {
    createCanvas(600, 600);
    noStroke();
    for (let i = 0; i < 15; ++i) {
        bubbles[i] = new Bubble(random(0, width), random(0, height), random(5, 30), random(1, 3), random(0, 360));
    }
}

function draw() {
    background(220);

    for (let i = 0; i < bubbles.length; ++i) {
        bubbles[i].move();
        bubbles[i].edge();
        bubbles[i].touch(i);
        bubbles[i].show();
    }
}
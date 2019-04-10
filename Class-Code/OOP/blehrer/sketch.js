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
    constructor(_x, _y, _r) {
        this.x = _x;
        this.y = _y;
        this.r = _r;
    }
    show() {
        fill(255);
        ellipse(this.x, this.y, this.r)
    }
    move() {
        this.x += random(-width / 100, width / 100);
        this.y += random(-height / 100, height / 100);
    }
    pop() {
        if(this.x >= width || this.x <= 0) {
            this.r = 0;
            return;
        }
        if(this.y >= height || this.y <= 0) {
            this.r = 0;
        }
    }
}

let bubbles = new Array(2);

function setup() {
    createCanvas(200, 200);
    noStroke();

    bubbles[0] = new Bubble(random(0, width), random(0, height), random(1, 20));
    bubbles[1] = new Bubble(random(0, width), random(0, height), random(1, 20));
}

function draw() {
    background(220);
    
    for(let i = 0; i < bubbles.length; ++i){
        bubbles[i].move();
        bubbles[i].pop();
        bubbles[i].show();
    }
}

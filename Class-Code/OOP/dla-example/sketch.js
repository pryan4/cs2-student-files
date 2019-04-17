//Mr. Darfler
//DLA Simulation
//April 16th 2019

/* This sketch simulates a basic Diffusion
Limited Aggregation Model using p5.js and
a walker class */

let walkers = [];
let static = [];
let newStatic;

function setup() {
    createCanvas(600, 400);
    ellipseMode(RADIUS)

    for(let i = 0; i < 500; i++){
        walkers.push(new Walker(random(width), random(height)));
    }

    let seed0 = new Walker(random(width), random(height));
    let seed1 = new Walker(random(width), random(height));


    seed0.static = true;
    seed1.static = true;
    static.push(seed0, seed1);
}

function draw() {
    background(220);

    //showing, moving and checking
    for (let w of walkers){
        w.show();
        w.move();
        for(let s of static){
            w.checkCollision(s)
        }
    }

    //Separate newly aggregated walkers from free float walkers.
    newStatic = walkers.filter(w => w.static);
    walkers = walkers.filter(w => !w.static);

    //pushing each newly aggregated walker into static
    for(eachNew of newStatic) static.push(eachNew);

    //showing all static walkers.
    for(s of static){
        s.show();
    }

}

class Walker{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.r = 8;
        this.static = false;
    }

    move(){
        this.x += random(-3,3);
        this.y += random(-3,3);

        if(this.x < 0) this.x = 0;
        if(this.y < 0) this.y = 0;

        if(this.x > width) this.x = width;
        if(this.y > height) this.y = height;
    }

    show(){

        if(this.static){
            fill(0);
        } else {
            fill(255)
        }
        noStroke();
        ellipse(this.x, this.y, this.r)
    }

    checkCollision(staticWalker){
        let d = dist(this.x, this.y, staticWalker.x, staticWalker.y);
        let sumOfRadii = this.r + staticWalker.r;

        if(d <= sumOfRadii){
            this.static = true;
        }
    }

}
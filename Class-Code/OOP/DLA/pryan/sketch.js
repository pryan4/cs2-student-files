// Pat Ryan
//DLA
//April 2019

/*Worling DLA */

let walkers = [];
let static = [];
let newStatic;
let innerRadius;

function setup() {
    createCanvas(600, 400);
    innerRadius = height / 2;
    ellipseMode(RADIUS)
    for (let i = 0; i < 500; i++) {
        let r = innerRadius - 20
        let theta = random(TWO_PI)
        let x = cos(theta) * r + width/2;
        let y = sin(theta) * r + height/2;
        walkers.push(new Walker(x, y));
    }
    let seed0 = new Walker(0, 0)
    seed0.static = true
    static.push(seed0);

}

function draw() {
    background(51,143,223);
    for (let w of walkers) {
        w.show()
        w.move()
        for (let s of static) {
            w.checkCollision(s);

        }
    }
    newstatic = walkers.filter(w => w.static);
    walkers = walkers.filter(w => !w.static);

    for (let eachnew of newstatic) {
        let d = dist(eachnew.x,eachnew.y,width/2,height/2)
        if(d < innerRadius){
            innerRadius = d;
            console.log(innerRadius)
        }
        static.push(eachnew);
        
    }
    for (s of static) {
        s.show();
    }
    if (walkers.length < 500) {
        let r = innerRadius
        let theta = random(TWO_PI)
        let x = cos(theta) * r + width/2;
        let y = sin(theta) * r + height/2;
        walkers.push(new Walker(x,y));
    }
}
class Walker {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.r = 2
        this.static = false;
    }

    move() {
        this.x += random(-3, 3);
        this.y += random(-3, 3);
        if (this.x < 0) this.x = 0
        if (this.y < 0) this.y = 0

        if (this.x > width) this.x = 0
        if (this.y > height) this.y = 0
    }
    show() {
        if (this.static) {
            fill(39,222,137);
        } else {
            fill(222,216,16)
        }
        let f = dist(this.x,this.y,width/2,height/2)
        if(f < width/5){
            fill(70,39,222)
        }
    
        if(f < width/8){
            fill(222,39,39)
        }



        
        noStroke();
        ellipse(this.x, this.y, this.r)

    }
    checkCollision(staticWalker) {
        let d = dist(this.x, this.y, staticWalker.x, staticWalker.y)
        let sumOfRadii = this.r + staticWalker.r

        if (d <= sumOfRadii) {
            this.static = true;

        }
        let e = dist(width / 2, height / 2, this.x, this.y) > height / 2;
        if (e == true) {
            this.static = true;
        }





    }



}
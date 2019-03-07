// FCS Makers
// Moving Ball
// March 1st

/* This Ball moves across the screen */


function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255,0,0);
    fill(0,255,0)
    ellipse(frameCount,height/2,50,50)
}

//Michael Darfler
//04-03 Programming with Objects
//Sunday, March 31st

/* This sketch shows how to use objects when programming in JS with a simple moving bubble. */

let bubble;

function setup() {
    createCanvas(200, 200);
    bubble = {
        x: width / 2,
        y: height / 2,
        hello: function () {
            console.log("hello")
        },
        show: function () {
            noFill();
            stroke(255);
            strokeWeight(4);
            ellipse(this.x, this.y, 50)
        },
        move: function (maxMove) {
            this.x += random(-maxMove, maxMove);
            this.y += random(-maxMove, maxMove);
        }
    }
    //bubble.hello();
}

function draw() {
    background(0);
    bubble.move(1);
    bubble.show();

}

// function moveBubble(maxMovement) {
//     bubble.x += random(-maxMovement, maxMovement);
//     bubble.y += random(-maxMovement, maxMovement);
// }

// function displayBubble() {
//     stroke(255);
//     strokeWeight(4);
//     noFill();
//     ellipse(bubble.x, bubble.y, 50);
// }
//Your Name(s)
//Project Name
//Date

/* A brief description of what the program is */

function preload() {
    sound = loadSound('groove.mp3');
}

function setup() {
    var cnv = createCanvas(400, 400);
    cnv.mouseClicked(togglePlay);
    fft = new p5.FFT();
    sound.amp(0.5);
}

function draw() {
    background(0);

    var spectrum = fft.analyze();
    noStroke();
    fill(0, 255, 0); // spectrum is green
    for (var i = 0; i < spectrum.length; i++) {
        var x = map(i, 0, spectrum.length, 0, width);
        var h = -height + map(spectrum[i], 0, 255, height, 0);
        rect(x, height, width / spectrum.length, h)
    }
}

function togglePlay() {
    if (sound.isPlaying()) {
      sound.pause();
    } else {
      sound.loop();
    }
  }
//Ben Lehrer
//Fourier Analysis
//March 18, 2019

/* octave shifter */

let mic;
let fft;
let spectrum;

let tuneSlider;

function setup() {
    createCanvas(400, 600);
    noFill();

    tuneSlider = createSlider();

    mic = new p5.AudioIn();
    mic.start();

    fft = new p5.FFT();
    fft.setInput(mic);
}

function draw() {
    background(220);

    let tune = pow(2, round(map(tuneSlider.value(), 0, 100, 1, 5)));

    push();
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(40);
    text("octave shift: " + log(tune) / log(2), width / 2, height / 2);
    pop();

    spectrum = fft.analyze();
    beginShape();
    for (let i = 0; i < spectrum.length; i++) {
        vertex(i, map(spectrum[i], 0, 255, height, height / 2));
    }
    endShape();

    newSpectrum = new Array(spectrum.length).fill(0);
    beginShape();

    for (let i = 0; i < spectrum.length / tune; ++i) {
        for (let j = -tune / 2; j < tune / 2; ++j) {
            newSpectrum[(i * tune) + j] = spectrum[i];
        }
    }

    for (let i = 0; i < newSpectrum.length; i++) {
        vertex(i, map(newSpectrum[i], 0, 255, height / 2, 0));
    }
    endShape();

    for(let i = 0; i < newSpectrum.length; i += 100){
        let osc = new p5.Oscillator();
        osc.setType('sine');
        osc.freq(i);
        osc.amp(newSpectrum[i]);
        osc.start();
    }
}
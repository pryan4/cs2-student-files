//Your Name(s)
//Project Name
//Date

/* A brief description of what the program is */

let oscArray = [];
let sliderArray = [];
let fftArray = [];
let playing = false;
let startButton;
let viz;
let colorPallet = [[255,0,0],[0,255,0],[0,0,255]]

// function setup(){
//     createCanvas(600,400);
//     viz = new visualizer()

// }

function setup() {
    createCanvas(800, 400);
    for (let i = 0; i < 3; i++) {
        oscArray.push(new p5.Oscillator());
        oscArray[i].setType('sine');
        oscArray[i].amp(0);
        oscArray[i].start();

        sliderArray[i] = createSlider(200, 2000, 500)
        sliderArray[i].mouseMoved(update)

        fftArray[i] = new p5.FFT()
        fftArray[i].setInput(oscArray[i])
    }

    startButton = createButton('Start/Stop');
    startButton.mousePressed(startStop)

    update()

}


function startStop() {

    if (!playing) {
        for (let osc of oscArray) osc.amp(1,0.25);
    } else {
        for (let osc of oscArray) osc.amp(0,0.25);
    }
    playing = !playing

}

function update() {
    if (mouseIsPressed) {
        background(255);
        const division = height/6
        for (let osc = 0; osc < oscArray.length; osc++) {
            oscArray[osc].freq(sliderArray[osc].value());

            push()
            translate(0,(3+osc)*(division))
            let waveform = fftArray[osc].waveform();
            waveform.splice(0,waveform.indexOf(1))
            drawSineWave(waveform,division/3,colorPallet[osc]);
            pop()
        }
        drawCompositeWave(fftArray)
    }
}

function drawSineWave(waveform, amp, c) {
    stroke(200);
    strokeWeight(1);
    line(0, 0, width, 0);

    stroke(c[0],c[1],c[2],30);
    strokeWeight(2)

    for (let t = 0; t < waveform.length - 1; t ++) {
        const tScale = width / (waveform.length)
        line(t * tScale, amp * waveform[t], (t + 1) * tScale, amp * waveform[t + 1]);
    }

}

function drawCompositeWave(_fftArray){
    let sumOfWaves = Array(1024).fill(0)

    for(let osc = 0; osc < _fftArray.length; osc++){
        let thisWaveform = _fftArray[osc].waveform()
        thisWaveform.splice(0,thisWaveform.indexOf(1))
        for(let t = 0; t < thisWaveform.length; t++){
            sumOfWaves[t] += thisWaveform[t];
        }
    }

    push()
    translate(0,height/4)
    stroke(200);
    strokeWeight(1);
    line(0, 0, width, 0);

    stroke(100);
    strokeWeight(2)

    for (let t = 0; t < sumOfWaves.length - 1; t ++) {
        const tScale = width / (sumOfWaves.length/2)
        line(t * tScale, 20 * sumOfWaves[t], (t + 1) * tScale, 20 * sumOfWaves[t + 1]);
    }
    pop()
}
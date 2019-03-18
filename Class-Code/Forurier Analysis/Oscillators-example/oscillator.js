class visualizer{
    constructor(){
        this.slider = createSlider(500,1000,500);
        this.osc = new p5.Oscillator;
        this.osc.setType('sine');
        this.osc.freq(this.slider.value());
        this.osc.amp(1);
        this.analyzer = new p5.FFT();
        this.analyzer.setInput(this.osc)
        this.waveform = this.analyzer.waveform();
    
        this.slider.mouseMoved(this.updateWaveform)

        //this.start();
    }

    getWaveform(){
        return this.analyzer.waveform();
    }

    setFreq(_freq){
        this.osc.freq(_freq)
    }

    start(){
        this.osc.start();
    }

    stop(){
        this.osc.stop();
    }

    updateWaveform(){
        this.osc.freq(this.slider.value());
    }
}
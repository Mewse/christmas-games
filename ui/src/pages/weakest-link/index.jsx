import React from "react";
import WeakestLinkScoreTracker from "../../components/weakest-link-score-tracker";

import "./style.scss";

class WeakestLink extends (React.Component){
    state = {
        scoreOptions: [1000,800,600,450,300,200,100,50,20],
        selectedOption: 20,
        total: 0,
        pot: 0,
        timer: 180
    }
    introAudio = new Audio("/sfx/weakest-link-pre-round.mp3");
    roundStartAudio = new Audio("/sfx/weakest-link-round-start.mp3");
    roundMusicAudio = new Audio("/sfx/weakest-link-round-music.mp3");

    componentDidMount() {
        window.game = this;
        this.listener = document.addEventListener("keypress", (e) => {
            if (e.code === "Period") {
                this.inc();
            }
            if (e.code === "Comma") {
                this.dec();
            }
            if (e.code === "Enter") {
                this.bank();
            }
            if (e.code === "KeyR") {
                this.reset();
            }
            if (e.code === "KeyI") {
                this.intro();
            }
            if (e.code === "KeyS") {
                this.startTimer();
            }
            if (e.code === "Minus") {
                this.decTimer();
            }
            if (e.code === "Equal") {
                this.incTimer();
            }
            if (e.code === "KeyF") {
                this.wrong();
            }
            if (e.code === "KeyP") {
                this.endRound();
            }
        })
    }

    componentWillUnmount() {
        document.removeEventListener("keypress", this.listener);
    }

    render = () => {
        return (
            <div className="weakest-link-board">
                <WeakestLinkScoreTracker 
                    scoreOptions={this.state.scoreOptions}
                    selectedOption={this.state.selectedOption}
                    total={this.state.total}
                />
                <div className="sidebar">
                    <div className="timer-container">
                        <div className="timer">{this.renderTime()}</div>
                    </div>
                    <div className="image-container">
                        <img src="/images/anne.png" />
                    </div>
                    <div className="pot-container">
                        <div className="pot">Total: £{this.state.pot}</div>
                    </div>
                </div>
                
            </div>
        );
    }

    renderTime() {
        const minutes = Math.floor(this.state.timer / 60);
        const seconds = this.state.timer % 60 || 0;
        return `${minutes}:${String(seconds).padStart(2,"0")}`;
    }

    inc() {
        const curr = this.state.scoreOptions.indexOf(this.state.selectedOption);
        if (curr > 0) {
            this.setState({selectedOption: this.state.scoreOptions[curr-1]})
        } else {
            this.completeRound();
        }
    }

    dec() {
        const curr = this.state.scoreOptions.indexOf(this.state.selectedOption);
        if (curr < this.state.scoreOptions.length) {
            this.setState({selectedOption: this.state.scoreOptions[curr+1]})
        } 
    }

    bank() {
        const curr = this.state.scoreOptions.indexOf(this.state.selectedOption);
        if (curr !== this.state.scoreOptions.length-1) {
            const prev = this.state.scoreOptions[curr+1];
            if (this.state.total + prev >= 1000) {
                this.completeRound();
            } else {
                this.setState({total: this.state.total + prev, selectedOption: this.state.scoreOptions[this.state.scoreOptions.length-1]});
            }
        } 
        
    }

    completeRound() {
        this.roundMusicAudio.currentTime = 178;
        this.setState({
            total: 1000, 
            selectedOption: this.state.scoreOptions[this.state.scoreOptions.length-1],
            timer: 0
        });
    }

    endRound() {
        this.setState({
            pot: this.state.pot + this.state.total,
            total: 0
        });
    }
    
    wrong() {
        this.setState({
            selectedOption: this.state.scoreOptions[this.state.scoreOptions.length-1]
        });
    }

    setTimer(seconds) {
        this.setState({
            timer: seconds
        });
    }

    decTimer(seconds=5) {
        this.setState({timer: this.state.timer - seconds});
    }

    incTimer(seconds=5) {
        this.setState({timer: this.state.timer + seconds});
    }

    async startTimer() {
        this.roundStartAudio.play();
        await this.sleep(1500);
        const musicOffset = 180-this.state.timer;
        this.roundMusicAudio.currentTime = musicOffset;
        this.roundMusicAudio.play();
        await this.countdown();
    }

    intro() {
        this.introAudio.play();
    }

    reset() {
        this.setState({
            selectedOption: this.state.scoreOptions[this.state.scoreOptions.length-1],
            total: 0,
            timer: 180
        });
    }

    async countdown() {
        while (this.state.timer > 0) {
            await this.sleep(1000);
            this.setState(prevState => {
                if (prevState.timer > 0) {
                    return {timer: prevState.timer - 1}
                } else {
                    return {timer: 0}
                }
            });
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}



export default WeakestLink;
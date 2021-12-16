import React from "react";
import WeakestLinkScoreTracker from "../../components/weakest-link-score-tracker";

import "./style.scss";

class WeakestLink extends (React.Component){
    state = {
        scoreOptions: [1000,800,600,450,300,200,100,50,20],
        selectedOption: 1000,
        total: 0,
        pot: 2345,
        timer: 180
    }
    introAudio = new Audio("/sfx/weakest-link-pre-round.mp3");
    roundStartAudio = new Audio("/sfx/weakest-link-round-start.mp3");
    roundMusicAudio = new Audio("/sfx/weakest-link-round-music.mp3");

    componentDidMount() {
        window.game = this;
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
            this.setState({total: this.state.total + prev, selectedOption: this.state.scoreOptions[this.state.scoreOptions.length-1]});
        } 
    }

    endRound() {
        this.setState({
            pot: this.state.pot + this.state.total
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

    async startTimer() {
        this.roundStartAudio.play();
        await this.sleep(2600);
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
        });
    }

    async countdown() {
        while (this.state.timer > 0) {
            await this.sleep(1000);
            this.setState(prevState => ({
                timer: prevState.timer - 1
            }));
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}



export default WeakestLink;
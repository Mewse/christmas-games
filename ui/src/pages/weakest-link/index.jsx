import React from "react";
import WeakestLinkScoreTracker from "../../components/weakest-link-score-tracker";
import WeakestLinkSuddenDeath from "../../components/weakest-link-sudden-death";

import "./style.scss";

class WeakestLink extends (React.Component){
    state = {
        scoreOptions: [1000,800,600,450,300,200,100,50,20],
        selectedOption: 20,
        total: 0,
        pot: 0,
        timer: 180,
        showHeadToHead: false,
        p1Name: "Player 1",
        p2Name: "Player 2",
        p1Answers: [null, null, null, null, null],
        p2Answers: [null, null, null, null, null],
        player1Turn: true,
        headToHeadQuestionId: 0
    }
    introAudio = new Audio("/sfx/weakest-link-pre-round.mp3");
    roundStartAudio = new Audio("/sfx/weakest-link-round-start.mp3");
    roundMusicAudio = new Audio("/sfx/weakest-link-round-music.mp3");

    componentDidMount() {
        window.game = this;
        this.handleKeypress = this.handleKeypress.bind(this);
        this.roundMusicAudio.volume = 0.1;
        this.roundStartAudio.volume = 0.1;
        this.introAudio.volume = 0.1;
        this.listener = document.addEventListener("keypress", this.handleKeypress)
    }

    componentWillUnmount() {
        document.removeEventListener("keypress", this.listener);
        window.game = null;
    }

    handleKeypress(e) {
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
        if (e.code === "KeyT") {
            this.toggleHeadToHead();
        }
        if (e.code === "KeyY") {
            this.headToHeadAnswer(true);
        }
        if (e.code === "KeyN") {
            this.headToHeadAnswer(false);
        }
    }

    render = () => {
        return (
            <div className="weakest-link-board">
                {this.state.showHeadToHead ? (
                    <WeakestLinkSuddenDeath 
                        p1Answers={this.state.p1Answers} 
                        p2Answers={this.state.p2Answers} 
                        p1Name={this.state.p1Name}
                        p2Name={this.state.p2Name}
                        player1Turn={this.state.player1Turn}
                        questionId={this.state.headToHeadQuestionId}
                    />
                ) : (
                    <WeakestLinkScoreTracker 
                        scoreOptions={this.state.scoreOptions}
                        selectedOption={this.state.selectedOption}
                        total={this.state.total}
                    />
                )}
                <div className="sidebar">
                    <div className="timer-container">
                        {this.state.showHeadToHead ? "": (<div className="timer">{this.renderTime()}</div>)}
                    </div>
                    <div className="image-container">
                        <img alt="dave robinson" src="/images/anne.png" />
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
            this.setState({
                selectedOption: this.state.scoreOptions[this.state.scoreOptions.length-1],
                total: this.state.total + 1000, 
            })
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
            // if (this.state.total + prev >= 1000) {
            //     // this.completeRound();
            //     this.setState({
            //         total: this.state.total + prev, 
            //         selectedOption: this.state.scoreOptions[0]
            //     })
            // } else {
            this.setState({total: this.state.total + prev, selectedOption: this.state.scoreOptions[this.state.scoreOptions.length-1]});
            // }
        } 
        
    }

    headToHeadAnswer(isCorrect) {
        if (this.state.player1Turn) {
            let answers = [...this.state.p1Answers];
            answers[this.state.headToHeadQuestionId] = isCorrect
            this.setState({
                p1Answers: answers,
                player1Turn: false
            });
        } else {
            let answers = [...this.state.p2Answers];
            answers[this.state.headToHeadQuestionId] = isCorrect
            this.setState({
                p2Answers: answers,
                player1Turn: true,
                headToHeadQuestionId: this.state.headToHeadQuestionId + 1
            });
        }
    }
    

    getNextHeadToHead() {
        const pos1 = this.state.p1Answers.find(null)
        const pos2 = this.state.p2Answers.find(null)
        if (pos1 <= pos2) {
            this.setState({
                player1Turn: true,
                headToHeadQuestionId: pos1
            });
        } else {
            this.setState({
                player1Turn: false,
                headToHeadQuestionId: pos2
            });
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
            timer: 180,
            p1Answers: [null, null, null, null, null],
            p2Answers: [null, null, null, null, null],
            headToHeadQuestionId: 0,
            player1Turn: true,
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

    toggleHeadToHead() {
        this.setState({
            showHeadToHead: !this.state.showHeadToHead
        });
    }

    setPlayerName(playerId, name) {
        if (playerId === 0) {
            this.setState({
                p1Name: name
            });
        } else {
            this.setState({
                p2Name: name
            });
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}



export default WeakestLink;
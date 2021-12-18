import React from "react";

import "./style.scss";
import TenableTower from "../../components/tenable-tower";
import rounds from "./questions";

class Tenable extends React.Component {
    state = {
        answers: rounds[0].answers,
        answered: ["Partridge in a pear tree"],
        prompt: rounds[0].prompt,
        fail: false,
        highlight: null
    }
    
    stepSounds = [
        new Audio("/sfx/tenable-step-1.mp3"),
        new Audio("/sfx/tenable-step-2.mp3"),
        new Audio("/sfx/tenable-step-3.mp3"),
        new Audio("/sfx/tenable-step-4.mp3"),
        new Audio("/sfx/tenable-step-5.mp3"),
        new Audio("/sfx/tenable-step-6.mp3"),
        new Audio("/sfx/tenable-step-7.mp3"),
        new Audio("/sfx/tenable-step-8.mp3"),
        new Audio("/sfx/tenable-step-9.mp3"),
    ]
    correctSound = new Audio("/sfx/tenable-correct-answer.mp3");
    failSound = new Audio("/sfx/tenable-incorrect-answer.mp3");
    roundCompleteSound = new Audio("/sfx/tenable-round-complete.mp3");

    componentDidMount() {
        window.game = this;
        this.handleKeypress = this.handleKeypress.bind(this);
        this.roundCompleteSound.volume = 0.5;
        document.addEventListener("keypress", this.handleKeypress)
    }

    componentWillUnmount() {
        document.removeEventListener("keypress", this.handleKeypress);
    }

    handleKeypress(e) {
        if (e.code === "KeyF") {
            this.showIncorrect();
        }
        if (e.keyCode >= 48 && e.keyCode <= 57) {
            let index = Number(e.key) - 1;
            if (index === -1) {
                index = 9
            }
            this.showCorrect(index);
        }
        if (e.code === "KeyR") {
            this.reset();
        }
    }

    render() {
        return (
            <div className={`tenable-board ${this.state.fail ? "fail" : ""} ${this.state.complete ? "complete" : ""}`}>
                <TenableTower 
                    answers={this.state.answers}
                    answered={this.state.answered}
                    fail={this.state.fail}
                    complete={this.state.complete}
                    highlight={this.state.highlight}
                />
                <div className="prompt">{this.state.prompt}</div>
            </div>
        );
    }

    setHighlight(index) {
        this.setState({
            highlight: index
        });
    }

    getLowestUnanswered() {
        let lowest = 0;
        this.state.answers.every((answer, id) => {
            if (!this.state.answered.includes(answer.answer)) {
                lowest = id;
                return false;
            }
            return true;
        })
        return lowest;
    }

    async showIncorrect() {
        const lowestUnanswered = this.getLowestUnanswered()
        await this.stepToIndex(lowestUnanswered, lowestUnanswered);
        this.failSound.play();
        this.setState({
            fail: true
        })
        await this.sleep(2000);
        this.setState({
            fail: false, 
            highlight: null
        });
    }

    async showCorrect(index) {
        await this.stepToIndex(index+1);
        this.correctSound.play();
        if (this.state.answered.length + 1 === this.state.answers.length) {
            this.roundCompleteSound.play();
            this.setState({
                answered: this.state.answered.concat(this.state.answers[index].answer),
                highlight: null,
                complete: true
            })
        } else {
            this.setState({
                answered: this.state.answered.concat(this.state.answers[index].answer),
                highlight: null,
            })
        }
    }

    async stepToIndex(index, failIndex=null) {
        for (let i = this.state.answers.length-1; i >= index; i--) {
            this.setHighlight(i);
            if (i > 0 && i !== failIndex) {
                this.stepSounds[this.state.answers.length - (i+1)].play();
                await this.sleep(800);
            }
        }
    }

    setRound(roundId) {
        if (rounds.length > roundId) {
            this.setState({ 
                answers: rounds[roundId].answers,
                prompt: rounds[roundId].prompt,
                answered: [],
                highlight: null,
                fail: false,
                complete: false
            });
        } else {
            console.log("That round id doesnt exist");
        }
    }

    reset() {
        this.setState({
            highlight: null,
            fail: false,
            complete: false
        });
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

export default Tenable;
import React from "react";

import "./style.scss";
import TenableTower from "../../components/tenable-tower";

class Tenable extends React.Component {
    state = {
        answers: ["1","2","3","4","5","6","7","8","9","10"],
        answered: ["2", "7", "8"],
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
    failSound = new Audio("/src/tenable-fail.mp3");

    componentDidMount() {
        window.game = this;
        this.listener = document.addEventListener("keypress", (e) => {
            if (e.code === "KeyF") {
                this.showIncorrect();
            }
            if (e.keyCode >= 48 && e.keyCode <= 57) {
                const index = Number(e.key);
                this.showCorrect(index);
            }
        })
    }

    componentWillUnmount() {
        document.removeEventListener("keypress", this.listener);
    }

    render() {
        return (
            <div className="tenable-board">
                <TenableTower 
                    answers={this.state.answers}
                    answered={this.state.answered}
                    fail={this.state.fail}
                    highlight={this.state.highlight}
                />
            </div>
        );
    }

    setHighlight(index) {
        this.setState({
            highlight: index
        });
    }

    async showIncorrect() {
        await this.stepToIndex(0);
        this.failSound.play();
        this.setState({
            highlight: null,
            fail: true
        })
    }

    async showCorrect(index) {
        await this.stepToIndex(index+1);
        this.correctSound.play();
        this.setState({
            answered: this.state.answered.concat(this.state.answers[index]),
            highlight: null,
        })
    }

    async stepToIndex(index) {
        for (let i = this.state.answers.length-1; i >= index; i--) {
            this.setHighlight(i);
            this.stepSounds[this.state.answers.length - (i+1)].play();
            await this.sleep(800);
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

export default Tenable;
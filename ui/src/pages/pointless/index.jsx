import React from "react"
import confetti from "canvas-confetti";
import PointlessTower from "../../components/pointless-tower";
import PointlessAnswerGrid from "../../components/pointless-answer-grid";
import "./style.scss";
import {rounds} from "./questions";

const TOWER_HEIGHT = 100;

class Pointless extends(React.Component) {
    state = {
        teams: [
            {
                name: "Team 1",
                score: 0,
                roundScore: 0
            },
            {
                name: "Team 2",
                score: 0,
                roundScore: 0
            },
            {
                name: "Team 3",
                score: 0,
                roundScore: 0
            }
        ],
        tower: {
            height: TOWER_HEIGHT,
            level: TOWER_HEIGHT,
            target: null,
            failed: false
        },
        countdownTarget: null,
        showTower: false,
        selectedRound: 0,
        answers: rounds[0].answers,
        answered: [],
        prompt: rounds[0].prompt,
        type: rounds[0].type,
        selectedAnswer: null,
        selectedTeam: null,
    }
    incorrectAudio = new Audio("/sfx/pointless-incorrect.mp3");
    targetReachedAudio = new Audio("/sfx/pointless-target-reached.mp3");
    correctAnswer = new Audio("/sfx/pointless-correct-answer.mp3");
    answerEnd = new Audio("/sfx/pointless-answer-end.mp3");
    pointlessAnswer = new Audio("/sfx/pointless-pointless-answer.mp3");
    componentDidMount() {
        window.game = this;
        this.targetReachedAudio.volume = 0.1;
        this.answerEnd.volume = 0.5;
        this.pointlessAnswer.volume = 0.1;

        this.listener = document.addEventListener("keypress", (e) => {
            // Board controls
            if (e.code === "KeyY") {
                this.reveal();
            }
            if (e.code === "KeyR") {
                this.reset();
            }
            if (e.code === "KeyF") {
                this.fail();
            }
            if (e.code === "KeyT") {
                this.toggleTower();
            }
            if (e.code === "Space") {
                this.toggleAnswer();
            }

            // Reset scores
            if (e.code === "KeyZ") {
                this.resetScores();
            }

            // Round Selection
            if (e.code === "Comma") {
                this.setRound(this.state.selectedRound-1);
            }
            if (e.code === "Period") {
                this.setRound(this.state.selectedRound+1);
            }

            // Team selection
            if (e.code === "KeyQ") {
                this.selectTeam(0)
            }
            if (e.code === "KeyW") {
                this.selectTeam(1)
            }
            if (e.code === "KeyE") {
                this.selectTeam(2)
            }

            // Answer selection
            if (e.keyCode >= 48 && e.keyCode <= 57) {
                let index = Number(e.key) - 1;
                if (index === -1) {
                    index = 9
                }
                this.selectAnswer(index);
            }
        })
    }

    componentWillUnmount() {
        document.removeEventListener("keypress", this.listener);
        window.game = null;
    }

    render() {
        return (
            <div className="pointless-board">
                
                <div className="players">
                    <h1>Teams</h1>
                    <div className="teams-container">
                        {this.state.teams.map((team, id) => (
                            <div key={id} className={`team-container ${id === this.state.selectedTeam ? "selected": ""}`}>
                                <h2>{team.name}</h2>
                                <h3>Score: {team.score}</h3>
                                <div className="score-container">
                                    {Array(team.roundScore).fill().map((_, score) => (
                                        <div key={score} className="score-icon">&nbsp;</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {this.state.showTower ? (
                    <div className="tower-container">
                        <PointlessTower 
                            level={this.state.tower.level} 
                            target={this.state.tower.target} 
                            height={this.state.tower.height}
                            overridePrompt={this.state.tower.override}
                            failed={this.state.tower.failed}
                        />
                    </div>        
                ) : (
                    <div className="round-container">
                        <PointlessAnswerGrid 
                            type={this.state.type}
                            answers={this.state.answers} 
                            answered={this.state.answered} 
                            prompt={this.state.prompt}
                            selectedAnswer={this.state.selectedAnswer}
                        />
                    </div>
                )}
            </div>
        )
    }

    async countDown(target) {
        this.correctAnswer.play();
        for (let i = 100; i > target; i--) {
            if (i === this.state.tower.target) {
                this.targetReachedAudio.play();
            }
            this.decrementTower();
            await this.sleep(50);
        }
        if (target === 0) {
            this.pointlessAnswer.play()
            confetti({
                origin: {x: 0, y: 1},
                angle: 45,
                velocity: 100,
                particleCount: 150
            });
            await this.sleep(100);
            confetti({
                origin: {x: 1, y: 0.5},
                angle: 180,
                velocity: 100,
                particleCount: 150
            });
            await this.sleep(100);
            confetti({
                origin: {x: 1, y: 1},
                angle: 125,
                velocity: 100,
                particleCount: 150
            });
            await this.sleep(100);
            confetti({
                origin: {x: 0.25, y: 1},
                angle: 65,
                velocity: 100,
                particleCount: 150
            });
        } else {
            this.answerEnd.play();
            this.correctAnswer.pause();
            this.correctAnswer.currentTime = 0;
        }
        
    }

    fail() {
        let teams = [...this.state.teams];
        if (this.state.selectedTeam !== null) {
            teams[this.state.selectedTeam].score += 100;
        }
        this.setState({
            tower: {
                override: "X",
                level: TOWER_HEIGHT,
                height: this.state.tower.height,
                target: null,
                failed: true
            },
            teams: teams
        });
        this.incorrectAudio.play();
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    toggleTower() {
        this.setState({
            showTower: !this.state.showTower
        });
    }

    decrementTower(){
        this.setState((prevState) => ({
            tower: {
                level: prevState.tower.level - 1,
                height: this.state.tower.height,
                target: this.state.tower.target
            }
        }))
    }

    reset() {
        this.setState({
            tower: {
                level: TOWER_HEIGHT,
                target: null,
                height: this.state.tower.height,
                failed: false
            },
            selectedTeam: null,
            selectedAnswer: null,
            showTower: false,
            countdownTarget: null
        });
    }

    setTarget(target) {
        this.setState({
            tower: {
                level: TOWER_HEIGHT,
                target: target,
                height: this.state.tower.height,
                failed: false
            }
        });
    }

    addTeam(name) {
        this.setState({
            teams: this.state.teams.append({name: name, score: 0, roundScore: 0})
        })
    }

    toggleAnswer() {
        if (!this.state.answered.includes(this.state.selectedAnswer)) {
            this.setAnswered(this.state.selectedAnswer);
        } else {
            this.setUnanswered(this.state.selectedAnswer);
        }
    }

    setUnanswered(answerId) {
        this.setState({
            answered: this.state.answered.filter(answer => answer !== answerId)
        });
    }

    setAnswered(answerId) {
        this.setState({
            answered: this.state.answered.concat(answerId)
        });
    }

    addScore(playerId, score) {
        if (playerId <= this.state.teams.length) {
            let teams = [...this.state.teams];
            teams[playerId].score = teams[playerId].score + score;
            this.setState({
                teams: teams
            });
        }
    }

    addRoundScore(playerId) {
        if (playerId <= this.state.teams.length) {
            let teams = [...this.state.teams];
            teams[playerId].roundScore = teams[playerId].roundScore + 1;
            this.setState({
                teams: teams
            });
        }
    }

    subRoundScore(playerId) {
        if (playerId <= this.state.teams.length) {
            let teams = [...this.state.teams];
            teams[playerId].roundScore = teams[playerId].roundScore - 1;
            this.setState({
                teams: teams
            });
        }
    }

    resetScores() {
        let teams = [...this.state.teams];
        teams.forEach(team => {
            team.score = 0
        })
        this.setState({
            teams: teams
        });
    }
 
    setRound(roundId) {
        if (roundId < rounds.length && roundId >= 0) {
            let teams = [...this.state.teams];
            if (this.state.selectedTeam !== null && this.state.selectedTeam >= 0 && this.state.selectedTeam < this.state.teams.length) {
                teams[this.state.selectedTeam].roundScore += 1;
            }
            this.setState({
                answers: rounds[roundId].answers,
                prompt: rounds[roundId].prompt,
                type: rounds[roundId].type,
                selectedRound: roundId,
                answered: [],
                teams: teams
            });
        }
    }

    selectTeam(teamId) {
        if (teamId === this.state.selectedTeam) {
            this.setState({
                selectedTeam: null
            });
        } else {
            this.setState({
                selectedTeam: teamId
            });
        }
    }

    selectAnswer(answerId) {
        if (answerId === this.state.selectedAnswer) {
            this.setState({
                selectedAnswer: null
            });
        } else {
            this.setState({
                selectedAnswer: answerId
            });
        }
    }

    async reveal() {
        if (this.state.selectedTeam !== null && this.state.selectedAnswer !== null) {
            await this.countDown(this.state.answers[this.state.selectedAnswer].count);
            let teams = [...this.state.teams];
            teams[this.state.selectedTeam].score += this.state.answers[this.state.selectedAnswer].count;
            this.setState({
                answered: this.state.answered.concat(this.state.selectedAnswer),
                teams: teams,
                selectedAnswer: null,
                selectedTeam: null,
            });
        } else {
            console.log("Missing team or answer selection");
        }
    }

    applyScore() {

    }
}

export default Pointless;
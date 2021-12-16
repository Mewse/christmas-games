import React from "react"
import confetti from "canvas-confetti";
import PointlessTower from "../../components/pointless-tower";
import "./style.scss";

const TOWER_HEIGHT = 100;

class Pointless extends(React.Component) {
    state = {
        teams: [
            {
                name: "Sam, Katie & Mary",
                score: 42,
                roundScore: 0
            },
            {
                name: "Mike, Jill & Liz",
                score: 12,
                roundScore: 1
            },
            {
                name: "Vija, Nick and Adam",
                score: 121,
                roundScore: 2
            }
        ],
        tower: {
            height: TOWER_HEIGHT,
            level: TOWER_HEIGHT,
            target: 32,
            failed: false
        },
        showTower: true,
        selectedRound: null,
        rounds: {
            "1": {
                "type": "text",
                "answers": [
                    {
                        "prompt": "",
                        "count": 2
                    }
                ]
            },
            "2": {
                "type": "picture",
                "answers": [
                    {
                        "url": "",
                        "count": 2
                    }
                ]
            }
        }
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
    }

    render = () => {
        return (
            <div className="pointless-board">
                
                <div className="players">
                    <h1>Teams</h1>
                    <div className="teams-container">
                        {this.state.teams.map(team => (
                            <div className="team-container">
                                <h2>{team.name}</h2>
                                <h3>Score: {team.score}</h3>
                                <div className="score-container">
                                    {Array(team.roundScore).fill().map((_, score) => (
                                        <div className="score-icon">&nbsp;</div>
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
        this.setState({
            tower: {
                override: "X",
                level: TOWER_HEIGHT,
                height: this.state.tower.height,
                target: null,
                failed: true
            }
        })
        this.incorrectAudio.play();
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
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
                height: this.state.tower.height
            }
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

    addTeam = (name) => {
        this.setState({
            teams: this.state.teams.append({name: name, score: 0, roundScore: 0})
        })
    }
}

export default Pointless;
import React from "react"

import PointlessTower from "../../components/pointless-tower";
import "./style.scss";

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
            height: 100,
            level: 100,
            target: 32
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
    componentDidMount() {
        window.game = this;
        this.targetReachedAudio.volume = 0.1;
        this.answerEnd.volume = 0.5;
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
                        <PointlessTower level={this.state.tower.level} target={this.state.tower.target} height={this.state.tower.height}/>
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
        this.answerEnd.play();
        this.correctAnswer.pause();
        this.correctAnswer.currentTime = 0;
    }

    fail() {
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
                level: 100,
                target: null,
                height: this.state.tower.height
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
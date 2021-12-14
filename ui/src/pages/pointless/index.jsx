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
    componentDidMount() {
        window.game = this;
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
                <div className="tower-container">
                    <PointlessTower level={this.state.tower.level} target={this.state.tower.target} height={this.state.tower.height}/>
                </div>        
            </div>
        )
    }

    async countDown(target) {
        for (let i = 100; i > target; i--) {
            this.decrementTower();
            await this.sleep(50);
        }
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
            teams: this.state.teams.append({name: name, score: 0})
        })
    }
}

export default Pointless;
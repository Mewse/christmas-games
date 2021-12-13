import React from "react"

class Pointless extends(React.Component) {
    state = {
        teams: [],
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
    render = () => {
        return (
            <div className="pointless-board">
                Pointless
                <div className="players">
                    {this.state.teams.map(team => (
                        <div>
                            {team.name} : {team.score}
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    addTeam = (name) => {
        this.setState({
            teams: this.state.teams.append({name: name, score: 0})
        })
    }
}

export default Pointless;
import React from "react";

import "./style.scss";
import TenableTower from "../../components/tenable-tower";

class Tenable extends React.Component {
    state = {
        answers: ["1","2","3","4","5","6","7","8","9","10"],
        answered: [],
        fail: false
    }
    
    componentDidMount() {
        window.game = this;
        document.addEventListener("keypress", (e) => {
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

    }

    render() {
        return (
            <div className="tenable-board">
                <TenableTower 
                    answers={this.state.answers}
                    answered={this.state.answered}
                    fail={this.state.fail}
                />
            </div>
        );
    }

    showIncorrect() {

    }

    showCorrect(index) {

    }
}

export default Tenable;
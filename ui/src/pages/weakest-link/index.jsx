import React from "react";
import WeakestLinkScoreTracker from "../../components/weakest-link-score-tracker";

import "./style.scss";

class WeakestLink extends (React.Component){
    state = {
        scoreOptions: [1000,800,600,450,300,200,100,50,20],
        selectedOption: 1000,
        total: 0
    }

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
                <img src="/images/anne.png" />
            </div>
        );
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
}



export default WeakestLink;
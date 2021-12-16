import "./style.scss";

const WeakestLinkScoreTracker = (props) => {
    let {scoreOptions, selectedOption, total} = props;
    let optionId = null;
    return (
        <div className="score-tracker">
            <div className="options">
                {scoreOptions.map((option, id) => {
                    if (option === selectedOption) optionId = id;
                    return (
                        <div className="option-container">
                            <div key={id} 
                                style={{zIndex: scoreOptions.length - id, marginBottom: optionId !== null && id > optionId ? -50*(scoreOptions.length - id) : 0 }}
                                className={`score-option ${selectedOption === option ? "selected": ""} ${id === 0 ? "highlight": ""} ${optionId !== null && id > optionId ? "passed" : ""}`}>
                                £{option}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="bank-container">
                <div className="bank">
                    £{total}
                </div>
                <h1>BANK</h1>
            </div>
            
        </div>
    )
}

export default WeakestLinkScoreTracker;
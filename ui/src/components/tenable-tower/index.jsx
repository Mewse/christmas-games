import "./style.scss";

const TenableTower = (props) => {
    let {answers, answered, fail, highlight} = props;
    return (
        <div className={`tenable-tower ${fail ? "fail": ""}`}>
            <div className="answer-container answer-clip">
                {answers.map((answer, id) => (
                    <div 
                        style={{width: 300+ 60*(id+1)}}
                        className={`answer ${answered.includes(answer) ? "answered": ""} ${highlight === id ? "highlight": ""}`}>
                            {answer}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TenableTower;
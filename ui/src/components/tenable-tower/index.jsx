import "./style.scss";

const TenableTower = (props) => {
    let {answers, answered, fail, highlight} = props;
    return (
        <div className={`tenable-tower`}>
            <div className="answer-container answer-clip">
                {answers.map((answer, id) => (
                    <div key={id} 
                        style={{width: 300+ 60*(id+1), fontSize: answered.includes(answer.answer) ? answer.fontSize : "1.5vw"}}
                        className={`answer ${answered.includes(answer.answer) ? "answered": ""} ${highlight === id ? "highlight": ""}  ${fail ? "fail": ""}`}>
                            {answered.includes(answer.answer) ? answer.answer : String(id+1)}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TenableTower;
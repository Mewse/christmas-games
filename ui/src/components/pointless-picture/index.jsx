

const PointlessPicture = (props) => {
    const {src, answer, count, answered, selected} = props;
    return (
        <div className={`picture-answer ${selected ? "selected": ""}`}>
            <img alt="answer" src={src}/>
            <div className="answer-bar">
                <div className="prompt">{answered ? answer : ""}</div>
                <div className="count">{answered ? count : ""}</div>
            </div>
        </div>
    )
}

export default PointlessPicture;
import React from "react";


const PointlessPicture = (props) => {
    const {src, answer, count, answered, selected} = props;
    return (
        <div className="picture-answer">
            <div className={`picture ${selected ? "selected": ""}`}>
                <img alt="answer" src={src}/>
            </div>
            <div className="answer-bar">
                <div className="prompt">{answered ? answer : ""}</div>
                <div className="count">{answered ? count : ""}</div>
            </div>
        </div>
    )
}

export default PointlessPicture;
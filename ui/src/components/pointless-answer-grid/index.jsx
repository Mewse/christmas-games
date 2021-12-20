import { TYPES } from "../../pages/pointless/questions";
import "./style.scss";
import PointlessPicture from "../pointless-picture";

const PointlessAnswerGrid = (props) => {
    let {answers, answered, prompt, type, selectedAnswer} = props;
    return (
         <div className="pointless-answers-grid">
             {type === TYPES.PICTURE ? (
                 <div className="picture-container">
                     <div className="picture-row">
                        <div className="picture-prompt">{prompt}</div>
                        <PointlessPicture {...answers[0]} answered={answered.includes(0)} selected={selectedAnswer === 0}/>
                        <PointlessPicture {...answers[1]} answered={answered.includes(1)} selected={selectedAnswer === 1}/>
                     </div>
                     <div className="picture-row">
                        <PointlessPicture {...answers[2]} answered={answered.includes(2)} selected={selectedAnswer === 2}/>
                        <PointlessPicture {...answers[3]} answered={answered.includes(3)} selected={selectedAnswer === 3}/>
                        <PointlessPicture {...answers[4]} answered={answered.includes(4)} selected={selectedAnswer === 4}/>
                     </div>
                 </div>
             ) : (
                <div className="answer-container">
                    <div className="title-prompt">
                        {prompt}
                    </div>
                    {answers.map((answer, id) => (
                        <div key={id} className={`answer ${selectedAnswer === id ? "selected": ""}`}>
                            <div className="prompt">{answer.prompt}</div>
                            <div className="count">{answered.includes(id) ? answer.count : ""}</div>
                            <div className="answer-answer">{answered.includes(id) ? answer.answer : ""}</div>
                        </div>  
                    ))}
                </div>
             )}
         </div>
    )
}

export default PointlessAnswerGrid;
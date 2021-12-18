import { TYPES } from "../../pages/pointless/questions";
import "./style.scss";

const PointlessAnswerGrid = (props) => {
    let {answers, answered, prompt, type} = props;
    return (
         <div className="pointless-answers-grid">
             {type === TYPES.PICTURE ? (
                 <div className="picture-container">
                     <div className="picture-row">
                        <div className="picture-prompt">{prompt}</div>
                        <div className="picture-answer">
                            <img alt="answer" src={answers[0].src}/>
                            <div className="answer-bar">
                                <div className="prompt">{answered.includes(0) ? answers[0].answer : ""}</div>
                                <div className="count">{answered.includes(0) ? answers[0].count : ""}</div>
                            </div>
                        </div>
                        <div className="picture-answer">
                            <img alt="answer" src={answers[1].src}/>
                            <div className="answer-bar">
                                <div className="prompt">{answered.includes(1) ? answers[1].answer : ""}</div>
                                <div className="count">{answered.includes(1) ? answers[1].count : ""}</div>
                            </div>
                        </div>
                     </div>
                     <div className="picture-row">
                     <div className="picture-answer">
                            <img alt="answer" src={answers[2].src}/>
                            <div className="answer-bar">
                                <div className="prompt">{answered.includes(2) ? answers[2].answer : ""}</div>
                                <div className="count">{answered.includes(2) ? answers[2].count : ""}</div>
                            </div>
                        </div>
                        <div className="picture-answer">
                            <img alt="answer" src={answers[3].src}/>
                            <div className="answer-bar">
                                <div className="prompt">{answered.includes(3) ? answers[3].answer : ""}</div>
                                <div className="count">{answered.includes(3) ? answers[3].count : ""}</div>
                            </div>
                        </div>
                        <div className="picture-answer">
                            <img alt="answer" src={answers[4].src}/>
                            <div className="answer-bar">
                                <div className="prompt">{answered.includes(4) ? answers[4].answer : ""}</div>
                                <div className="count">{answered.includes(4) ? answers[4].count : ""}</div>
                            </div>
                        </div>
                     </div>
                 </div>
             ) : (
                <div className="answer-container">
                    <div className="title-prompt">
                        {prompt}
                    </div>
                    {answers.map((answer, id) => (
                        <div key={id} className="answer">
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
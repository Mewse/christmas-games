import "./style.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

const WeakestLinkSuddenDeath = (props) => {
    let { p1Answers, p2Answers, p1Name, p2Name, player1Turn, questionId} = props;

    return (
        <div className="head-to-head">
            <div className="answer-row">
                <div className="player-name">{p1Name}</div>
                {p1Answers.map((answer, id) => {
                    let icon = id;
                    let cls = "";
                    if (answer === true) {
                        icon = <FontAwesomeIcon icon={faCheck}/>;
                        cls = "correct played";
                    } else if (answer === false) {
                        icon = <FontAwesomeIcon icon={faTimes}/>;
                        cls = "wrong played";
                    } else {
                        icon = <span>{id+1}</span>;
                    }
                    return (
                        <div className={`answer ${cls} ${player1Turn && questionId === id ? "highlight": ""}`}>
                            {icon}
                        </div>
                    )
                })}
            </div><div className="answer-row">
                <div className="player-name">{p2Name}</div>
                {p2Answers.map((answer, id) => {
                    let icon = id;
                    let cls = "";
                    if (answer === true) {
                        icon = <FontAwesomeIcon icon={faCheck}/>
                        cls = "correct played";
                    } else if (answer === false) {
                        icon = <FontAwesomeIcon icon={faTimes}/>
                        cls = "wrong played";
                    } else {
                        icon = <span>{id+1}</span>;
                    }
                    return (
                        <div className={`answer ${cls} ${!player1Turn && questionId === id ? "highlight": ""}`}>
                            {icon}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WeakestLinkSuddenDeath;
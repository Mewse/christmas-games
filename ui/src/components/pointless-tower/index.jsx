import "./style.scss";

const PointlessTower = (props) => {
    const {height, level, target, overridePrompt, failed} = props;
    
    return (
        <div className="pointless-tower">
            <div className={`counter ${failed? "failed" : ""}`}><p className={`${failed? "spinner" : ""}`}>{overridePrompt ? overridePrompt : level}</p></div>
            <div className={`tower ${failed? "failed" : ""}`}>
                {Array(height).fill().map((_, id) => (
                    <div className={`level ${failed? "failed" : ""} ${target === (height-id) ? "target" : ""} ${level < (height-id) ? "hidden" : ""} ${level === height-id && level !== height ? "top": ""}`} 
                        key={height-id}
                    />
                ))}
            </div>
        </div>
    )
}

export default PointlessTower;
import "./style.scss";

const PointlessTower = (props) => {
    const {height, level, target} = props;
    
    return (
        <div className="pointless-tower">
            <div className="counter">{level}</div>
            <div className="tower">
                {Array(height).fill().map((_, id) => (
                    <div className={`level ${target === (height-id) ? "target" : ""} ${level < (height-id) ? "hidden" : ""} ${level === height-id ? "top": ""}`} 
                        key={height-id}
                        // style={{background: `linear-gradient(90deg, rgba(150,150,150,1) 0%, rgba(255,255,255,1) ${lerp(23, 42,id, height)}%, rgba(255,255,255,1) ${lerp(75, 45, id, height)}%, rgba(150,150,150,1) 100%)`}}
                    />
                ))}
            </div>
        </div>
    )
}

function lerp (start, end, currentStep, finalStep){
    // Current %
    const progress = currentStep / finalStep;
    let trip;
    if (end > start) {
        trip = end - start
    } else {
        trip = start -end;
    }
    const distance = start + (trip * progress);
    return distance;
  }
export default PointlessTower;
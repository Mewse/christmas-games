
const PointlessTower = (props) => {
    const {height, level, target} = props;
    
    return (
        <div className="pointless-tower">
            {Array(height).fill().map((_, id) => (
                <div className={`level ${target == id ? "target" : ""} ${level < id ? "hidden" : ""}`} key={id}/>
            ))}
        </div>
    )
}

export default PointlessTower;
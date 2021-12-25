import "./style.scss";

const PointlessCategoryGrid = (props) => {
    const {categories} = props;
    return (
        <div className="pointless-category-grid">
            {categories.map((cat, id) => (
                <div className="title-prompt category">
                    {cat}
                </div>
            ))}
        </div>
    )
}

export default PointlessCategoryGrid;
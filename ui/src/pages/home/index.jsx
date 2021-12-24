import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.scss";
import Tabletop from "tabletop";

const Home = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        Tabletop.init({
            key: "https://docs.google.com/spreadsheets/d/19g_Ku-CjmuQvPBzKDyLN3AFPpB8ucCxfGXUWxKwlOwY/edit#gid=0",
            simpleSheet: true
        })
        .then(data => setData(data))
        .catch(err => console.warn(err))
    }, [])
    
    return (
        <div className="home">
            <div className="game-bar">
                <Link to="/tenable">1</Link>
                <Link to="/weakest-link">2</Link>
                <Link to="/pointless">3</Link>
            </div>
        </div>
    )
}

export default Home;
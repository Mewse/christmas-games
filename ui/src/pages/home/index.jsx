import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.scss";
import Tabletop from "tabletop";
import _ from "underscore";
import ScoreTable from "../../components/score-table";

const Home = (props) => {

    const [data, setData] = useState([
        ["Tenable", 1, 5, 6, 19, 15, 20]
    ]);

    const [players, setPlayers] = useState([
        "adam", "liz", "mary", "vija", "nick"
    ]);

    useEffect(() => {
        Tabletop.init({
            key: "https://docs.google.com/spreadsheets/d/19g_Ku-CjmuQvPBzKDyLN3AFPpB8ucCxfGXUWxKwlOwY/edit#gid=0",
            simpleSheet: true
        })
        .then(data => setData(data))
        .catch(err => console.warn(err))
    }, [])
    
    return (
        <div className="home fullscreen-background">
            {_.range(100).map(i => <div class="snow"></div>)}
            <h1 className="site-title glow">Present Pursuit</h1>
            <ScoreTable players={players} data={data} />
            <div className="game-bar">
                <Link to="/tenable">1</Link>
                <Link to="/weakest-link">2</Link>
                <Link to="/pointless">3</Link>
            </div>
        </div>
    )
}

export default Home;
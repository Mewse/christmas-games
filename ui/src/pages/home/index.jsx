import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <div>
            <nav>
                <li>
                <Link to="/tenable">Tenable</Link>
                </li>
                <li>
                <Link to="/pointless">Pointless</Link>
                </li>
                <li>
                <Link to="/weakest-link">Weakest Link</Link>
                </li>
            </nav>
        </div>
    )
}

export default Home;
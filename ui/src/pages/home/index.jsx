import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <div>
            <nav>
                <li>
                <Link to="/tenable">About</Link>
                </li>
                <li>
                <Link to="/pointless">Users</Link>
                </li>
                <li>
                <Link to="/weakest-link">Users</Link>
                </li>
            </nav>
        </div>
    )
}

export default Home;
import { Link } from "react-router-dom";

const Homepage = () => {
    return (<>
        This is homepage.
        <nav>
            <ul>
                <li>
                    <Link to={`about`}>About</Link>
                </li>
                <li>
                    <Link to={`contact`}>Contact</Link>
                </li>
            </ul>
        </nav>
    </>);
}

export default Homepage;
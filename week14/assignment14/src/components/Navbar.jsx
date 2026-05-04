import { Link } from "react-router-dom";
function Navebar() {
    return (
        <nav className="navbar">
            <link to="/">Home</link>
            <link to="/about">About</link>
            <link to="/projects">Projects</link>
        </nav>
    );
}
export default Navbar;
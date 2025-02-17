import { Link } from "react-router-dom";
import "./styles.css";

export default function Header(){
    return(
        <header className="header-default">
            <nav className="nav-default container">
                <Link to="/"><h1>MeuSite</h1></Link>
            </nav>
        </header>
    );
}
import { Link } from "react-router-dom";
import "./styles.css";
import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <nav className="container">
                <Link to="/"><h1>MeuSite</h1></Link>
                <div className="nav-links-container">
                    <NavLink className={({ isActive}) => isActive ? "nav-links active" : "nav-links"} to={"/home"}>
                        Início
                    </NavLink>  
                    <NavLink className={({ isActive}) => isActive ? "nav-links active" : "nav-links"} to={"/sales"}>
                        Promoção
                    </NavLink>  
                    <NavLink className={({ isActive}) => isActive ? "nav-links active" : "nav-links"} to={"/registration"}>
                        Participar
                    </NavLink>  
                </div>
            </nav>
        </header>
    );
}
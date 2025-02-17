import { Link } from "react-router-dom";
import MainCard from "../../../components/MainCard";
import RedButton from "../../../components/RedButton";
import "./styles.css"

export default function Registration() {

    return (
        <>
            <header className="header-registration">
                <nav className="nav-registration">
                    <h1>Faça sua inscrição!</h1>
                </nav>
            </header>
            <main>
                <section id="registration-section" className="container">
                    <MainCard name={"Página de inscrição"} />
                    <Link to="/sales">
                        <RedButton name="Quero participar" />
                    </Link>
                </section>
            </main>
        </>
    )
}
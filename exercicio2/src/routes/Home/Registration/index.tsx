import { Link } from "react-router-dom";
import MainCard from "../../../components/MainCard";
import RedButton from "../../../components/RedButton";
import "./styles.css"

export default function Registration() {

    return (
        <>
            <main>
                <section id="registration-section" className="container">
                    <div className="title">
                        <h1>Faça sua inscrição!</h1>
                    </div>
                    <MainCard name={"Página de inscrição"} />
                    <Link to="/sales">
                        <RedButton name="Quero participar" />
                    </Link>
                </section>
            </main>
        </>
    )
}
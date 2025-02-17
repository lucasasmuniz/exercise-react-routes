import { Link } from "react-router-dom";
import MainCard from "../../../components/MainCard";
import RedButton from "../../../components/RedButton";

export default function Registration() {

    return (
        <>
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
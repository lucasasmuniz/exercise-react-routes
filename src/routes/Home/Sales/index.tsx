import { Link } from "react-router-dom";
import MainCard from "../../../components/MainCard";
import RedButton from "../../../components/RedButton";

export default function Sales() {

    return (
        <>
            <MainCard name={"Página de promoção"} />
            <Link to="/registration">
                <RedButton name="Quero participar" />
            </Link>
        </>
    )
}
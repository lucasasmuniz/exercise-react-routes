import { Link } from "react-router-dom";
import MainCard from "../../../components/MainCard";
import RedButton from "../../../components/RedButton";

export default function MainPage() {

  return (
    <>
      <main>
        <section id="main-page-section" className="container">
          <MainCard name={"Página inicial"} />
          <Link to="/sales">
            <RedButton name="Quero participar" />
          </Link>
        </section>
      </main>
    </>
  )
}
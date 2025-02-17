import Header from "../../../components/Header";
import MainCard from "../../../components/MainCard";
import RedButton from "../../../components/RedButton";

export default function Registration() {

  return (
    <>
      <Header />
      <main>
        <section id="home-section" className="container">
          <MainCard name={"Página de inscrição"} />
          <RedButton name="Ver promoção"/>
        </section>
      </main>
    </>
  )
}
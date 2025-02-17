import Header from "../../../components/Header";
import MainCard from "../../../components/MainCard";
import RedButton from "../../../components/RedButton";

export default function Sales() {

  return (
    <>
      <Header />
      <main>
        <section id="home-section" className="container">
          <MainCard name={"Página de promoção"} />
          <RedButton name="Quero participar"/>
        </section>
      </main>
    </>
  )
}
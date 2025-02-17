import Header from "./components/Home/Header";
import MainCard from "./components/Home/MainCard";

export default function App() {

  return (
    <>
      <Header />
      <main>
        <section id="home-section">
          <MainCard name={"Página inicial"} />
        </section>
      </main>
    </>
  )
}
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

export default function Home() {

  return (
    <>
      <Header />
      <main>
        <section id="home-section" className="container">
            <Outlet />
        </section>
      </main>
    </>
  )
}
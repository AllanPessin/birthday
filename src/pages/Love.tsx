import { BsArrowRight } from "react-icons/bs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Love() {

  return (
    <>
      <Header />
      <article className="flex justify-center py-8">
        <div className="p-x8">
          <h1 className="text-xl mb-8">
            <b>Eu te amo, Drielle</b><br />
            <b>Eu te amo, Drielle</b><br />
            <b>Eu te amo, Drielle</b><br />
            <b>Eu te amo, Drielle</b><br />
            <b>Eu te amo, Drielle</b><br />

          </h1>
          <div className="flex justify-center text-white-300 text-lg font-semibold">
            <Link to={'/feliz-aniversario'} className="flex flex-row items-center gap-2 ease-in-out duration-300 hover:text-red-300">
              Mas não para por aqui
              <BsArrowRight size={'2rem'} />
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
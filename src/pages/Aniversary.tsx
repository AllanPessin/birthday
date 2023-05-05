import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaHeart } from "react-icons/fa";

export default function Aniversary() {

  return (
    <>
      <Header />
      <div className="p-4 py-8 text-justify lg:w-[45%] lg:m-auto">
        <p className="text-white-300 text-lg mb-4">Parabéns, meu amor.</p>
        <p className="text-white-300 text-lg mb-4">
          Não tem presente no mundo suficiente para te dar,
          que mostre o quanto eu me importo com você e nem o tanto que você merece,
          merece tudo de bom que possa ter e vou fazer o possível e o impossível pra te ver bem.
        </p>
        <p className="text-white-300 text-lg mb-4">
          Trilhar a vida contigo tem sido a experiência mais incrível
          que eu já passei na minha vida inteira e quero continuar pra sempre do seu lado,
          compartilhando as conquistas, as felicidades, os momentos, os planos e comemorando junto.
        </p>
        <h1 className="text-xl mb-4">Eu e tu, tu e eu.</h1>
        <p className="text-white-300 text-lg mb-4">
          Desejo tudo de maravilhoso que o universo possa te proporcionar,
          muito amor, paz, felicidade e que conquiste tudo aquilo que se propõe a fazer.
        </p>
        <p className="text-white-300 text-lg mb-4">
          Você é incrível, nunca se esqueça disso.
        </p>
        <p className="text-white-300 text-lg mb-4">
          Feliz aniversário!
          <h2 className="flex items-center justify-end text-xl mb-24">
            Eu te amo <FaHeart size={'2rem'} className="mx-4" />
          </h2>
        </p>
      </div>
      <Footer />
    </>
  )
}
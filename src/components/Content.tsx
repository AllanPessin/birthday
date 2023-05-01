import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Content() {

  return (
    <article className="flex justify-center py-8">
      <div className="p-x8">
        <h1 className="text-xl mb-8">
          Uma vez, eu lembro que você me perguntou se eu conseguia criar um site
          só escrito <b>"Eu te amo"</b> <br />
          Bom, eu consigo, um site feito especialmente para você.
        </h1>
        <div className="flex justify-center text-white-300 text-lg font-semibold border rounded-lg border-red-500">
          <Link to={'/eu-te-amo'} className="flex flex-row items-center gap-2 ease-in-out duration-300 hover:text-red-300">
            Eu te amo!
            <BsArrowRight size={'2rem'} />
          </Link>
        </div>
      </div>
    </article>
  )
}
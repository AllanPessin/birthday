import React from "react";
import { BsFillHeartFill } from "react-icons/bs"
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom'

export default function Header() {
  const navLi: { name: string, url: string }[] = [
    {
      name: 'Drielle',
      url: '/',
    },
    {
      name: 'Feliz Aniversário',
      url: '/happy-birthday',
    },
  ]

  const [isOpenMenu, setIsOpenMenu] = React.useState(false)
  const handleclick = () => {
    setIsOpenMenu(!isOpenMenu)
  }


  return (
    <header className="w-full p-8">
      <section className="flex justify-between items-center">
        <Link to={'/'} className="flex items-center gap-2">
          <BsFillHeartFill size={'4rem'} color="#D63615" />
          <p className="text-white-300">Drielle</p>
        </Link>

        <nav>
          <div className="hover:cursor-pointer" onClick={handleclick}>
            <FaBars size={'2rem'} color="#fff" />
          </div>
          <div className={`fixed w-[240px] top-0 z-10 ease-in-out duration-300 bg-red-300 h-full ${isOpenMenu ? 'right-0' : 'right-[-240px]'}`}>
            <div className="hover:cursor-pointer m-8 flex justify-end" onClick={handleclick}>
              <FaTimes size={'2rem'} color="#fff" />
            </div>
            <ul className="flex flex-col gap-3 px-8 text-lg h-full">
              {navLi.map((li, index) => (
                <li key={index} className="text-white-300">
                  <Link to={li.url}>
                    {li.name}
                  </Link>
                </li>
              ))}
              <li>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </header>

    //     <nav className="w-[35%]">
    //       <ul className="hidden sm:flex sm:justify-evenly sm:items-center">
    //         {showBars && <FaBars />}            
    //         {navLi.map((li, index) => (
    //           // TODO: adicionar link para paginas
    //           <li key={index}
    //             className="p-3 color border border-white-300 rounded text-white-300 h-auto text-center font-bold">
    //             {li.name}
    //           </li>
    //         ))}
    //       </ul>
    //     </nav>
    //   </section>
    // </header>
  )
}
import React from "react";
import { BsFillHeartFill } from "react-icons/bs"
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom'

export default function Header() {
  const navLi: { name: string }[] = [
    {
      name: 'Drielle',
    },
    {
      name: 'Feliz Aniversário',
    },
  ]
  
  const [showBars, setShowBars] = React.useState(false)
  React.useEffect(() => {
    const handleResize = () => {
      setShowBars(window.screen.width < 640)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  

  return (
    <header className="w-full p-8 bg-red-500">
      <section className="flex justify-between items-center">
        <div>
          <Link to={'/'}>
            <BsFillHeartFill size={'4rem'} color="red" />
          </Link >
        </div>
        <nav className="w-[35%] ">
          <ul className="hidden sm:flex sm:justify-evenly sm:items-center">
            {showBars && <FaBars />}            
            {navLi.map((li, index) => (
              // TODO: adicionar link para paginas
              <li key={index}
                className="p-3 color border border-white-300 rounded text-white-300 h-auto text-center font-bold">
                {li.name}
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </header>
  )
}
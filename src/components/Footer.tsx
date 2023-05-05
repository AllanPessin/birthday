export default function Footer() {
  const date = new Date()

  return (
    <footer className="w-full absoloute bottom-0 p-6 bg-red-500">
      <div className="max-w-screen-xl flex flex-col justify-between items-center m-auto sm:flex-row">
        <p className="text-lg text-white-300">
          Copyright © {date.getFullYear()}
        </p>
        <p className="text-lg text-white-300">
          Drielle & Allan
        </p>
      </div>
    </footer>
  )
}
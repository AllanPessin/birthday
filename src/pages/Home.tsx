import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {

  return (
    <>
      <Header />
      <div className="flex items-center justify-center p-4">
        <Content />
      </div>
      <Footer />
    </>
  )
}
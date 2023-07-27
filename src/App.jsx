import About from "./components/About"
import Details from "./components/Details"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Needed from "./components/Needed"
import OurOffers from "./components/OurOffers"
import Popular from "./components/Popular"
import Recently from "./components/Recently"
import Services from "./components/Services"


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Details />
      <Popular />
      <About />
      <Needed />
      <Recently />
      <Services />
      <OurOffers />
      <Footer />
    </>
  )
}

export default App

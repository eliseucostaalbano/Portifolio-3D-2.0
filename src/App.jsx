import NavBar from './components/NavBar.jsx'
import Testemunhos from "./sections/Testemunhos";
import Footer from "./sections/Footer";
import Contato from "./sections/Contato";
import TechStack from "./sections/TechStack";
import Experiencia from "./sections/Experiencia";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import LogoShowcase from "./sections/LogoShowcase";
import Cartoes from "./sections/Cartoes";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Showcase />
      <LogoShowcase />
      <Cartoes />
      <Experiencia />
      <TechStack />
      <Testemunhos />
      <Contato />
      <Footer />
    </>
  )
}

export default App

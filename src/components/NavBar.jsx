import { useState , useEffect} from "react";
import { navLinks } from "../constants";

const NavBar = () => {
   const [scrolled, setScrolled] = useState(false);

 useEffect(() => {
    const lidarScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", lidarScroll);
     return () => window.removeEventListener("scroll", lidarScroll);
      }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div  className="inner">
        <a href="#hero" className="logo">Eliseu Costa</a>
        <nav className="desktop">
       <ul>
       {navLinks.map((nav) => (
          <li key={nav.nome} className="group">
            <a href={nav.link}>
              <span>{nav.nome}</span>
              <span className="underline" />
              </a>
          </li>
        ))}
       </ul>
        </nav>
        <a href="#contato" className="contact-btn group">
        <div className="inner">
            <span>Me Contate</span>
          </div>
        </a> 
      </div>
      </header>
  )
}

export default NavBar
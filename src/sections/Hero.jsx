import { palavras } from "../constants"
import Botão from "../components/Botão"
import HeroExperience from "../components/models//HeroModels/HeroExperience"
import ContadorAnimado from "../components/ContadorAnimado"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {

   useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });
  
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
      <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
       {/* LEFT: Hero Content */}
       <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
        <div className="flex flex-col gap-7">
        <div className="hero-text">
         <h1>Moldando 
          <span className="slide">
          <span className="wrapper">
          {palavras.map((item, index) => (
            <span key={index} className="flex items-center md:gap-3 gap-1 pb-2">
              <img src={item.imgPath} alt={item.text} className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"/>
              <span>{item.text}</span>
            </span>
          ))}
          </span>
          </span>
          </h1>
         <h1>em Projetos Reais</h1>
         <h1>Que Entrega Resultados</h1>
        </div>
          <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Oi, Eu sou Eliseu, um desenvolvedor baseado no Brasil com uma paixão por
              código.
            </p>
            <Botão texto="Veja Meu Trabalho" className="md:w-80 md:h-16 w-60 h-12" id="counter" />
        </div>
       </header>
       {/* RIGHT: 3D Model or Visual */}
       <figure>
        <div className="hero-3d-layout">
          <HeroExperience /> 
        </div>
       </figure>
      </div>
      
      <ContadorAnimado />
    </section>
  )
}

export default Hero
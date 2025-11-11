import Titulo from "../components/Titulo";
import TechIcon from "../components/models/TechLogos/TechIcon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { techStackIcons } from "../constants";
// import { techStackImgs } from "../constants";

const TechStack = () => {

  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50, 
        opacity: 0, 
      },
      {
        y: 0, 
        opacity: 1,
        duration: 1,
        ease: "power2.inOut", 
        stagger: 0.2, 
        scrollTrigger: {
          trigger: "#skills", 
          start: "top center",
        },
      }
    );
  });

  return (
    <div id="habilidades" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <Titulo
          titulo={"Minhas Contribuções e Principais Habilidades "}
          sub={"🤝 O que Eu Trago de Valor"}
        />
        <div className="tech-grid">
         {techStackIcons.map((icone) => (
           <div key={icone.nome} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
            <div className="tech-card-animated-bg" />
            <div className="tech-card-content">
             <div className="tech-icon-wrapper">
                  <TechIcon model={icone} />  
              </div> 
              <div className="padding-x w-full">
                  <p>{icone.nome}</p>
                </div>
            </div>
           </div>
         ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;

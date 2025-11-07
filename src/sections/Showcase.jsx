import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);


const Showcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

 useGSAP(() => {
   gsap.fromTo(
     sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
   )
    const projetos = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];
    projetos.forEach((projeto, index) => {
      gsap.fromTo(
        projeto,
        { y: 50, opacity: 0 },
         {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: projeto,
            start: "top bottom-=100",
          },
        }
      )
    })
 }, [])

  return (
    <section id="trabalho" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* ESQUERDA */}
          <div ref={rydeRef} className="first-project-wrapper">
           <div className="image-wrapper" >
             <img src="/images/project1.png" alt="Ryde App Interface" />
           </div>
           <div className="text-content">
             <h2>Caronas Por Demanda Feito Simples com um App Poderoso e Amigável chamado Ryde
              </h2>
              <p className="text-white-50 md:text-xl">
                Um app desenvolvido com React Native, Expo e TailwindCSS para uma experiência rápida e amigável.
              </p>
           </div>
          </div>
          {/* DIREITA */}
          <div className="project-list-wrapper overflow-hidden">
          <div className="project" ref={libraryRef}>
            <div className="image-wrapper bg-[#FFEFDB]">
             <img src="/images/project2.png" alt="Library Management Platform" /> 
            </div>
            <h2>Plataforma de Organizaçao de Livraria</h2>
          </div>

          <div className="project" ref={ycDirectoryRef}>
            <div className="image-wrapper bg-[#FFE7EB]">
             <img src="/images/project3.png" alt="YC Directory App" /> 
            </div>
            <h2>Um Showcase de Uma StartUp</h2>
          </div> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
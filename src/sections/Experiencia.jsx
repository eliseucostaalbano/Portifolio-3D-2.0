import GlowCard from "../components/GlowCard.jsx";
import Titulo from "../components/Titulo"
import { expCards } from "../constants";


const Experiencia = () => {
  return (
    <section id="experiencia"  className="flex-center md:mt-40 mt-20 section-padding xl:px-0">
     <div className="w-full h-full md:px-20 px-5">
    <Titulo titulo="Meu percurso profissional" sub="💼 Minha Carreira - Visão geral" />
    <div className="mt-32 relative">
    <div className="relative z-50 xl:space-y-32 space-y-10">
      {expCards.map((card, index) => (
        <div key={index} className="exp-card-wrapper">
          <div className="xl:w-2/6">
         <GlowCard card={card}>
         <div>
          <img src={card.imgPath} alt="exp-img" />
         </div>
         </GlowCard>
         </div>
         </div>
      ))}
    </div>
    </div>
     </div>
    </section>
  )
}

export default Experiencia
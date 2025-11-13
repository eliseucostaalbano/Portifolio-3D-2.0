import GlowCard from "../components/GlowCard"
import Titulo from "../components/Titulo"
import {testemunhos} from "../constants"

const Testemunhos = () => {
  return (
    <section id="depoimentos" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
     <Titulo 
      titulo="O que as pessoas dizem de mim ?"
      sub="⭐️ Feedback dos clientes" 
       />

       <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
       {testemunhos.map((testemunho, index) => (
       <GlowCard card={testemunho} key={index} index={index}>
        <div className="flex items-center gap-3">
         <div>
          <img src={testemunho.imgPath}  alt="" />  
         </div>
         <p className="font-bold">{testemunho.nome}</p>
         <p className="text-white-50">{testemunho.menções}</p>
        </div>
       </GlowCard>
       ))}
      </div>
      </div>
      </section>
  )
}

export default Testemunhos
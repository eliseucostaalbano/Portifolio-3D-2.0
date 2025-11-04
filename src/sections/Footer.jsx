import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      <div className="flex flex-col justify-center">
      <p>Termos & Condições</p> 
      </div>

     <div className="socials">
      {socialImgs.map((social, index) => (
        <div key={index} className="icon">
          <img src={social.imgPath} alt={social.nome} />
        </div>
      ))}
     </div>
       <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Eliseu Costa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
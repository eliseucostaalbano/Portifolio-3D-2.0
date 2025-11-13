import { useRef, useState } from "react";
import ContatoExperiencia from "../components/models/Contato/ContatoExperiencia";
import Titulo from "../components/Titulo";

const Contato = () => {
  const formRef = useRef(null);
  const [carregando, setCarregando] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const lidarMudaca = (e) => {
    const { nome, value } = e.target;
    setForm({ ...form, [nome]: value });
  };

  const lidarSubmit = async (e) => {
    e.preventDefault();
    setCarregando(true);
  };

  return (
    <section id="contato" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <Titulo
          titulo="Entre em contato - Vamos nos conectar"
          sub="💬Tem perguntas ou ideas? Vamos Conversar! 🚀"
        />
        <div className="grid-12-cols mt-16">
          {/* Lado Esquerdo  */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={lidarSubmit}
                className="w-full flex flex-col gap-7"
              >
               <div>
                  <label htmlFor="nome">Seu nome</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={form.nome}
                    onChange={lidarMudaca}
                    placeholder="Qual é o seu nome?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Seu Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={lidarMudaca}
                    placeholder="Qual seu Email?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="mensagem">Sua Mensagem</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={form.mensagem}
                    onChange={lidarMudaca}
                    placeholder="Como posso lhe Ajudar?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {carregando ? "Eviando..." : "Enviar Mensagem"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
            </form>
            </div>
          </div>
          {/* Lado Direito */}
          <div className="xl:col-span-7 min-h-96">
           <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
           <ContatoExperiencia />
           </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;

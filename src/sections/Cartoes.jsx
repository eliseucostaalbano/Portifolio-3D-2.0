import { habilidades } from "../constants";

const Cartoes = () => (
     <div className="w-full padding-x-lg">
    <div className="mx-auto grid-3-cols">
      {habilidades.map((habilidade, index) => (
        <div key={index} className="card-border rounded-xl p-8 flex flex-col gap-4">
          <div className="size-14 flex items-center justify-center rounded-full">
            <img src={habilidade.imgPath} alt={habilidade.titulo} />
          </div>
          <h3 className="text-white text-2xl font-semibold mt-2">{habilidade.titulo}</h3>
          <p className="text-white-50 text-lg">{habilidade.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Cartoes;
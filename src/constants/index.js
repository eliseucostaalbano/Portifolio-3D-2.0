const navLinks = [
  {
    nome: "Início",
    link: "#hero",
  },
  {
    nome: "Estatísticas",
    link: "#counter",
  },
  {
    nome: "Trabalho",
    link: "#trabalho",
  },
  {
    nome: "Experiencia",
    link: "#experiencia",
  },
  {
    nome: "Habilidades",
    link: "#habilidades",
  },
  {
    nome: "Depoimentos",
    link: "#depoimentos",
  },
  {
    nome: "Contato",
    link: "#contato",
  }
];

const palavras = [
  { text: "Ideias", imgPath: "/images/ideas.svg" },
  { text: "Conceitos", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Código", imgPath: "/images/code.svg" },
  { text: "Ideias", imgPath: "/images/ideas.svg" },
  { text: "Conceitos", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Código", imgPath: "/images/code.svg" },
];

const contadorItems = [
  { value: 4, suffix: "+", label: "Anos de Experiência" },
  { value: 100, suffix: "+", label: "Clientes Satisfeitos" },
  { value: 20, suffix: "+", label: "Projetos Concluídos" },
  { value: 90, suffix: "%", label: "Taxa de Retenção de Clientes" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const habilidades = [
  {
    imgPath: "/images/seo.png",
    titulo: "Foco na Qualidade",
    desc: "Entregando resultados de alta qualidade enquanto mantemos atenção a cada detalhe.",
  },
  {
    imgPath: "/images/chat.png",
    titulo: "Comunicação Confiável",
    desc: "Mantendo você atualizado a cada passo para garantir transparência e clareza.",
  },
  {
    imgPath: "/images/time.png",
    titulo: "Entrega Pontual",
    desc: "Garantindo que os projetos sejam concluídos dentro do prazo, com qualidade e atenção aos detalhes.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Eliseu Trouxe criatividade e experiência técnica para a equipe, melhorando significativamente nosso desempenho frontend. Seu trabalho tem sido inestimável na entrega de experiências mais rápidas.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    titulo: "Desenvolvedor Frontend",
    data: "Janeiro 2023 - Atualmente",
    responsabilidades: [
      "Desenvolveu e manteve recursos voltados para o usuário no site da Hostinger.",
      "Colaborou de perto com designers de UI/UX para garantir experiências de usuário perfeitas.",
      "Otimizou aplicações web para máxima velocidade e escalabilidade.",
    ],
    nota: 8,
  },
  {
    review:
      "As contribuições de Eliseu para as aplicações web da Docker foram excepcionais. Ele aborda os desafios com uma mentalidade voltada para a solução de problemas.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    titulo: "Desenvolvedor Full Stack",
    data: "Junho 2020 - Dezembro 2023",
    responsabilidades: [
      "Liderou o desenvolvimento das aplicações web da Docker, com foco em escalabilidade.",
      "Trabalhou com engenheiros de backend para integrar APIs perfeitamente com o frontend.",
      "Contribuiu para projetos de código aberto que foram utilizados no ecossistema Docker.",
    ],
    nota: 9,
  },
  {
    review:
      "O Trabalho de Eliseu no aplicativo móvel da Appwrite trouxe um alto nível de qualidade e eficiência. Ele entregou soluções que aprimoraram nossa experiência móvel e atenderam às metas do produto.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    titulo: "Desenvolvedor React Nativo",
    data: "Março 2019 - Maio 2020",
    responsabilidades: [
      "Desenvolveu aplicativos móveis multiplataforma usando React Native, integrando com os serviços de backend da Appwrite.",
      "Melhorou o desempenho do aplicativo e a experiência do usuário por meio de otimização de código e testes.",
      "Coordenou com a equipe de produto para implementar recursos com base no feedback.",
    ],
    nota: 10,
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    nome: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.png",
  },
  {
    nome: "fb",
    url: "https://www.facebook.com/eliseu.albano.9",
    imgPath: "/images/fb.png",
  },
  {
    nome: "github",
    url: "https://github.com/eliseucostaalbano",
    imgPath: "/images/github.png",
  },
  {
    nome: "linkedin",
    url: "http://linkedin.com/in/eliseu-costa-a84255314/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  palavras,
  habilidades,
  logoIconsList,
  contadorItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
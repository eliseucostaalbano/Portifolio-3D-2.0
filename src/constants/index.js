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
    nome: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    nome: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    nome: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    nome: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    nome: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    nome: "Desenvolvedor React",
    modelPath: "/models/react_logo-transformed.glb",
    escala: 1,
    rotacao: [0, 0, 0],
  },
  {
    nome: "Desenvolvedor Unity",
    modelPath: "/models/unity.glb",
    escala: 0.8,
    rotacao: [ 0,  0, 0],
  },
  {
    nome: "Desenvolvedor Backend",
    modelPath: "/models/node-transformed.glb",
    escala: 5,
    rotacao: [0, -Math.PI / 2, 0],
  },
  {
    nome: "Desenvolvedor Interativo",
    modelPath: "/models/three.js-transformed.glb",
    escala: 0.05,
    rotacao: [0, 0, 0],
  },
  {
    nome: "Gerente de Projetos",
    modelPath: "/models/git-svg-transformed.glb",
    escala: 0.05,
    rotacao: [0, -Math.PI / 4, 0],
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

const testemunhos = [
  {
    nome: "Esther Howard",
    menções: "@estherhoward",
    review:
      "Eu não consigo dizer coisas suficientimente boas sobre Eliseu. Ele conseguiu pegar nossos requisitos de projeto complexos e transformá-los em um site funcional e perfeito. Suas habilidades de resolução de problemas são excepcionais." ,
    imgPath: "/images/client1.png",
    nota: 8
  },
  {
    nome: "Wade Warren",
    menções: "@wadewarren",
    review:
      "Trabalhar com Eliseu foi uma experiência fantástica. Ele transformou nosso site desatualizado em uma plataforma moderna e fácil de usar. Sua atenção aos detalhes e comprometimento com a qualidade são incomparáveis. Recomendo muito para qualquer projeto de desenvolvimento web.",
    imgPath: "/images/client3.png",
    nota: 8
  },
  {
    nome: "Guy Hawkins",
    menções: "@guyhawkins",
    review:
      "Colaborar com Eliseu foi um verdadeiro prazer. Seu profissionalismo, pontualidade e dedicação em entregar resultados excepcionais ficaram evidentes durante todo o nosso projeto. O entusiasmo de Adrian por cada aspecto do desenvolvimento realmente se destaca. Se você está buscando elevar o nível do seu site e fortalecer sua marca, Eliseu é o parceiro ideal.",
    imgPath: "/images/client2.png",
    nota: 9
  },
  {
    nome: "Marvin McKinney",
    menções: "@marvinmckinney",
    review:
      "Foi um prazer trabalhar com Eliseu. Ele transformou nosso site desatualizado em uma plataforma nova e intuitiva, moderna e fácil de navegar. Um trabalho fantástico em todos os aspectos.",
    imgPath: "/images/client5.png",
    nota:9
  },
  {
    nome: "Floyd Miles",
    menções: "@floydmiles",
    review:
      "A experiência de Eliseu em desenvolvimento web é realmente impressionante. Ele entregou uma solução robusta e escalável para o nosso site de e-commerce, e nossas vendas online aumentaram significativamente desde o lançamento. Ele é um verdadeiro profissional!",
    imgPath: "/images/client4.png",
    nota: 10
  },
  {
    nome: "Albert Flores",
    menções: "@albertflores",
    review:
      "Foi um prazer trabalhar com  Eliseu. Ele entendeu perfeitamente nossos requisitos e entregou um site que superou nossas expectativas. Suas habilidades em desenvolvimento frontend e backend são de altíssimo nível.",
    imgPath: "/images/client6.png",
    nota: 10
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
  testemunhos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
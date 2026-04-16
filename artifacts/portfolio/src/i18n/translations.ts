export type Language = "pt" | "en" | "es";

export const translations = {
  pt: {
    badge: "Portfólio 2024",
    hero: {
      title: "Gustavo Simplício",
      subtitle: "Designer Gráfico",
      role2: "Web Designer",
      description:
        "Criando experiências digitais e visuais com precisão cirúrgica. No cruzamento entre a arte visual e o desenvolvimento web, onde cada pixel conta uma história.",
      cta: "Ver Trabalhos",
    },
    about: {
      title: "Sobre Mim",
      p1: "Sou designer gráfico e desenvolvedor web, especializado em criar experiências visuais que unem estética, funcionalidade e estratégia. Meu trabalho vai além do design: busco entender a essência de cada projeto para transformar ideias em soluções digitais que realmente geram impacto.",
      p2: "Atuo na criação de identidades visuais, artes digitais e interfaces modernas, sempre com foco em transmitir credibilidade, clareza e profissionalismo. No desenvolvimento web, construo sites responsivos, rápidos e bem estruturados, pensados para oferecer a melhor experiência ao usuário e fortalecer a presença online de marcas e negócios.",
      p3: "Acredito que um bom design não é apenas bonito — ele comunica, conecta e converte. Por isso, cada projeto que desenvolvo é pensado nos mínimos detalhes, unindo criatividade, tecnologia e estratégia para entregar resultados reais.",
    },
    portfolio: {
      title: "Portfólio Gráfico",
      enlarge: "Ampliar",
      artPrefix: "Arte",
    },
    webDesign: {
      title: "Também desenvolvo sites",
      description:
        "Da concepção visual ao código final. Interfaces fluidas, responsivas e otimizadas para converter.",
    },
    contact: {
      title: "Contato & Localização",
      address: "Rua Dr. Valdevino Gregório de Andrade, 800 – Gramame, João Pessoa - PB",
      email: "gustavo.simplicioweb@gmail.com",
      phone: "+55 83 98192-6225",
    },
    cta: {
      title: "Vamos criar algo notável?",
      description: "Disponível para projetos freelance e parcerias estratégicas.",
      button: "Iniciar Conversa",
    },
    footer: "Todos os direitos reservados.",
  },
  en: {
    badge: "Portfolio 2024",
    hero: {
      title: "Gustavo Simplício",
      subtitle: "Graphic Designer",
      role2: "Web Designer",
      description:
        "Creating digital and visual experiences with surgical precision. At the crossroads of visual art and web development, where every pixel tells a story.",
      cta: "View Work",
    },
    about: {
      title: "About Me",
      p1: "I am a graphic designer and web developer, specialized in creating visual experiences that unite aesthetics, functionality and strategy. My work goes beyond design: I seek to understand the essence of each project to transform ideas into digital solutions that truly make an impact.",
      p2: "I work on creating visual identities, digital art and modern interfaces, always focused on conveying credibility, clarity and professionalism. In web development, I build responsive, fast and well-structured websites, designed to provide the best user experience and strengthen the online presence of brands and businesses.",
      p3: "I believe that good design is not just beautiful — it communicates, connects and converts. That's why every project I develop is thought through in the smallest details, combining creativity, technology and strategy to deliver real results.",
    },
    portfolio: {
      title: "Graphic Portfolio",
      enlarge: "Enlarge",
      artPrefix: "Art",
    },
    webDesign: {
      title: "I also develop websites",
      description:
        "From visual concept to final code. Fluid, responsive interfaces optimized to convert.",
    },
    contact: {
      title: "Contact & Location",
      address: "Rua Dr. Valdevino Gregório de Andrade, 800 – Gramame, João Pessoa - PB, Brazil",
      email: "gustavo.simplicioweb@gmail.com",
      phone: "+55 83 98192-6225",
    },
    cta: {
      title: "Let's create something remarkable?",
      description: "Available for freelance projects and strategic partnerships.",
      button: "Start a Conversation",
    },
    footer: "All rights reserved.",
  },
  es: {
    badge: "Portafolio 2024",
    hero: {
      title: "Gustavo Simplício",
      subtitle: "Diseñador Gráfico",
      role2: "Diseñador Web",
      description:
        "Creando experiencias digitales y visuales con precisión quirúrgica. En la encrucijada entre el arte visual y el desarrollo web, donde cada píxel cuenta una historia.",
      cta: "Ver Trabajos",
    },
    about: {
      title: "Sobre Mí",
      p1: "Soy diseñador gráfico y desarrollador web, especializado en crear experiencias visuales que unen estética, funcionalidad y estrategia. Mi trabajo va más allá del diseño: busco entender la esencia de cada proyecto para transformar ideas en soluciones digitales que realmente generan impacto.",
      p2: "Me dedico a la creación de identidades visuales, artes digitales e interfaces modernas, siempre enfocado en transmitir credibilidad, claridad y profesionalismo. En el desarrollo web, construyo sitios responsivos, rápidos y bien estructurados, pensados para ofrecer la mejor experiencia al usuario y fortalecer la presencia online de marcas y negocios.",
      p3: "Creo que un buen diseño no es solo bonito — comunica, conecta y convierte. Por eso, cada proyecto que desarrollo está pensado en los mínimos detalles, uniendo creatividad, tecnología y estrategia para entregar resultados reales.",
    },
    portfolio: {
      title: "Portafolio Gráfico",
      enlarge: "Ampliar",
      artPrefix: "Arte",
    },
    webDesign: {
      title: "También desarrollo sitios web",
      description:
        "Desde la concepción visual hasta el código final. Interfaces fluidas, responsivas y optimizadas para convertir.",
    },
    contact: {
      title: "Contacto & Ubicación",
      address: "Rua Dr. Valdevino Gregório de Andrade, 800 – Gramame, João Pessoa - PB, Brasil",
      email: "gustavo.simplicioweb@gmail.com",
      phone: "+55 83 98192-6225",
    },
    cta: {
      title: "¿Creamos algo notable?",
      description: "Disponible para proyectos freelance y asociaciones estratégicas.",
      button: "Iniciar Conversación",
    },
    footer: "Todos los derechos reservados.",
  },
} as const;

export type Translations = typeof translations.pt;

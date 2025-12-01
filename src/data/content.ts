export type Project = {
  id: string
  title: string
  description: { en: string; pt: string }
  fullDescription: { en: string; pt: string }
  role: { en: string; pt: string }
  techStack: string[]
  screenshots: string[]
  links: {
    live?: string
    github?: string
    appStore?: string
    testFlight?: string
  }
  video?: string
  type: 'web' | 'ios' | 'react-native'
}

export type Experience = {
  id: string
  role: { en: string; pt: string }
  company: string
  period: { en: string; pt: string }
  description: { en: string[]; pt: string[] }
}

export type Education = {
  id: string
  degree: { en: string; pt: string }
  institution: string
  year: string
}

const generateProjects = () => {
  const projects: Project[] = [
    // Web Projects (10 items)
    {
      id: 'web-1',
      title: 'E-Commerce Dashboard',
      type: 'web',
      description: {
        en: 'A comprehensive analytics dashboard for online retailers.',
        pt: 'Um painel de análise abrangente para varejistas online.',
      },
      fullDescription: {
        en: 'This project involved creating a high-performance dashboard for e-commerce analytics. I focused on data visualization using Recharts and ensuring a responsive layout that works seamlessly on tablets and desktops.',
        pt: 'Este projeto envolveu a criação de um painel de alto desempenho para análise de comércio eletrônico. Foquei na visualização de dados usando Recharts e em garantir um layout responsivo.',
      },
      role: { en: 'Lead Frontend Engineer', pt: 'Engenheira Frontend Líder' },
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
      screenshots: [
        'https://img.usecurling.com/p/1200/800?q=dashboard%20analytics',
        'https://img.usecurling.com/p/1200/800?q=data%20charts',
      ],
      links: { live: 'https://example.com', github: 'https://github.com' },
    },
    {
      id: 'web-2',
      title: 'Luxury Real Estate',
      type: 'web',
      description: {
        en: 'A premium property listing platform with immersive visuals.',
        pt: 'Uma plataforma de listagem de imóveis premium com visuais imersivos.',
      },
      fullDescription: {
        en: 'Built a luxury real estate platform focusing on high-quality imagery and smooth transitions. Implemented advanced filtering and map integration.',
        pt: 'Construí uma plataforma imobiliária de luxo focada em imagens de alta qualidade e transições suaves. Implementei filtragem avançada e integração com mapas.',
      },
      role: { en: 'Frontend Developer', pt: 'Desenvolvedora Frontend' },
      techStack: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
      screenshots: [
        'https://img.usecurling.com/p/1200/800?q=luxury%20house',
        'https://img.usecurling.com/p/1200/800?q=modern%20interior',
      ],
      links: { live: 'https://example.com', github: 'https://github.com' },
    },
    ...Array.from({ length: 8 }).map((_, i) => ({
      id: `web-${i + 3}`,
      title: `Web Project ${i + 3}`,
      type: 'web' as const,
      description: {
        en: `A sophisticated web application solving complex problem #${i + 3}.`,
        pt: `Uma aplicação web sofisticada resolvendo o problema complexo #${i + 3}.`,
      },
      fullDescription: {
        en: 'Developed a scalable web solution with a focus on performance, accessibility, and user experience. Utilized modern frontend technologies to deliver a seamless interface.',
        pt: 'Desenvolvi uma solução web escalável com foco em desempenho, acessibilidade e experiência do usuário. Utilizei tecnologias frontend modernas para entregar uma interface perfeita.',
      },
      role: { en: 'Frontend Engineer', pt: 'Engenheira Frontend' },
      techStack: ['React', 'TypeScript', 'Tailwind CSS'],
      screenshots: [
        `https://img.usecurling.com/p/1200/800?q=web%20interface%20${i + 3}`,
        `https://img.usecurling.com/p/1200/800?q=ui%20design%20${i + 3}`,
      ],
      links: { live: 'https://example.com', github: 'https://github.com' },
    })),

    // iOS Projects (10 items)
    {
      id: 'ios-1',
      title: 'Mindful Moments',
      type: 'ios',
      description: {
        en: 'A native iOS meditation app built with SwiftUI.',
        pt: 'Um aplicativo nativo de meditação para iOS construído com SwiftUI.',
      },
      fullDescription: {
        en: 'Mindful Moments is a native iOS application designed to help users track their meditation habits. It leverages HealthKit integration to sync mindfulness minutes.',
        pt: 'Mindful Moments é um aplicativo nativo para iOS projetado para ajudar os usuários a rastrear seus hábitos de meditação. Ele aproveita a integração com o HealthKit.',
      },
      role: { en: 'iOS Developer', pt: 'Desenvolvedora iOS' },
      techStack: ['Swift', 'SwiftUI', 'HealthKit'],
      screenshots: [
        'https://img.usecurling.com/p/600/1200?q=meditation%20app',
        'https://img.usecurling.com/p/600/1200?q=calm%20interface',
      ],
      links: { appStore: 'https://apple.com' },
    },
    ...Array.from({ length: 9 }).map((_, i) => ({
      id: `ios-${i + 2}`,
      title: `iOS App ${i + 2}`,
      type: 'ios' as const,
      description: {
        en: `Native iOS experience focused on productivity and ease of use.`,
        pt: `Experiência nativa iOS focada em produtividade e facilidade de uso.`,
      },
      fullDescription: {
        en: 'Built entirely with Swift and SwiftUI, utilizing CoreData for local storage and implementing a custom design system consistent with iOS Human Interface Guidelines.',
        pt: 'Construído inteiramente com Swift e SwiftUI, utilizando CoreData para armazenamento local e implementando um sistema de design personalizado consistente com as Diretrizes de Interface Humana do iOS.',
      },
      role: { en: 'iOS Engineer', pt: 'Engenheira iOS' },
      techStack: ['Swift', 'SwiftUI', 'CoreData'],
      screenshots: [
        `https://img.usecurling.com/p/600/1200?q=ios%20app%20${i + 2}`,
        `https://img.usecurling.com/p/600/1200?q=mobile%20screen%20${i + 2}`,
      ],
      links: { appStore: 'https://apple.com' },
    })),

    // React Native Projects (5 items)
    {
      id: 'rn-1',
      title: 'City Guide',
      type: 'react-native',
      description: {
        en: 'Cross-platform travel guide for major cities.',
        pt: 'Guia de viagem multiplataforma para grandes cidades.',
      },
      fullDescription: {
        en: 'A cross-platform mobile application built with React Native and Expo. It features offline maps, curated lists of attractions, and user reviews.',
        pt: 'Um aplicativo móvel multiplataforma construído com React Native e Expo. Possui mapas offline, listas curadas de atrações e avaliações de usuários.',
      },
      role: { en: 'Mobile Engineer', pt: 'Engenheira Mobile' },
      techStack: ['React Native', 'Expo', 'Redux'],
      screenshots: [
        'https://img.usecurling.com/p/600/1200?q=travel%20app',
        'https://img.usecurling.com/p/600/1200?q=city%20map',
      ],
      links: { testFlight: 'https://testflight.apple.com' },
    },
    ...Array.from({ length: 4 }).map((_, i) => ({
      id: `rn-${i + 2}`,
      title: `RN App ${i + 2}`,
      type: 'react-native' as const,
      description: {
        en: `Efficient cross-platform application for business management.`,
        pt: `Aplicativo multiplataforma eficiente para gestão de negócios.`,
      },
      fullDescription: {
        en: 'Leveraged React Native to deploy to both iOS and Android from a single codebase. Integrated complex animations using Reanimated and Gesture Handler.',
        pt: 'Aproveitei o React Native para implantar no iOS e Android a partir de uma única base de código. Integrei animações complexas usando Reanimated e Gesture Handler.',
      },
      role: { en: 'React Native Dev', pt: 'Dev React Native' },
      techStack: ['React Native', 'TypeScript', 'Reanimated'],
      screenshots: [
        `https://img.usecurling.com/p/600/1200?q=app%20interface%20${i + 2}`,
        `https://img.usecurling.com/p/600/1200?q=mobile%20ui%20${i + 2}`,
      ],
      links: { testFlight: 'https://testflight.apple.com' },
    })),
  ]
  return projects
}

export const content = {
  hero: {
    title: 'Elis Pethke',
    subheading: {
      en: 'Frontend & Mobile Engineer — Front-end, iOS (Swift), React Native, Backend basics',
      pt: 'Engenheira Frontend e Mobile — Front-end, iOS (Swift), React Native, conhecimentos em Backend',
    },
    cta: {
      projects: { en: 'View Projects', pt: 'Ver Projetos' },
      resume: { en: 'Download Resume', pt: 'Baixar Currículo' },
    },
  },
  bio: {
    en: `I am Elisângela Pethke, a Front-end developer passionate about creating modern, responsive, and engaging digital experiences. Brazilian, living in Berlin, fluent in German, and highly proficient in English, I specialize in React and React Native, delivering high-quality interfaces for web and mobile applications.

I started my journey in Front-end development, working as a freelancer for over 2 years, building clean, functional, and visually appealing interfaces for diverse clients using React. Over time, I expanded my skills to mobile development with React Native, as well as Swift and SwiftUI, enabling me to develop cross-platform and native iOS apps with modern architecture and seamless user experiences.

With over 35 projects on GitHub, my portfolio demonstrates strong expertise in Front-end technologies, including:

React & React Native: Building responsive, interactive, and high-performance applications with modern UI, authentication, API integration, carousels, and dynamic layouts.
Swift & SwiftUI: Professional iOS apps using MVVM architecture, persistent storage, interactive charts, animations, and API connections.
UI/UX Design: Creating elegant, intuitive, and accessible interfaces focused on smooth user experiences.
Backend with Vapor (Swift): Developing APIs for login, registration, and database management.

I am a fast learner, detail-oriented, and enjoy solving complex challenges with creative solutions. Development is not just my profession — it’s my passion. Every line of code is a chance to transform ideas into polished, functional, and impactful products.

Check out my GitHub to explore 35+ projects showcasing my experience and dedication to Front-end excellence and innovative development.`,
    pt: `Sou Elisângela Pethke, uma desenvolvedora Front-end apaixonada por criar experiências digitais modernas, responsivas e envolventes. Brasileira, morando em Berlim, fluente em alemão e com alta proficiência em inglês, sou especialista em React e React Native, entregando interfaces de alta qualidade para aplicações web e mobile.

Comecei minha jornada no desenvolvimento Front-end trabalhando como freelancer por mais de 2 anos, construindo interfaces limpas, funcionais e visualmente atraentes para diversos clientes usando React. Com o tempo, expandi minhas habilidades para o desenvolvimento mobile com React Native, bem como Swift e SwiftUI, permitindo-me desenvolver aplicativos multiplataforma e nativos iOS com arquitetura moderna e experiências de usuário perfeitas.

Com mais de 35 projetos no GitHub, meu portfólio demonstra forte expertise em tecnologias Front-end, incluindo:

React & React Native: Construção de aplicações responsivas, interativas e de alto desempenho com UI moderna, autenticação, integração de API, carrosséis e layouts dinâmicos.
Swift & SwiftUI: Apps iOS profissionais usando arquitetura MVVM, armazenamento persistente, gráficos interativos, animações e conexões de API.
UI/UX Design: Criação de interfaces elegantes, intuitivas e acessíveis focadas em experiências de usuário fluidas.
Backend com Vapor (Swift): Desenvolvimento de APIs para login, registro e gerenciamento de banco de dados.

Sou uma aprendiz rápida, orientada a detalhes e gosto de resolver desafios complexos com soluções criativas. Desenvolvimento não é apenas minha profissão — é minha paixão. Cada linha de código é uma chance de transformar ideias em produtos polidos, funcionais e impactantes.

Confira meu GitHub para explorar mais de 35 projetos mostrando minha experiência e dedicação à excelência em Front-end e desenvolvimento inovador.`,
  },
  projects: generateProjects(),
  experience: [
    {
      id: 'exp-1',
      role: {
        en: 'Senior Frontend Engineer',
        pt: 'Engenheira Frontend Sênior',
      },
      company: 'Tech Corp',
      period: { en: '2022 - Present', pt: '2022 - Presente' },
      description: {
        en: [
          'Led the migration of legacy codebase to Next.js and TypeScript.',
          'Improved site performance by 40% through code splitting and image optimization.',
          'Mentored junior developers and established code quality standards.',
        ],
        pt: [
          'Liderei a migração da base de código legada para Next.js e TypeScript.',
          'Melhorei o desempenho do site em 40% através de code splitting e otimização de imagens.',
          'Mentorei desenvolvedores júnior e estabeleci padrões de qualidade de código.',
        ],
      },
    },
    {
      id: 'exp-2',
      role: { en: 'Mobile Developer', pt: 'Desenvolvedora Mobile' },
      company: 'App Studio',
      period: { en: '2020 - 2022', pt: '2020 - 2022' },
      description: {
        en: [
          'Developed and launched 3 native iOS apps using Swift and SwiftUI.',
          'Collaborated with designers to implement complex animations and transitions.',
          'Integrated RESTful APIs and implemented offline caching strategies.',
        ],
        pt: [
          'Desenvolvi e lancei 3 aplicativos nativos iOS usando Swift e SwiftUI.',
          'Colaborei com designers para implementar animações e transições complexas.',
          'Integrei APIs RESTful e implementei estratégias de cache offline.',
        ],
      },
    },
  ] as Experience[],
  education: [
    {
      id: 'edu-1',
      degree: {
        en: 'B.S. Computer Science',
        pt: 'Bacharelado em Ciência da Computação',
      },
      institution: 'University of Technology',
      year: '2019',
    },
  ] as Education[],
  skills: {
    frontend: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Redux',
      'HTML5',
      'CSS3',
    ],
    mobile: ['Swift', 'SwiftUI', 'React Native', 'Expo'],
    tools: ['Git', 'Figma', 'Jest', 'CI/CD', 'Agile'],
    languages: {
      en: 'English (Fluent), Portuguese (Native), German (B1)',
      pt: 'Inglês (Fluente), Português (Nativo), Alemão (B1)',
    },
  },
  contact: {
    title: { en: 'Get in Touch', pt: 'Entre em Contato' },
    name: { en: 'Name', pt: 'Nome' },
    email: { en: 'Email', pt: 'Email' },
    message: { en: 'Message', pt: 'Mensagem' },
    send: { en: 'Send Message', pt: 'Enviar Mensagem' },
    success: {
      en: 'Message sent successfully!',
      pt: 'Mensagem enviada com sucesso!',
    },
  },
}

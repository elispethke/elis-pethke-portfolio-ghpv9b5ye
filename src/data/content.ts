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
    en: "Hi — I'm Elis Pethke. I'm a Front-end and Mobile Engineer specialized in building polished web experiences and mobile apps. I work with modern front-end stacks, Swift for iOS, and React Native for cross-platform apps. I also have backend knowledge and experience integrating APIs. I build clean, maintainable code with attention to UX and performance. I’m based in Berlin and open to new opportunities.",
    pt: 'Olá — Sou Elis Pethke. Sou Engenheira frontend e mobile especializada na criação de experiências web e apps móveis elegantes. Trabalho com stacks modernos de front-end, Swift para iOS e React Native para apps cross-platform. Tenho também conhecimentos de backend e integração de APIs. Prezo por código limpo, usabilidade e performance. Moro em Berlim e estou aberta a novas oportunidades.',
  },
  projects: [
    {
      id: 'web-1',
      title: 'E-Commerce Dashboard',
      type: 'web',
      description: {
        en: 'A comprehensive analytics dashboard for online retailers.',
        pt: 'Um painel de análise abrangente para varejistas online.',
      },
      fullDescription: {
        en: 'This project involved creating a high-performance dashboard for e-commerce analytics. I focused on data visualization using Recharts and ensuring a responsive layout that works seamlessly on tablets and desktops. The challenge was to handle large datasets efficiently without compromising UI responsiveness.',
        pt: 'Este projeto envolveu a criação de um painel de alto desempenho para análise de comércio eletrônico. Foquei na visualização de dados usando Recharts e em garantir um layout responsivo que funcione perfeitamente em tablets e desktops. O desafio foi lidar com grandes conjuntos de dados de forma eficiente sem comprometer a responsividade da interface.',
      },
      role: { en: 'Lead Frontend Engineer', pt: 'Engenheira Frontend Líder' },
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
      screenshots: [
        'https://img.usecurling.com/p/1200/800?q=dashboard%20analytics',
        'https://img.usecurling.com/p/1200/800?q=data%20charts',
      ],
      links: {
        live: 'https://example.com',
        github: 'https://github.com',
      },
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
      links: {
        live: 'https://example.com',
        github: 'https://github.com',
      },
    },
    {
      id: 'ios-1',
      title: 'Mindful Moments',
      type: 'ios',
      description: {
        en: 'A native iOS meditation app built with SwiftUI.',
        pt: 'Um aplicativo nativo de meditação para iOS construído com SwiftUI.',
      },
      fullDescription: {
        en: 'Mindful Moments is a native iOS application designed to help users track their meditation habits. It leverages HealthKit integration to sync mindfulness minutes and uses local notifications for daily reminders.',
        pt: 'Mindful Moments é um aplicativo nativo para iOS projetado para ajudar os usuários a rastrear seus hábitos de meditação. Ele aproveita a integração com o HealthKit para sincronizar minutos de atenção plena e usa notificações locais para lembretes diários.',
      },
      role: { en: 'iOS Developer', pt: 'Desenvolvedora iOS' },
      techStack: ['Swift', 'SwiftUI', 'HealthKit'],
      screenshots: [
        'https://img.usecurling.com/p/600/1200?q=meditation%20app',
        'https://img.usecurling.com/p/600/1200?q=calm%20interface',
      ],
      links: {
        appStore: 'https://apple.com',
      },
    },
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
      links: {
        testFlight: 'https://testflight.apple.com',
      },
    },
  ] as Project[],
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

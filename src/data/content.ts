export type Project = {
  id: string
  title: string
  description: string
  fullDescription: string
  role: string
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
  role: string
  company: string
  period: string
  description: string[]
}

export type Education = {
  id: string
  degree: string
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
      description: 'A comprehensive analytics dashboard for online retailers.',
      fullDescription:
        'This project involved creating a high-performance dashboard for e-commerce analytics. I focused on data visualization using Recharts and ensuring a responsive layout that works seamlessly on tablets and desktops.',
      role: 'Lead Frontend Engineer',
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
      description:
        'A premium property listing platform with immersive visuals.',
      fullDescription:
        'Built a luxury real estate platform focusing on high-quality imagery and smooth transitions. Implemented advanced filtering and map integration.',
      role: 'Frontend Developer',
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
      description: `A sophisticated web application solving complex problem #${i + 3}.`,
      fullDescription:
        'Developed a scalable web solution with a focus on performance, accessibility, and user experience. Utilized modern frontend technologies to deliver a seamless interface.',
      role: 'Frontend Engineer',
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
      description: 'A native iOS meditation app built with SwiftUI.',
      fullDescription:
        'Mindful Moments is a native iOS application designed to help users track their meditation habits. It leverages HealthKit integration to sync mindfulness minutes.',
      role: 'iOS Developer',
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
      description: `Native iOS experience focused on productivity and ease of use.`,
      fullDescription:
        'Built entirely with Swift and SwiftUI, utilizing CoreData for local storage and implementing a custom design system consistent with iOS Human Interface Guidelines.',
      role: 'iOS Engineer',
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
      description: 'Cross-platform travel guide for major cities.',
      fullDescription:
        'A cross-platform mobile application built with React Native and Expo. It features offline maps, curated lists of attractions, and user reviews.',
      role: 'Mobile Engineer',
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
      description: `Efficient cross-platform application for business management.`,
      fullDescription:
        'Leveraged React Native to deploy to both iOS and Android from a single codebase. Integrated complex animations using Reanimated and Gesture Handler.',
      role: 'React Native Dev',
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
    subheading:
      'Frontend & Mobile Engineer — Front-end, iOS (Swift), React Native, Backend basics',
    cta: {
      projects: 'View Projects',
      resume: 'Download Resume',
    },
  },
  presentation: {
    title: 'Introduction',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=7B5gM8rD4Z9qZ1nE',
  },
  bio: `I am Elisângela Pethke, a Front-end developer passionate about creating modern, responsive, and engaging digital experiences. Brazilian, living in Berlin, fluent in German, and highly proficient in English, I specialize in React and React Native, delivering high-quality interfaces for web and mobile applications.

I started my journey in Front-end development, working as a freelancer for over 2 years, building clean, functional, and visually appealing interfaces for diverse clients using React. Over time, I expanded my skills to mobile development with React Native, as well as Swift and SwiftUI, enabling me to develop cross-platform and native iOS apps with modern architecture and seamless user experiences.

With over 35 projects on GitHub, my portfolio demonstrates strong expertise in Front-end technologies, including:

React & React Native: Building responsive, interactive, and high-performance applications with modern UI, authentication, API integration, carousels, and dynamic layouts.
Swift & SwiftUI: Professional iOS apps using MVVM architecture, persistent storage, interactive charts, animations, and API connections.
UI/UX Design: Creating elegant, intuitive, and accessible interfaces focused on smooth user experiences.
Backend with Vapor (Swift): Developing APIs for login, registration, and database management.

I am a fast learner, detail-oriented, and enjoy solving complex challenges with creative solutions. Development is not just my profession — it’s my passion. Every line of code is a chance to transform ideas into polished, functional, and impactful products.

Check out my GitHub to explore 35+ projects showcasing my experience and dedication to Front-end excellence and innovative development.`,
  projects: generateProjects(),
  experience: [
    {
      id: 'exp-1',
      role: 'Senior Frontend Engineer',
      company: 'Tech Corp',
      period: '2022 - Present',
      description: [
        'Led the migration of legacy codebase to Next.js and TypeScript.',
        'Improved site performance by 40% through code splitting and image optimization.',
        'Mentored junior developers and established code quality standards.',
      ],
    },
    {
      id: 'exp-2',
      role: 'Mobile Developer',
      company: 'App Studio',
      period: '2020 - 2022',
      description: [
        'Developed and launched 3 native iOS apps using Swift and SwiftUI.',
        'Collaborated with designers to implement complex animations and transitions.',
        'Integrated RESTful APIs and implemented offline caching strategies.',
      ],
    },
  ] as Experience[],
  education: [
    {
      id: 'edu-1',
      degree: 'B.S. Computer Science',
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
    languages: 'English (Fluent), Portuguese (Native), German (B1)',
  },
  contact: {
    title: 'Get in Touch',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send Message',
    success: 'Message sent successfully!',
  },
}

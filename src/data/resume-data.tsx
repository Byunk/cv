import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Kyungho Byoun",
  initials: "BK",
  location: "Seoul, South Korea",
  locationLink: "https://www.google.com/maps/place/Seoul",
  about: "Software Engineer @ SAP Labs Korea",
  summary:
    "Driven software engineer with a deep passion for cloud-native technologies and hands-on experience in building scalable, high-performance microservices on microservice architecture (MSA). Skilled in deploying and managing complex Kubernetes clusters, I am dedicated to optimizing development processes and minimizing cloud costs while ensuring system reliability and efficiency.",
  avatarUrl: "/images/profile.jpeg",
  personalWebsiteUrl: "https://kyungho.me",
  contact: {
    email: "kyungho.byoun@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Byunk",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kyungho-byoun/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "KAIST (Korea Advanced Institute of Science and Technology)",
      degree: "Bachelor's Degree in Computer Science and Aerospace Engineering",
      start: "2017",
      end: "2024",
    },
  ],
  work: [
    {
      company: "SAP Labs Korea",
      link: "https://sap.com",
      badges: [],
      title: "Software Associate",
      start: "2024.04",
      end: "present",
      description: "Designed and implemented a cost-optimization system for HANA Cloud, integrating an LLM-based chatbot. This intelligent system empowers operators and developers by retrieving relevant documentation, generating HANA SQL queries, and executing them on the HANA Cloud metric store. As a result, it streamlines operations, reduces cloud costs, and enhances the efficiency of HANA Cloud management.",
    },
    {
      company: "SAP Labs Korea",
      link: "https://sap.com",
      badges: [],
      title: "Software Engineer Intern",
      start: "2023.07",
      end: "2024.03",
      description: "Developed a system to reduce the cost of developing and testing costs of microservices on HANA Cloud, by introducing Istio based architecture. Also, proposed a new way to test HANA Database on HANA Cloud, and filed 11 bugs from released or released candidated versions.",
    },
    {
      company: "KI-ITC Augmented Reality Research Centre, KAIST",
      link: "https://www.linkedin.com/company/kaistarrc/?originalSubdomain=kr",
      badges: [],
      title: "Undergraduate Researcher",
      start: "2022.07",
      end: "2023.06",
      description:
        "Developed an innovative algorithm for estimating sleep stages using cardiorespiratory signals, contributing to advancements in sleep technology. Collaborated with Kyungdong Navien, a leader in condensing technology in South Korea, to bring cutting-edge sleep-tech products to market, combining expertise in signal processing and product development.",
    },
  ],
  skills: ["Python", "Go", "Kubernetes", "Istio"],
  projects: [
    {
      title: "dotfiles",
      techStack: ["Bash"],
      description:
        "My personal dotfiles and scripts to set up a new machine.",
      link: {
        label: "dotfiles",
        href: "https://github.com/Byunk/dotfiles",
      },
    },
    {
      title: "Google Solution Challenge - The Voice",
      techStack: [
        "Team Leader",
        "Google Cloud",
        "BERT",
      ],
      description:
        "AI based scam detection application from phishing attacks for seniors. Winner of the global top 100 in Google Solution Challenge 2023.",
      link: {
        label: "The Voice",
        href: "https://github.com/KAIST-Google-Solution-Challenge",
      },
    },
    {
      title: "KAIST APP Startup Competition - Treevial",
      techStack: ["Team Leader", "Spring Boot", "React"],
      description:
        "Proposed solutions and business strategies to address the supply and demand imbalance in the carbon credit market. Led a team of five software engineers in the KAIST App Startup Competition. Won $5,500 in prize money.",
      link: {
        label: "Treevial",
        href: "",
      }
    },
    {
      title: "Korean Hate Speech Detection",
      techStack: ["NLP", "BERT", "XLM-R"],
      description:
        "Korean Hate Speech Detection In Cross-lingual Transfer Learning Embedding Models.",
      link: {
        label: "Korean Hate Speech Detection",
        href: "https://github.com/Byunk/Korean-Hate-Speech-Detection",
      },
    },
    {
      title: "kyungho.me",
      techStack: ["Side Project", "Next.js"],
      description:
        "Personal website built with Next.js and Tailwind CSS.",
      link: {
        label: "kyungho.me",
        href: "https://kyungho.me",
      },
    },
    {
      title: "mdtocify",
      techStack: ["Typescript", "npm"],
      description:
        "A simple and efficient npm library, fully written in TypeScript, that parses a Markdown string and generates a table of contents (TOC) based on the headings.",
      link: {
        label: "mdtocify",
        href: "https://www.npmjs.com/package/mdtocify",
      },
    },
    {
      title: "Winning rate prediction of the chess game result with GNN",
      techStack: ["graph neural network"],
      description:
        "GNN (GATv2) based chess game result prediction.",
      link: {
        label: "Winning rate prediction of the chess game result with GNN",
        href: "https://github.com/Byunk/Winning-rate-prediction-of-the-chess-game-result-with-GNN",
      },
    },
  ],
} as const;

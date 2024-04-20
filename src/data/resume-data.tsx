import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Kyungho Byoun",
  initials: "BK",
  location: "Seoul, South Korea",
  locationLink: "https://www.google.com/maps/place/Seoul",
  about:
    "Cloud Engineer @ SAP Labs Korea",
  summary:
    "As a cloud engineer, I have contributed to the architecture of reliable and scalable microservices deployed on complex Kubernetes clusters. Presently, I am focused on enhancing development efficiency and reducing costs with Istio.",
  avatarUrl: "https://kyungho-me-bucket.s3.ap-northeast-2.amazonaws.com/static/images/profile.jpeg",
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
      degree: "Bachelor's Degree in Aerospace Engineering and Computer Science",
      start: "2017",
      end: "2024",
    },
  ],
  work: [
    {
      company: "SAP Labs Korea",
      link: "https://sap.com",
      badges: [],
      title: "Associate Software Engineer",
      start: "2024.04",
      end: "present",
      description:
        "HANA Cloud Service team",
    },
    {
      company: "SAP Labs Korea",
      link: "https://sap.com",
      badges: [],
      title: "VT Internship",
      start: "2023.07",
      end: "2024.03",
      description:
        "HANA Cloud Service team",
    },
    {
      company: "KI-ITC Augmented Reality Research Centre, KAIST",
      link: "https://www.linkedin.com/company/kaistarrc/?originalSubdomain=kr",
      badges: [],
      title: "Undergraduate Researcher",
      start: "2022.07",
      end: "2023.06",
      description:
        "Developed an algorithm to estimate the level of sleep stage using a cardiorespiratory signals from smartmattress. Also, I implemented a system to analyze the incoming sleep data by using Node.js and AWS Lambda.",
    },
  ],
  skills: [
    "Python",
    "Kubernetes",
    "Docker",
    "Istio",
  ],
  projects: [
    {
      title: "KAIST Board of Audit and Inspection System",
      techStack: [
        "TypeScript",
        "Node.js",
        "PostgreSQL",
      ],
      description: "Developed a system to manage the audit and inspection process of KAIST.",
      link: {
        label: "BAI KAIST",
        href: "https://github.com/gdsc-kaist/board-of-audit-and-inspection-system",
      },
    },
    {
      title: "The Voice",
      techStack: [
        "Team Leader",
        "TypeScript",
        "Node.js",
        "Google Cloud",
        "BERT",
      ],
      description: "AI based scam detection system for preventing phishing attacks targeting seniors. Won global top 100 in Google Solution Challenge.",
      link: {
        label: "The Voice",
        href: "https://github.com/KAIST-Google-Solution-Challenge",
      },
    },
    {
      title: "Winning rate prediction of the chess game result with GNN",
      techStack: [
        "graph neural network",
      ],
      description: "Proposing a GATv2-based GNN model to utilize the structural information for chess game result prediction.",
      link: {
          label: "Winning rate prediction of the chess game result with GNN",
          href: "https://github.com/Byunk/Winning-rate-prediction-of-the-chess-game-result-with-GNN",
      },
    },
    {
      title: "Korean Hate Speech Detection",
      techStack: [
        "NLP",
        "BERT",
        "XLM-R",
      ],
      description: "Korean Hate Speech Detection In Cross-lingual Transfer Learning Embedding Models.",
      link: {
          label: "Korean Hate Speech Detection",
          href: "https://github.com/Byunk/Korean-Hate-Speech-Detection",
      },
    },
  ],
} as const;

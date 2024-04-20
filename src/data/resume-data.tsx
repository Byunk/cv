import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Kyungho Byoun",
  initials: "BK",
  location: "Seoul, South Korea",
  locationLink: "https://www.google.com/maps/place/Seoul",
  about:
    "Cloud Engineer @ SAP Labs Korea",
  summary:
    "As a cloud engineer, I've contributed on architecting reliable and scalable microservices, running on complicated Kubernetes clusters. Currently, I've focused on improving development efficiency and reducing its cost by introducing Istio",
  avatarUrl: "https://kyungho.me/static/images/profile.jpeg",
  personalWebsiteUrl: "https://kyungho.me",
  contact: {
    email: "kyungho.byoun@gmail.com",
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
      school: "Korea Advanced Institute of Science and Technology (KAIST)",
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
  ],
} as const;

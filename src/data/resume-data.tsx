import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Kyungho Byoun",
  initials: "BK",
  location: "Seoul, South Korea",
  locationLink: "https://www.google.com/maps/place/Seoul",
  about:
    "Backend Engineer passionate about solving complex problems and building scalable systems.",
  summary:
    "As a Backend Engineer, I have contributed on cloud infrastructure and microservices, in order to build scalable, reliable, and sustainable systems. I have an experience in leading teams, building products for solving problems around the world.",
  avatarUrl: "https://kyungho.me/about/profile.jpg",
  personalWebsiteUrl: "https://kyungho.me",
  contact: {
    email: "kyungho.byoun@gmail.com",
    tel: "+821086043347",
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
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Korea Advanced Institute of Science and Technology",
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
      title: "VT Intern",
      start: "2023",
      end: "present",
      description:
        "Working on SAP's cloud data & service enablement team, focusing on building sustainable and available system. Also, I am working on a project to reduce the cost of development with Istio and Kubernetes.",
    },
    {
      company: "KI-ITC Augmented Reality Research Centre, KAIST",
      link: "https://www.linkedin.com/company/kaistarrc/?originalSubdomain=kr",
      badges: ["Remote"],
      title: "Undergraduate Researcher",
      start: "2022",
      end: "2023",
      description:
        "Developed an algorithm to estimate the level of sleep stage using a cardiorespiratory signals from smartmattress. Also, I implemented a system to analyze the incoming sleep data by using Node.js and AWS Lambda.",
    },
  ],
  skills: [
    "Python",
    "Kubernetes",
    "Docker",
    "Istio",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
  ],
  projects: [
    {
      title: "KAIST Board of Audit and Inspection System",
      techStack: [
        "Backend Developer",
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
        "Backend Developer",
        "Google Cloud",
        "Team Leader",
        "TypeScript",
        "Node.js",
        "AI",
      ],
      description: "AI based scam detection system for preventing phishing attacks targeting seniors. Won global top 100 in Google Solution Challenge.",
      link: {
        label: "The Voice",
        href: "https://github.com/KAIST-Google-Solution-Challenge",
      },
    },
  ],
} as const;

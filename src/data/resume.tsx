import { Icons } from "@/components/icons";
import { HomeIcon, FolderOpenIcon, Database, Globe, FileTextIcon } from "lucide-react";
import { SiPython, SiJavascript, SiDjango, SiHtml5, SiCss, SiBootstrap, SiFlutter, SiPostgresql, SiMysql, SiMongodb, SiGit, SiGithub, SiPostman, SiFirebase, SiRailway, SiVercel } from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const DATA = {
  name: "Akkshaya Kumar R V",
  initials: "AK",
  url: "https://akkshaya.dev",
  location: "Chennai, India",
  locationLink: "https://www.google.com/maps/place/Chennai",
  description:
    "Software Engineering Student building backend systems, fintech workflows, and practical full-stack products.",
  intro:
    "",
  summary:
    "I’m Akkshay, an IT student at SSN College of Engineering who likes building software that feels useful, scalable, and just a little over-engineered in the fun way. Most of my time goes into backend systems, full-stack projects, and figuring out how real products should behave once actual users, messy workflows, and edge cases enter the picture.\n\nLately, I’ve been spending a lot of time working with Django, REST APIs, databases, authentication flows, and role-based systems, while also exploring how to build products that are clean on the inside and intuitive on the outside. I’m especially drawn to projects where software has to do more than just “work” — things like fintech workflows, admin systems, internal tools, and apps built around real-world constraints.\n\nWhen I’m not coding, I’m usually thinking about how to make systems better, cleaner, or faster than they strictly need to be, which is probably why I enjoy debugging architecture decisions almost as much as building features. Right now, I’m focused on becoming a stronger backend/full-stack engineer, building projects I’d actually be proud to talk about in an interview, and learning the kind of engineering that holds up outside tutorial land.",
  avatarUrl: "/akkshay-cool.jpg",
  skills: [
    {
      category: "Languages",
      items: [
        { name: "Java", icon: FaJava },
        { name: "Python", icon: SiPython },
        { name: "JavaScript", icon: SiJavascript },
        { name: "SQL", icon: Database },
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss },
      ]
    },
    {
      category: "Frameworks & APIs",
      items: [
        { name: "Django", icon: SiDjango },
        { name: "Django REST Framework", icon: SiDjango },
        { name: "REST APIs", icon: Globe },
        { name: "Bootstrap", icon: SiBootstrap },
        { name: "Flutter", icon: SiFlutter },
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
        { name: "MongoDB", icon: SiMongodb },
      ]
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Postman", icon: SiPostman },
        { name: "Firebase", icon: SiFirebase },
        { name: "Railway", icon: SiRailway },
        { name: "Vercel", icon: SiVercel },
      ]
    }
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: FolderOpenIcon, label: "Projects" },
    { href: "/Akkshay-Resume.pdf", icon: FileTextIcon, label: "Resume" },
  ],
  contact: {
    email: "akkshay0312@gmail.com",
    tel: "",
    message:
      "I'm currently focused on software engineering internships and backend/full-stack opportunities where I can work on real systems, learn from strong teams, and contribute meaningfully to product development.\n\nIf you'd like to discuss a project, internship opportunity, or engineering collaboration, feel free to reach out.",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/akki0312-tech",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:akkshay0312@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Datamoo.ai",
      href: "https://datamoo.ai",
      badges: [],
      location: "Remote",
      title: "Software Developer Intern",
      logoUrl: "/datamoo-logo.jpg",
      start: "June 2026",
      end: "July 2026",
      description:
        "- Developed backend APIs for a **Loan Management System** using **Django** and **Django REST Framework**, supporting internal workflows and data-driven operational features.\n- Implemented **JWT authentication and custom token logic**, enabling secure access control and user-specific workflow handling across the application.\n- Built **CRUD, filtering, and search endpoints** for core modules, improving data management and usability for internal stakeholders.\n- Worked on **bulk API operations, dashboard aggregates, and reporting-oriented endpoints** to support high-volume data handling and business visibility.\n- Explored backend design patterns for **role-based access control, scalable API design, and maintainable system architecture** in a multi-role environment.",
    },
  ],
  education: [
    {
      school: "SSN College of Engineering",
      href: "https://www.ssn.edu.in/",
      degree: "B.Tech in Information Technology",
      logoUrl: "/ssn-logo.jpg",
      start: "2024",
      end: "2028",
      description: "**Core Committee Member**\n*ProCode IT SSN* (May 2026 - Present)\n\n**Member of Tech team**\n*SSN-SNUC MUN Society* (May 2026 - Present)\n\n**SSN IEEE Computer Society**\n* **Editorial Team Member** (Mar 2026 - Present)\n* **Student Volunteer** (Sep 2025 - Mar 2026)\n\n**Relevant Coursework:** Problem Solving & Python Programming · Programming in C & Data Structures · Introduction to Web Programming · ObjectOriented Programming using Java · Database Technology · Principles of Software Engineering & Practices · Digital Systems & Microprocessors Design · Introduction to Digital Communication · Pattern Recognition & Machine Learning · Data Analytics & Visualization · Advanced Data Structures & Algorithm Analysis · Signal Processing for Machine Learning · Data Communication & Networks · Computer Organization",
    },
  ],
  projects: [
    {
      title: "Loan Management System Backend",
      href: "#",
      dates: "2025 - Present",
      active: true,
      description:
        "A backend-heavy fintech-style workflow system designed around multi-role operations, structured data flows, and operational management features.\n\n- Designed and implemented backend APIs for workflow-driven modules.\n- Worked with JWT-based authentication and role-aware access flows.\n- Built support for filtering, search, and dashboard-style aggregate requirements.\n- Thought through backend concerns such as maintainability, access control, and scaling behavior for real usage.",
      technologies: [
        "Django",
        "Django REST Framework",
        "PostgreSQL",
        "JWT",
      ],
      links: [
        { type: "Website", href: "#", icon: <Globe className="size-3" /> },
        { type: "Source", href: "https://github.com/akki0312-tech", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Namma Ration",
      href: "https://github.com/akki0312-tech/Namma-ration-flutter",
      dates: "Hackathon Project",
      active: true,
      description:
        "A hackathon project aimed at improving access to public distribution services by reducing friction for end users through mobile and IVR-based interactions.\n\n- Helped build a system concept that combines mobile workflows with accessible service interactions.\n- Worked on product logic and application structure around ration distribution use cases.\n- Contributed to a practical system intended for real users rather than a purely demo-oriented prototype.",
      technologies: ["Flutter", "Firebase", "Dialogflow CX"],
      links: [
        { type: "Source", href: "https://github.com/akki0312-tech/Namma-ration-flutter", icon: <Icons.github className="size-3" /> },
      ],
      image: "/nammaration.png",
      video: "",
    },
    {
      title: "ByteZee - Food delivery website",
      href: "https://akki0312-tech.github.io/ByteZee/",
      dates: "2024",
      active: true,
      description:
        "A frontend-focused project built to explore user experience, interface structure, and feature design in a consumer-facing web application.\n\n- Built responsive UI screens and interactive sections for a food delivery experience.\n- Explored feature ideas such as item discovery, customization flows, support access, and user-friendly navigation.\n- Used the project as a foundation for understanding how product features and frontend behavior come together in real applications.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      links: [
        { type: "Website", href: "https://akki0312-tech.github.io/ByteZee/", icon: <Globe className="size-3" /> },
        { type: "Source", href: "https://github.com/akki0312-tech/ByteZee.git", icon: <Icons.github className="size-3" /> },
      ],
      image: "/bytezee.png",
      video: "",
    },
    {
      title: "FraudLens",
      href: "https://github.com/Shravanthi-D/SAR-AI-Narrative-Generator.git",
      dates: "Hackathon Project",
      active: true,
      description:
        "- Built an AI-powered narrative generation system that transformed structured financial / reporting data into human-readable summaries, reducing manual report-writing effort by ~60–70% for repetitive narrative tasks.\n- Designed a pipeline to process 100+ structured records per run and generate context-aware narratives for business / reporting workflows with consistent formatting and clearer stakeholder communication.\n- Improved the readability of raw tabular outputs by converting key metrics, trends, and observations into concise narratives, helping reduce the time spent interpreting data by ~90%.\n- Worked on prompt design and output structuring to generate accurate, concise, and domain-aligned summaries, improving narrative consistency across multiple reporting scenarios.\n- Positioned the project as an AI-assisted reporting tool capable of scaling narrative generation for recurring financial / operational summaries without relying on fully manual drafting.",
      technologies: ["AI", "Python", "Prompt Engineering"],
      links: [
        { type: "Source", href: "https://github.com/Shravanthi-D/SAR-AI-Narrative-Generator.git", icon: <Icons.github className="size-3" /> },
      ],
      image: "/fraudlens.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "GDG TechSprint ’26",
      dates: "2026",
      location: "SSN College of Engineering, Chennai",
      description: "2nd Runner Up (Among 80+ teams)",
      image: "/ssn-logo.jpg",
      links: [],
    },
    {
      title: "Nourishnovate’26",
      dates: "2026",
      location: "REC, Chennai",
      description: "Runner Up (Outperformed 120+ teams across South India)",
      image: "/titanium-rec.png",
      links: [],
    },
    {
      title: "ProCode Cup’26",
      dates: "2026",
      location: "SSN College of Engineering, Chennai",
      description: "Special Mention",
      image: "/ssn-logo.jpg",
      links: [],
    },
  ],
  certifications: [
    {
      title: "Generative AI Leader",
      image: "/Generative AI Leader.jpg",
      issuer: "",
      date: "2024",
    },
    {
      title: "Introduction to Industry 4.0 and Industrial Internet of Things",
      image: "/Introduction to industry 4.0 and industrial internet of things.jpg",
      issuer: "",
      date: "2024",
    },
    {
      title: "Prompt Engineering by IBM",
      image: "/Prompt Engineering by IBM.jpg",
      issuer: "IBM",
      date: "2024",
    },
  ],
} as const;

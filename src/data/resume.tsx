import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Python } from "@/components/ui/svgs/python";

export const DATA = {
  name: "Akkshaya Kumar R V",
  initials: "AK",
  url: "https://akkshaya.dev",
  location: "Chennai, India",
  locationLink: "https://www.google.com/maps/place/Chennai",
  description:
    "Software Engineering Student building backend systems, fintech workflows, and practical full-stack products.",
  intro:
    "I'm an Information Technology student at SSN College of Engineering, Chennai, with a strong interest in backend engineering, scalable application design, and real-world software systems. I enjoy building products that go beyond basic CRUD apps — from fintech-style workflow systems and role-based admin platforms to public-service and accessibility-focused applications.\n\nCurrently, I'm focused on strengthening my backend fundamentals through Django, REST APIs, database design, authentication systems, and production-style engineering practices. I'm especially interested in systems where correctness, maintainability, and operational clarity matter — such as finance, internal tools, and workflow automation.",
  summary:
    "I'm a second-year IT student at [SSN College of Engineering, Chennai](#education), and I enjoy building software that solves practical problems with clean engineering. My work so far has ranged from full-stack and mobile applications to backend systems involving authentication, role-based access control, bulk operations, dashboards, and workflow design.\n\nI'm particularly interested in backend-heavy systems and engineering problems that sit at the intersection of software design and business logic — such as loan workflows, internal admin tools, notification systems, and public-service applications. I like thinking through how software behaves in real usage: who is allowed to do what, how data should flow between components, how APIs should scale, and how systems can remain maintainable as requirements grow.\n\nOutside of coursework, I've worked on hackathon products, internship projects, and independent builds that helped me learn by doing. I care about writing code that is understandable, extensible, and useful — not just functional.",
  avatarUrl: "/Akkshay.jpeg",
  skills: [
    { name: "Java" },
    { name: "Python", icon: Python },
    { name: "JavaScript" },
    { name: "SQL" },
    { name: "Django" },
    { name: "Django REST Framework" },
    { name: "REST APIs" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "Bootstrap" },
    { name: "Flutter" },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MySQL" },
    { name: "MongoDB" },
    { name: "Git" },
    { name: "GitHub" },
    { name: "Postman" },
    { name: "Firebase" },
    { name: "Railway" },
    { name: "Vercel" },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
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
      end: "Present",
      description:
        "Worked on backend engineering tasks for an internal loan management / workflow-oriented system, with a focus on API development, data handling, and role-aware application logic.\n\n- Built and extended backend APIs using Django and Django REST Framework for operational workflows.\n- Worked on authentication, structured data handling, filtering/search features, and dashboard-related backend tasks.\n- Explored role-based access patterns and backend design considerations for multi-user systems involving admins, managers, and operational users.\n- Contributed to practical engineering tasks such as API design, model relationships, serializer logic, and workflow-oriented backend features.",
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
      links: [],
      image: "",
      video: "",
    },
    {
      title: "IVR-Enabled Public Distribution / Ration Access System",
      href: "#",
      dates: "Hackathon Project",
      active: true,
      description:
        "A hackathon project aimed at improving access to public distribution services by reducing friction for end users through mobile and IVR-based interactions.\n\n- Helped build a system concept that combines mobile workflows with accessible service interactions.\n- Worked on product logic and application structure around ration distribution use cases.\n- Contributed to a practical system intended for real users rather than a purely demo-oriented prototype.",
      technologies: ["Flutter", "Firebase", "Dialogflow CX"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Food Delivery Website",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "A frontend-focused project built to explore user experience, interface structure, and feature design in a consumer-facing web application.\n\n- Built responsive UI screens and interactive sections for a food delivery experience.\n- Explored feature ideas such as item discovery, customization flows, support access, and user-friendly navigation.\n- Used the project as a foundation for understanding how product features and frontend behavior come together in real applications.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "College Hackathon Winner",
      dates: "2024 - 2026",
      location: "SSN College of Engineering, Chennai",
      description:
        "Winner / top-finishing participant at multiple college hackathons, including competitive team-based product development events.",
      image: "",
      links: [],
    },
    {
      title: "Hackathon Product Builder",
      dates: "2024 - 2026",
      location: "Various college events",
      description:
        "Built and presented practical software solutions in hackathon settings involving real-world problem statements and constrained timelines.",
      image: "",
      links: [],
    },
    {
      title: "Continuous Engineering Growth",
      dates: "Ongoing",
      location: "Alongside academics",
      description:
        "Continuously working on backend engineering, full-stack development, and software systems preparation alongside coursework.",
      image: "",
      links: [],
    },
  ],
} as const;

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact
} from "react-icons/fa";

import { SiTailwindcss, SiVite } from "react-icons/si";

export const personalInfo = {
  name: "Madhav Dhyani",
  role: "Backend Developer",
  bio: "Hi, This is Madhav Dhyani, a passionate Backend Developer.",
  email: "dhyani.pankaj811@gmail.com",
  phone: "+91 9602938300",
  location: "Indore, India",
  github: "https://github.com/madhavdhyani",
  linkedin: "https://linkedin.com/in/madhavdhyani",
  resume: "/resume.pdf"
};

export const skills = [
  {
    id: 1,
    name: "HTML5",
    icon: FaHtml5,
    progress:95,
    description:"Expert in structuring web content with semantic HTML, accessibility, and SEO-friendly markup.",
    type:"frontend",

  },
  {
    id: 2,
    name: "CSS3",
    icon: FaCss3Alt,
    progress:80,
    description: "Proficient in creating responsive layouts, animations, Flexbox, Grid, and modern UI designs.",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: FaJs,
    progress:100,
    description: "Skilled in writing clean ES6+ JavaScript, DOM manipulation, asynchronous programming, and APIs.",
  },
  {
    id: 4,
    name: "React",
    icon: FaReact,
    progress:100,
    description: "Experienced in building reusable components, managing state, routing, and developing scalable React applications.",
  },
  {
    id: 5,
    name: "Vite",
    icon: SiVite,
    progress:85,
    description: "Fast build tool used for creating modern React applications with optimized development and production builds.",
  },
  {
    id: 6,
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    progress:90,
    description: "Utility-first CSS framework for building responsive, modern, and highly customizable user interfaces.",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A beautiful, fully responsive shopping app with a working cart and seamless checkout process.",
    image: "./assets/project1.jpg", 
    technologies: ["React", "CSS", "Node.js"],
    liveLink: "https://your-live-site.com",
    githubLink: "https://github.com/yourusername/project1"
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description: "An incredibly fast weather application fetching real-time data from a live API.",
    image: "./assets/project2.jpg",
    technologies: ["JavaScript", "HTML", "API"],
    liveLink: "https://your-live-site2.com",
    githubLink: "https://github.com/yourusername/project2"
  }
];

export const MENU_LINKS = [
  {
    id: 1,
    label: "Home",
    to: "home",
    offset: -80,
  },
  {
    id: 2,
    label: "About",
    to: "about",
    offset: -80,
  },
  {
    id: 3,
    label: "Skills",
    to: "skills",
    offset: -80,
  },
  {
    id: 4,
    label: "Projects",
    to: "projects",
    offset: -80,
  },
  {
    id: 5,
    label: "Contact",
    to: "contact",
    offset: -80,
  },
];

export const STATS = [
  { id: 1, count: "02+", label: "Years of\nExperience" },
  { id: 2, count: "10+", label: "Projects\nCompleted" },
  { id: 3, count: "15+", label: "Technologies\nMastered" }
];


export const SKILL_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "Frontend", value: "frontend" },
  { id: "03", label: "Backend", value: "backend" },
  { id: "04", label: "Tools", value: "tools" },
  { id: "05", label: "Skills", value: "soft-skills" },
  
];


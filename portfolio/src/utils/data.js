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
  { id: 1, name: "HTML5" },
  { id: 2, name: "CSS3" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "React" },
  { id: 5, name: "Vite" },
  { id: 6, name: "Tailwind CSS" }
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
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
];


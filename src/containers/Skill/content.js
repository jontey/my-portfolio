import {
  faNodeJs,
  faJs,
  faPython,
  faPhp,
  faReact,
  faWordpressSimple,
  faDocker,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import {
  faServer,
  faCloud,
  faMobile,
  faDatabase,
  faCogs,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const Skills = [
  {
    title: "Enterprise Solutions",
    icon: { ...faServer },
    description: "Custom ERP systems, inventory management, and multi-branch operational platforms that scale with your business needs.",
  },
  {
    title: "Cloud Architecture",
    icon: { ...faCloud },
    description: "Scalable, cloud-ready applications with modern deployment strategies using containerization and microservices.",
  },
  {
    title: "Full-Stack Development", 
    icon: { ...faReact },
    description: "End-to-end web applications using React, Node.js, Python, and modern JavaScript frameworks for seamless user experiences.",
  },
  {
    title: "Digital Transformation",
    icon: { ...faRocket },
    description: "Modernizing legacy systems and processes, helping businesses transition to efficient, data-driven operations.",
  },
  {
    title: "Mobile & Responsive",
    icon: { ...faMobile },
    description: "Cross-platform solutions with mobile-first design principles and Progressive Web App capabilities.",
  },
  {
    title: "DevOps & Integration",
    icon: { ...faDocker },
    description: "Streamlined deployment pipelines, API integrations, and automated workflows that reduce operational overhead.",
  },
];

export default Skills;

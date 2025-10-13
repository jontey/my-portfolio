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
    title: "Enterprise Software Solutions",
    icon: { ...faServer },
    description: "Custom ERP development, real-time inventory management systems, and multi-branch operational platforms. Scalable enterprise architecture for manufacturing, retail, and distribution businesses. Technologies: Python, Django, PostgreSQL, React, microservices.",
  },
  {
    title: "Cloud Architecture & Migration",
    icon: { ...faCloud },
    description: "Cloud-native solutions using AWS, Azure, and Google Cloud. Docker containerization, Kubernetes orchestration, and serverless architectures. Migration strategies for legacy system modernization and cloud-ready deployment.",
  },
  {
    title: "Full-Stack Development",
    icon: { ...faReact },
    description: "End-to-end web application development using React (Hooks, Context, Redux), Node.js (Express, NestJS), Python (Django, Flask), and TypeScript. RESTful APIs, GraphQL, and modern SPA architecture with 10+ years hands-on experience.",
  },
  {
    title: "Digital Transformation & Consulting",
    icon: { ...faRocket },
    description: "Technical consulting for system architecture and technology strategy. Legacy system modernization, process automation, and data-driven operations. Helping SMEs and enterprises transition to efficient, scalable digital solutions.",
  },
  {
    title: "Mobile & Progressive Web Apps",
    icon: { ...faMobile },
    description: "Cross-platform solutions with mobile-first design principles. Progressive Web App (PWA) development, responsive interfaces, and offline-capable applications. React Native and hybrid mobile strategies.",
  },
  {
    title: "DevOps & API Integration",
    icon: { ...faDocker },
    description: "CI/CD pipelines with GitLab CI, GitHub Actions, and Jenkins. Docker containerization, Infrastructure as Code (Terraform), API development and third-party integrations. Automated testing and deployment workflows.",
  },
];

export default Skills;

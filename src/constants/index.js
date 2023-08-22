import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,

} from "../assets";
import sis  from '../assets/sis.png'
import Maimunapharm from '../assets/Maimunapharm.png'
import Devport from '../assets/Devport.png'
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
 
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
];

const experiences = [
  {
    title: "IT Support Technician",
    company_name: "NYSC, Petroleum Equalization Fund (Management) Board",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Nov 2015 – Nov 2016",
    points: [
      "Diagnosed and resolved hardware, software, operating systems, applications, and network connectivity issues.",
      "Responded to inquiries and support requests and followed established protocols to prioritize and manage requests.",
      "Installed, configured, and maintained computer hardware, peripherals, and software applications.",
      "Conducted routine maintenance tasks, including system backups, updates, and patches to ensure system reliability and security.",
      "Assisting with the implementation and maintenance of security measures, including antivirus software, firewalls, and access controls."
    ],
  },
  {
    title: "Web Developer",
    company_name: "Tamsu Global",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jun 2019 – Apr 2023",
    points: [
      "Applied development best practices, design patterns, and coding standards to ensure high-quality development.",
      "Wrote clean, efficient, and maintainable code using programming languages such as Java, Python, C++, or JavaScript.",
      "Conducted unit testing, integration testing, and system testing to identify and fix bugs or issues in software.",
      "Used debugging tools and techniques to troubleshoot and resolve problems, ensuring the software functions as intended.",
      "Created technical documentation, including user manuals, technical specifications, and system documentation, to facilitate understanding and maintenance of software.",
      "Adhered to project timelines, deliverables, and quality standards throughout the development lifecycle."
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Niger Delta Power Holding Company",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug 2018 – Present",
    points: [
      "Create dynamic and responsive web applications using a unified JavaScript codebase.",
      "Work with web technologies such as HTML, CSS, and JavaScript to create visually appealing and interactive user interfaces.",
      "Collaborate with UI/UX designers to transform design concepts into functional web pages and user interfaces.",
      "Utilize front-end libraries and frameworks like React.js, Angular, Vue.js, or jQuery to streamline development and enhance interactivity.",
      "Implement server-side security measures, handle user authentication, and ensure data integrity and privacy."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SIS",
    description:
      " Contributed to a MERN stack web application development, used in schools to calculate grade point average of students and to manage course registrations and check grades.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      }
    ],
    image: sis,
    source_code_link: "https://github.com/",
  },
  {
    name: "Maimuna's Online Pharmacy",
    description:
      "Web application that enables users to buy and inquire for medicine online through an e-commerce store.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "scss",
        color: "white-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "orange-text-gradient",
      },
      {
        name: "paystack",
        color: "white-text-gradient",
      }
    ],
    image: Maimunapharm,
    source_code_link: "https://github.com/",
  },
  {
    name: "Developer Portfolio",
    description:
      "This developer portfolio that showcases my skills using a combination of technologies",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "three js",
        color: "orange-text-gradient",
      },
      
    ],
    image: Devport,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
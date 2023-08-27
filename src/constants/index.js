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
  book,
  linde,
  showme,
  portfolio,
  threejs,
  successrobot,
  failurerobot,
} from "../assets";

export const navLinks = [
  {
    id: "About",
    title: "About",
  },
  {
    id: "Work",
    title: "Work",
  },
  {
    id: "Contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const linkedIn = "https://www.linkedin.com/in/jacky-chiu/";

const experiences = [
  {
    title: "Educational Mentor",
    company_name: "",
    icon: book,
    iconBg: "#E6DEDD",
    date: "April 2019 - Present",
    points: [
      "Elevated students' CAASPP ELA state test scores by a minimum of one level, leading to improved overall language arts performance.",
      "Sustained students' CAASPP Math test scores at the highest achievable level of 4, demonstrating consistent academic excellence.",
      "Significantly elevated students' Lexile level by a range of 200-300 points annually, enhancing their reading comprehension and literacy skills.",
    ],
  },
  {
    title: "Operations Manager",
    company_name: "Praxair, Inc - a Linde Company",
    icon: linde,
    iconBg: "#383E56",
    date: "Sep 2013 - Jun 2017",
    points: [
      "Directed operations and strategically reduced overtime by 15% year over year, optimizing workforce utilization through effective cross-training initiatives.",
      "Introduced and successfully managed a cost control working stock program, resulting in a notable reduction of $300K in new asset procurement expenses.",
      "Enhanced asset utilization by a notable 5%, maximizing operational efficiency and return on investments.",
      "Spearheaded gas order fulfillment for 21 branches across Southern California, ensuring smooth and timely supply chain operations.",
      "Fostered improved union relations and heightened employee engagement, contributing to a reduction in the number of grievances and a more harmonious workplace environment.",
    ],
  },
  {
    title: "Production Supervisor",
    company_name: "Praxair, Inc - a Linde Company",
    icon: linde,
    iconBg: "#383E56",
    date: "May 2012 - Sep 2013",
    points: [
      "Managed production processes, optimizing schedules for on-time deliverables.",
      "Exceeded efficiency and performance targets, upholding operational excellence.",
      "Enforced safety protocols, ensuring a secure work environment.",
      "Ensured strict compliance with Quality Management Systems, GMPs, and quality standards.",
    ],
  },
  {
    title: "Quality Assurance Specialist",
    company_name: "Praxair, Inc - a Linde Company",
    icon: linde,
    iconBg: "#383E56",
    date: "May 2007 - May 2012",
    points: [
      "Reviewed and investigated customer complaints and non conformances.",
      "Released specialty gas, medical devices and medical drug products.",
      "Validated medical processes and equipment in accordance with FDA.",
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
    name: "Show ME",
    description:
      "Show ME is used as a tool to help students write vivid and exciting sentences. Each day of the challenge, students will be given a different simple tell sentence. The goal is for the student to formulate and come up with a more descriptive sentence. Show ME will keep track of the submitted sentences, and students can edit them at any time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "REST API",
        color: "orange-text-gradient",
      },
    ],
    image: showme,
    source_code_link: "https://github.com/ragedestiny/showme-client",
    live_link: "https://show-me-not-tell.netlify.app/",
  },
  {
    name: "3D Portfolio",
    description:
      "Inspired by JavaScript Mastery, this portfolio leverages 3D models for an immersive display of projects. While mobile-friendly, it might not perform optimally on older Android phones due to limitations in the Android Chrome browser for 3D rendering.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/ragedestiny/3d-portfolio",
    live_link: "https://jackychiu.netlify.app/",
  },
];

const emailStatus = [
  {
    status: true,
    image: successrobot,
    alt: "Artificial Intelligence Png vectors by Lovepik.com",
  },
  {
    status: false,
    image: failurerobot,
    alt: "Material Png vectors by Lovepik.com",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  emailStatus,
  linkedIn,
};

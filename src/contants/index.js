import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  github,
  MoiveTicket,
  Omnifood,
  Quiz,
  PWebsite,
  JokeTeller,
  NASA,
  MNTN,
  QuincilWebsite,
  FreshCart,
} from "../assets";

import Bootstrap from "../assets/tech/bootstrap.png";
import Quencil from "../assets/company/quencil.png";
import BWS from "../assets/company/BWS.png";
import Spark from "../assets/company/spark.png";

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
    id: "project",
    title: "Project",
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
  {
    title: "Content Creator",
    icon: creator,
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
    name: "JavaScript Es6",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Quencil Pvt Ltd",
    icon: Quencil,
    iconBg: "#383E56",
    date: "Jan 2023 to March 2023",
    points: [
      "Developed a fully responsive company website using React and Tailwind CSS.",
      "Learned and applied Git for version control and collaborative development with the team.",
      "Adapted quickly to new technologies and tools, including learning new programming languages and frameworks as needed.",
      "Contributed to code reviews and provided constructive feedback to team members to improve code quality and maintainability.",
      "Maintained clear communication with team members to ensure project requirements were met and goals were achieved.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "The Sparks Foundation,",
    icon: Spark,
    iconBg: "#E6DEDD",
    date: "Jan 2023 to feb 2023 ",
    points: [
      "Utilized web development abilities to create a custom payment integration website for an NGO, which included a Razorpay button in trial mode, allowing the organization to collect online payments",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Business Web Solutions",
    icon: BWS,
    iconBg: "#383E56",
    date: "Dec 2022 to Feb 2023.",
    points: [
      "Completed a comprehensive web development training program in Python, jQuery, Bootstrap, JavaScript, CSS, and HTML5 under the  guidance of an experienced mentor.",
      "Acquired foundational web development skills through hands-on training and practical application of web development frameworks and programming languages",
    ],
  },
];

const projects = [
  {
    name: "TV Show Booking Website",
    description:
      "This repository contains the source code and assets for a React-based Single Page Application (SPA) that allows users to select TV shows, view detailed information about them, and book movie tickets.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "HTML5",
        color: "pink-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: MoiveTicket,
    source_code_link:
      "https://github.com/LakshyaRoy/ReactJs-Assignment/tree/main",
    website_link: "https://incredible-babka-1a0aad.netlify.app/",
  },
  {
    name: "Omnifood",
    description:
      "This is a responsive landing page for Omnifood, a fictional food delivery service. It's built using HTML, CSS, and JavaScript, and adapts to different devices including desktops, laptops, tablets, and smartphones.",
    tags: [
      {
        name: "HTML5",
        color: "pink-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: Omnifood,
    source_code_link: "https://github.com/LakshyaRoy/Omnifood--project",
    website_link: "https://omnifood-lakshya.netlify.app/",
  },
  {
    name: "Quiz App",
    description: `Users can access the admin panel by entering "Lakshya" as the first name and "Roy" as the last name. They can create quizzes, perform CRUD operations, and view scores in the result section.`,
    tags: [
      {
        name: "HTML5",
        color: "pink-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: Quiz,
    source_code_link: "https://github.com/LakshyaRoy/Quiz-App/tree/main",
    website_link: "https://lakshyaroy.github.io/Quiz-App/",
  },
  {
    name: "PUTATOE-One-Solution",
    description: `PUTATOE-One-Solution's official website, built with React, React-Slick, and Tailwind CSS, utilizes the map method to dynamically display content from a JSON file. Offering innovative solutions across industries.`,
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JSON",
        color: "green-text-gradient",
      },

      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "AOS Animate On Scroll Library",
        color: "pink-text-gradient",
      },
    ],
    image: PWebsite,
    source_code_link:
      "https://github.com/LakshyaRoy/PUTATOE-One-Solution/tree/main",
    website_link: "https://putatoe-one-solution.netlify.app/",
  },
  {
    name: "Joke Teller ",
    description: `This web application is designed to entertain users by telling jokes. It leverages the JokeAPI to retrieve jokes and utilizes the ResponsiveVoice.js library to audibly speak them to the users.`,
    tags: [
      {
        name: "ResponsiveVoice.js",
        color: "blue-text-gradient",
      },
      {
        name: "JokeAPI",
        color: "green-text-gradient",
      },
      {
        name: "HTML5",
        color: "pink-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: JokeTeller,
    source_code_link: "https://github.com/LakshyaRoy/joke-teller",
    website_link: "https://lakshyaroy.github.io/joke-teller/",
  },
  {
    name: "NASA API  ",
    description: `This web application utilizes the NASA API to fetch and display various images and information related to space and astronomy,Users can explore celestial bodies, galaxies, and more.`,
    tags: [
      {
        name: "NASA API",
        color: "green-text-gradient",
      },
      {
        name: "HTML5",
        color: "pink-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Responsive At All Devices",
        color: "pink-text-gradient",
      },
    ],
    image: NASA,
    source_code_link: "https://github.com/LakshyaRoy/NASA_API/tree/main",
    website_link: "https://lakshyaroy.github.io/NASA_API/",
  },
  {
    name: "MNTN Website",
    description: `Welcome to MNTN! Find hiking info, gear essentials, team details, blog articles, and personalized accounts. Get inspired by a man walking over mountains and start your hiking journey now.`,
    tags: [
      {
        name: "Responsive Design",
        color: "blue-text-gradient",
      },

      {
        name: "HTML5",
        color: "pink-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: MNTN,
    source_code_link:
      "https://github.com/LakshyaRoy/MNTN-start-climbing/tree/master",
    website_link: "https://mntn-start-climbing-lakshya.netlify.app/",
  },
  {
    name: "Quencil Website ",
    description: `This website is designed to explore various sections such as Home, Career Camp, Technical Course, Non-Technical Course, Training Journey, and Contact Us. Just a Demo website For the Company. `,
    tags: [
      {
        name: "Responsive Design",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "HTML5",
        color: "pink-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: QuincilWebsite,
    source_code_link: "https://github.com/LakshyaRoy/Quencil-test-project-",
    website_link: "https://quincil-demo-site.netlify.app/",
  },
  {
    name: "Fresh Cart website ",
    description: `This repository contains a clone of the Fresh Cart website's home page using Bootstrap framework.
    The cloned website can be accessed , It replicates the design and layout of the original Fresh Cart home page.`,
    tags: [
      {
        name: "Responsive Design",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "HTML5",
        color: "pink-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: FreshCart,
    source_code_link: "https://github.com/LakshyaRoy/fresh-cart-bootstrap",
    website_link: "https://freshcartclone-bootstrap.netlify.app/",
  },
];

export { services, technologies, experiences, projects };

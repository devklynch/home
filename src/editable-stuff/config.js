// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Devlin",
  middleName: "",
  lastName: "Lynch",
  message: "Solving problems and creating impact through technology",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/devklynch",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/devlin-lynch/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/main_image.png"),
  imageSize: 375,
  message:
    "I'm a project manager turned software engineer who loves bringing ideas to life, making things easier for people, and getting creative with problem-solving. In my time as a project manager, I worked closely with developers to define requirements, compile use cases, and manage feature development. I also collaborated with third parties on integrations, which sparked my interest in software development and inspired me to create the solutions I once managed. Now, I combine my ability to understand projects at both a high level and in detail with my engineering skills and strong documentation practices to build thoughtful, effective solutions.",
  resume:
    "https://docs.google.com/document/d/1wNXUJfcxN-QXpSMIt-QSGXo4GbYmPCMp8oHA2sVUDGY/edit?usp=sharing",
};

// PROJECTS SECTION
const repos = {
  show: true,
  heading: "Recent Projects",
  projects: [
    {
      title: "Smart Gardening",
      description:
        "React-based app that provides personal plant recommendations using OpenAI and Google Cloud APIs, allowing users to save and manage plants based on their garden condtions. I worked on developing the My Garden functionality to save, delete, and display plants on both the React frontend and Rails backend. I also learned about and then implemented testing with Cypress to ensure a working and accessible front-end.",
      img: require("../editable-stuff/smart_gardening.gif"),
      backendrepo: "https://github.com/sethverrill/smart-gardening-be",
      frontendrepo: "https://github.com/wally-yawn/smart_gardening_fe",
      deployedsite: "https://smart-gardening-fe.vercel.app/",
    },
    {
      title: "Music Festival",
      description:
        "This project focused on a full stack app for a music festival organization service. This project features a Ruby on Rails REST API backend adhering to object-oriented programming principles, with robust data relationships between users, shows, and personalized schedules. The responsive React frontend delivers an intuitive user experience, allowing festival administrators to view, manage, and modify user schedules with ease. Implemented advanced features including schedule filtering, show removal functionality, and comprehensive schedule details display. This was completed in 16 hours over 3 days. The app demonstrates my ability to build a well-structured full-stack app, balancing back-end functionality with a user-friendly interface.",
      img: require("../editable-stuff/MusicFE.gif"),
      backendrepo: "https://github.com/devklynch/music_festival_be",
      frontendrepo: "https://github.com/devklynch/music_festival_fe",
    },
    {
      title: "Rancid Tomatillos",
      description:
        "This project focused on creating a dynamic moving voting app where a user can vote on movies as well as view details about the movie like genre and summary. For this project I focused on ingesting movie data from an API and working on the React components to display movie details and implement React Router to navigate different movie pages. I also worked on end to end testing with cypress.",
      img: require("../editable-stuff/rancid_tomatillos.gif"),
      frontendrepo: "https://github.com/TDManning/rancid-tomatillos",
      deployedsite:
        "https://rancid-tomatillos-a8epnhzkd-tdmannings-projects.vercel.app/",
    },
  ],
};

// Education SECTION
const education = {
  show: true,
  heading: "Education",
  listings: [
    {
      school: "Turing School of Software and Design",
      description: [
        "1,500 hour, 7-month intensive ACCET-accredited software development program",
        "Member of the Student Leadership Committee",
      ],
      dates: "Aug. 2024 - Mar. 2025",
      img: require("../editable-stuff/turing_logo.png"),
    },
    {
      school: "University of Colorado Denver, MBA",
      description: ["Specialization in Business Analytics"],
      dates: "Dec. 2020",
      img: require("../editable-stuff/cu_denver_logo.png"),
    },
    {
      school:
        "University of Notre Dame, Bachelor of Business Administration, IT Management",
      description: [
        "Activities and societies- Notre Dame Ultimate Frisbee Club, Notre Dame Information Technology Club, Student International Business Council Member, Dorm Vice President and Dorm Council",
      ],
      dates: "Aug. 2009 - May 2013",
      img: require("../editable-stuff/nd_logo.jpg"),
    },
  ],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  programmingLanguages: [
    {
      name: "React",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },

    {
      name: "Javascript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "Typescript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      name: "HTML",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
    },
    {
      name: "CSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
    },
    {
      name: "Ruby",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg",
    },
    {
      name: "Rails",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg",
    },
  ],
  testing: [
    {
      name: "Cypress",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg",
    },
    {
      name: "RSpec",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rspec/rspec-original.svg",
    },
    {
      name: "SimpleCov, Webmock, VCR",
    },
  ],
  tools: [
    {
      name: "Github Projects",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    },
    {
      name: "PostgreSQL",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Postman",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    },
    {
      name: "Jira",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
    },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering role. If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "devklynch@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Senior Project Manager, Paytronix Systems",
      info: [
        "Managed large complex projects working with 3rd parties, product teams, and stakeholders",
        "Mainted project timelines and worked closely with clients ranging from IT, marketing, and C-suite executives",
        "Developed internal processes and documentation for Project Manangement Office",
      ],
      date: "Mar. 2020 – Aug. 2024",
    },
    {
      role: "Implementations Consultant, Paytronix Systems",
      info: [
        "Oversaw multiple implementations projects that involved requirements gathering, software configuration, and training clients",
        "Worked with 3rd parties to troubleshoot integrations and software",
        "Configured software for clients based on desired program and design",
      ],
      date: "Aug. 2016 – Mar. 2020",
    },
    {
      role: "Business Operations Analyst II, Dish Network",
      info: [
        "Member of the Routing Team in the In-Home Services Command Center, worked to increase routing efficiency through strategic trials, system design, and communication to reduce costs and effectively serve internal and external partners",
        "Developed reporting for multiple research projects on job durations, which had a direct impact on third party pay rates and internal cost per point metrics",
        "Project lead for a new testing environment, which involved creating a Business Value Statement, user acceptance testing, and follow up development",
      ],
      date: "Aug. 2013 – Aug. 2016",
    },
  ],
};

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  education,
  getInTouch,
  experiences,
};

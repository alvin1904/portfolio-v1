export type ProjectType = {
  id: number;
  name: string;
  stack: string[];
  description: string;
  images: string[];
  time: string;
  githubLink: string;
  productionLink: string;
};

export type ProjectsType = ProjectType[];

const total = 6;

export const projects: ProjectsType = [
  {
    id: total - 6,
    name: "Password Generator",
    stack: ["Svelte", "CSS"],
    description:
      "This is a simple password generator application built with Svelte. It allows users to generate secure passwords with customizable criteria such as length, including uppercase letters, lowercase letters, numbers, and special characters.",
    images: [
      "https://raw.githubusercontent.com/alvin1904/password-generator-svelte/main/static/pic1.png",
      "https://raw.githubusercontent.com/alvin1904/password-generator-svelte/main/static/pic2.png",
    ],
    time: "July 2023",
    githubLink: "https://github.com/alvin1904/password-generator-svelte",
    productionLink: "https://alvins-password-generator.netlify.app/",
  },
  {
    id: total - 5,
    name: "SkillVine - Activity Points Management System",
    stack: ["Next", "CSS", "JsPDF", "Axios"],
    description:
      "The Activity Points Management System is a web-based platform designed to simplify the process of managing certificates and tracking activity points for B.Tech certification.",
    images: [
      "https://raw.githubusercontent.com/alvin1904/skillvine-client/main/public/assets/Collage1.png",
      "https://raw.githubusercontent.com/alvin1904/skillvine-client/main/public/assets/Collage2.png",
      "https://raw.githubusercontent.com/alvin1904/skillvine-client/main/public/assets/Collage3.png",
      "https://raw.githubusercontent.com/alvin1904/skillvine-client/main/public/assets/Collage4.png",
    ],
    time: "June 2023",
    githubLink: "https://github.com/alvin1904/skillvine-client",
    productionLink: "https://rit.skillvine.tech/",
  },
  {
    id: total - 4,
    name: "Ragam - Music Streaming",
    stack: ["React", "CSS", "React Spring", "Axios", "Vite"],
    description:
      "RAGAM is a music streaming and curation app built using the MERN stack. It allows users to stream music, create playlists, add songs to them, and search for songs from a vast list of available tracks. Additionally, RAGAM can generate a random playlist for users who want to discover new music.",
    images: [
      "https://raw.githubusercontent.com/alvin1904/Ragam-Music-Streaming-App/main/public/ss1.png",
      "https://raw.githubusercontent.com/alvin1904/Ragam-Music-Streaming-App/main/public/ss2.png",
      "https://raw.githubusercontent.com/alvin1904/Ragam-Music-Streaming-App/main/public/ss6.png",
      "https://raw.githubusercontent.com/alvin1904/Ragam-Music-Streaming-App/main/public/ss4.png",
    ],
    time: "April 2023",
    githubLink: "https://github.com/alvin1904/Ragam-Music-Streaming-App",
    productionLink: "https://ragam.netlify.app/",
  },
  {
    id: total - 3,
    name: "Ragam - Companion",
    stack: ["Next", "CSS", "Axios"],
    description:
      "Companion app to RAGAM - Music Streaming App. It allows artists to view their playlists, add songs to them, and search for songs from a vast list of available tracks. Additionally, RAGAM can generate a random playlist for users who want to discover new music.",
    images: [],
    time: "April 2023",
    githubLink: "https://github.com/alvin1904/Ragam-Companion",
    productionLink: "https://ragam-companion.netlify.app/auth/login",
  },
  {
    id: total - 2,
    name: "URL Shortener",
    stack: ["React", "CSS", "Firebase"],
    description:
      "his website integrates with shrtcode API to create shortened URLs and display them like in the screenshot.",
    images: [
      "https://raw.githubusercontent.com/alvin1904/REACT-URLshortener/main/assets/1.png",
    ],
    time: "January 2023",
    githubLink: "https://github.com/alvin1904/REACT-URLshortener",
    productionLink: "https://url-shortener-8b7d8.web.app/",
  },
  {
    id: total - 1,
    name: "Advice Generator",
    stack: ["React", "CSS"],
    description:
      "This website is for people looking for advice. Any user can generate a piece of advice for free by simply clicking on the dice icon.",
    images: [
      "https://raw.githubusercontent.com/alvin1904/REACT-Advice-Generator/main/assets/1.png",
      "https://raw.githubusercontent.com/alvin1904/REACT-Advice-Generator/main/assets/2.png",
    ],
    time: "December 2022",
    githubLink: "https://github.com/alvin1904/REACT-Advice-Generator",
    productionLink: "https://advice-generator-1904.netlify.app/",
  },
];

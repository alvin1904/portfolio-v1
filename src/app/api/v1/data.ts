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

export const projects: ProjectsType = [
  {
    id: 0,
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
    id: 1,
    name: "Advice Generator",
    stack: ["React Js.", "CSS"],
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

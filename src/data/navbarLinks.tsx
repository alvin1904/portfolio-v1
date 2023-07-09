import {
    homeOutline,
    personOutline,
    codeSlashOutline,
    mailOutline,
  } from "ionicons/icons";
  
  export const themes = {
    LIGHT: "light",
    DARK: "dark",
  };
  
  export const views = {
    HOME: { name: "home", icon: homeOutline },
    ABOUT: { name: "about", icon: personOutline },
    PROJECTS: { name: "projects", icon: codeSlashOutline },
    CONTACT: { name: "contact", icon: mailOutline },
  };
  
  export type viewType = {
    name: string;
    icon: string;
  };
  export type allViews = "HOME" | "ABOUT" | "PROJECTS" | "CONTACT";
  
import { IonIcon } from "@ionic/react";
import styles from "../app/styles/Home.module.css";
import { logoGithub, logoInstagram, logoLinkedin } from "ionicons/icons";
import { githubLink, instaLink, linkedinLink } from "@/data/links";

export default function Socials() {
  const openLink = (url: string) => {
    if (typeof window !== "undefined") window.open(url, "_blank");
  };
  return (
    <div className={styles.socials}>
      <IonIcon
        icon={logoGithub}
        onClick={() => openLink(githubLink)}
        aria-label="Github"
      />
      <IonIcon
        icon={logoLinkedin}
        onClick={() => openLink(linkedinLink)}
        aria-label="Linkedin"
      />
      <IonIcon
        icon={logoInstagram}
        onClick={() => openLink(instaLink)}
        aria-label="Instagram"
      />
    </div>
  );
}

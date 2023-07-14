import styles from "../styles/About.module.css";
import { IonIcon } from "@ionic/react";
import { cloudDownloadOutline } from "ionicons/icons";
import PersonalInfo from "@/components/about/PersonalInfo";
import Skills from "@/components/about/Skills";
import Experience from "@/components/about/Experience";
import Education from "@/components/about/Education";
import { resumeLink } from "@/data/links";

export default function About() {
  const openResume = () => window.open(resumeLink, "_blank");
  return (
    <div className="view bg">
      <section className={styles.section}>
        <button className={styles.cvbtn + " bg-inverse"} onClick={openResume}>
          <div className={styles.text}>
            <p>Resume</p>
          </div>
          <div>
            <IonIcon
              className={styles.icon}
              icon={cloudDownloadOutline}
              aria-label="resume"
            />
          </div>
        </button>
        <div className={styles.grouper}>
          <PersonalInfo />
          <Skills />
        </div>
        <div className={styles.grouper}>
          <Education />
          <Experience />
        </div>
      </section>
    </div>
  );
}

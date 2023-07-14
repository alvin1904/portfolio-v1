import styles from "../styles/About.module.css";
import { IonIcon } from "@ionic/react";
import { cloudDownloadOutline } from "ionicons/icons";
import PersonalInfo from "@/components/about/PersonalInfo";
import Skills from "@/components/about/Skills";
import Experience from "@/components/about/Experience";
import Education from "@/components/about/Education";

export default function About() {
  return (
    <div className="view bg">
      <section className="section">
        <button className={styles.cvbtn}>
          <div>
            <p>Download</p>
            <p>Resume</p>
          </div>
          <div>
            <IonIcon icon={cloudDownloadOutline} aria-label="resume" />
          </div>
        </button>
        <PersonalInfo />
        <Skills />
        <Experience />
        <Education />
      </section>
    </div>
  );
}

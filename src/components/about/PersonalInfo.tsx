import { personalInfo } from "@/data/content";
import styles from "../../app/styles/About.module.css";

export default function PersonalInfo() {
  return (
    <div className={styles.about}>
      <h1>PERSONAL INFO</h1>
      <div className={styles.details}>
        {personalInfo.map((info, index) => (
          <p key={index}>{info}</p>
        ))}
      </div>
    </div>
  );
}

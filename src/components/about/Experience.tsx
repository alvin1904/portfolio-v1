import { experience } from "@/data/content";
import styles from "../../app/styles/About.module.css";

export default function Experience() {
  return (
    <div className={styles.about}>
      <h1>EXPERIENCE</h1>
      <div className={styles.details}>
        {experience.map((info, index) => (
          <p key={index}>{info}</p>
        ))}
      </div>
    </div>
  );
}

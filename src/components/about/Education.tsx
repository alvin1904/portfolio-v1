import { education } from "@/data/content";
import styles from "../../app/styles/About.module.css";

export default function Education() {
  return (
    <div className={styles.about}>
      <h1>RECENT EDUCATION</h1>
      <div className={styles.details}>
        {education.map((info, index) => (
          <p key={index}>{info}</p>
        ))}
      </div>
    </div>
  );
}

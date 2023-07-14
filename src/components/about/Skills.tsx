import { skills } from "@/data/content";
import styles from "../../app/styles/About.module.css";
import { Tool } from "../Tool";

export default function Skills() {
  return (
    <div className={styles.about}>
      <h1>SKILLS</h1>
      <div className={styles.details}>
        <p>Some of the technologies I have worked with recently include:</p>
        <div className={styles.skills}>
          {skills.map((info, index) => (
            <Tool key={index}>{info}</Tool>
          ))}
        </div>
      </div>
    </div>
  );
}

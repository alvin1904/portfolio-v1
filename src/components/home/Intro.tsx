import styles from "../../app/styles/Home.module.css";
import Socials from "../Socials";

export default function Intro() {
  return (
    <div className={styles.intro_box}>
      <div className={styles.intro}>
        <h1>ALVIN VARGHESE</h1>
        <p>
          I am a creative and enthusiastic frontend developer who enjoys
          bringing web ideas to life.
        </p>
      </div>
      <Socials />
    </div>
  );
}

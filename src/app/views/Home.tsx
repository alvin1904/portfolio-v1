import Image from "next/image";
import styles from "../styles/Home.module.css";
import Intro from "@/components/home/Intro";

export default function Home() {
  return (
    <div className="view bg">
      <div className={styles.home_components}>
        <Image
          priority
          className={styles.dp}
          src="/pic.webp"
          height={650}
          width={615}
          alt="Alvin Varghese"
          loading="eager"
        />
        <Intro />
      </div>
    </div>
  );
}

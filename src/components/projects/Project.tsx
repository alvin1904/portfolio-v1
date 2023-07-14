import { ProjectType } from "@/app/api/v1/data";
import styles from "../../app/styles/Projects.module.css";
import Image from "next/image";
import { Tool } from "../Tool";

type ProjectProps = {
  data: ProjectType;
};

const Goto = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default function Project({ data }: ProjectProps) {
  const links: string[] = data.images;
  return (
    <div className={styles.body}>
      <h1>{data.name}</h1>
      <p className={styles.date}>{data.time}</p>
      <p className={styles.stack}>
        Made with:{" "}
        {data.stack.map((item, index) => (
          <Tool key={index}>{item}</Tool>
        ))}
      </p>
      <p className={styles.text}>{data.description}</p>
      {links.map((link, index) => {
        return (
          <Image
            key={index}
            src={link}
            className={styles.photo}
            alt="pic1"
            width={930}
            height={510}
          />
        );
      })}
      <div className={styles.links}>
        Check out: <Goto link={data.githubLink}>Github</Goto> or{" "}
        <Goto link={data.productionLink}>Live link</Goto>
      </div>
    </div>
  );
}

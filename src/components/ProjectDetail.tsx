import Loader from "./Loader";
import styles from "../app/styles/Projects.module.css";
import { ProjectType } from "@/app/api/v1/data";

type ProjectDetailProps = {
  project: ProjectType | string | null;
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
  if (project === null)
    return (
      <div className={styles.details}>
        <Loader />
      </div>
    );
  else if (typeof project === "string")
    return <div className={styles.details + " spacer"}>{project}</div>;
  else return <div className={styles.details}>{JSON.stringify(project)}</div>;
}

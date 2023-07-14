import styles from "../../app/styles/Projects.module.css";
import { ProjectType } from "@/app/api/v1/data";
import ProjectDetailLayout from "./ProjectDetailLayout";
import Project from "./Project";
import Loader from "../Loader";

type ProjectDetailProps = {
  project: ProjectType | string | null;
};

const Loading = () => (
  <div className={styles.details}>
    <Loader />
  </div>
);

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const errorMsg = "Something just went wrong!";
  if (project === "loading")
    return (
      <ProjectDetailLayout>
        <Loading />
      </ProjectDetailLayout>
    );
  else if (project === null)
    return <ProjectDetailLayout>{errorMsg}</ProjectDetailLayout>;
  else if (typeof project === "string")
    return <ProjectDetailLayout>{project}</ProjectDetailLayout>;
  else return <Project data={project} />;
}

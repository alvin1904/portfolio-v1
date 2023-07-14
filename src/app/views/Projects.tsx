import styles from "../styles/Projects.module.css";
import { useState } from "react";
import { ProjectType } from "../api/v1/data";
import { getData } from "@/utils/getData";
import ProjectDetail from "@/components/projects/ProjectDetail";
import { trimString } from "@/utils/trimString";

type ProjectProps = {
  projects: string[] | null;
};

export default function Projects({ projects }: ProjectProps) {
  const firstTime = "Click on a project to see details!";
  const [project, setProject] = useState<ProjectType | string | null>(
    firstTime
  );
  const [selected, setSelected] = useState<number | null>(null);
  const loadProject = async (index: number) => {
    setProject("loading");
    setSelected(index);
    const data = await getData(`/api/v1/projects/${index}`);
    console.log(data);
    if (data.status === 200) setProject(data.data);
    else setProject(data.error);
  };

  return (
    <div className="view bg" style={{ height: "85vh" }}>
      <section className={styles.project_section}>
        <div className={styles.projectsList}>
          <h1>My projects {">"}</h1>
          <div>
            {projects &&
              projects.map((project, index) => {
                return (
                  <p
                    className={selected === index ? styles.active : ""}
                    key={index}
                    onClick={() => {
                      loadProject(index);
                    }}
                  >
                    {trimString(project)}
                  </p>
                );
              })}
          </div>
        </div>
        <div className={styles.projectDetails + " bg"}>
          <ProjectDetail project={project} />
        </div>
      </section>
    </div>
  );
}

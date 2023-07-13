import ProjectDetail from "@/components/ProjectDetail";
import styles from "../styles/Projects.module.css";
import { useState } from "react";
import { ProjectType } from "../api/v1/data";
import { getData } from "@/utils/getData";

type ProjectProps = {
  projects: string[] | null;
};

export default function Projects({ projects }: ProjectProps) {
  const [project, setProject] = useState<ProjectType | string | null>(null);
  const projectNames = [
    "Website Redesign",
    "Mobile App Development",
    "Website Redesign",
    "Mobile App Development",
    "Website Redesign",
  ];
  const loadProject = async (index: number) => {
    const data = await getData(`/api/v1/projects/${index}`);
    if (data.status === 200) setProject(data.data);
    else setProject(data.error);
  };

  return (
    <div className="view bg" style={{ height: "85vh" }}>
      <section className={styles.project_section}>
        <div className={styles.projectsList}>
          <h1>My projects {">"}</h1>
          <div>
            {projectNames.map((project, index) => {
              return (
                <p
                  key={index}
                  onClick={() => {
                    loadProject(index);
                  }}
                >
                  {project}
                </p>
              );
            })}
          </div>
        </div>
        <div className={styles.projectDetails + " bg-inverse"}>
          <ProjectDetail project={project} />
        </div>
      </section>
    </div>
  );
}

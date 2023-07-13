type ProjectProps = {
  projects: string[] | null;
};

export default function Projects({ projects }: ProjectProps) {
  return (
    <div className="view bg">
      <div>Projects</div>
      <div>`{projects}`</div>
    </div>
  );
}

import { ProjectType } from "@/app/api/v1/data";

export const getData = async (link: string): Promise<any> => {
  try {
    const res = await fetch(link);
    if (!res.ok) throw new Error(`Error: ${res.status} ${res.statusText}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const getProject = async (id: number): Promise<ProjectType> => {
  const data = await getData(`/api/v1/projects/${id}`);
  return data || {};
};

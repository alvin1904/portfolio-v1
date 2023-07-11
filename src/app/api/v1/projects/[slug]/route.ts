import { projects } from "../../data";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest, context: {params: {slug: string}}) {
  const { slug } = context.params;
  try {
    if (typeof slug === "string") {
      const id = parseInt(slug);
      const project = projects.find((project) => project.id === id);
      if (typeof project === "object")
        return NextResponse.json({
          data: project,
          status: 200,
        });
    }
    return NextResponse.json({ error: "Project is missing!", status: 400 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong!", status: 400 });
  }
}

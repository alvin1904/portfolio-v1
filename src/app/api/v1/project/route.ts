import { projects } from "../../data";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    if (typeof id === "string") {
      const newId = parseInt(id);
      const project = projects.find((project) => project.id === newId);
      if (typeof project === "object")
        return NextResponse.json({
          data: project,
          status: 200,
        });
    }
    return NextResponse.json({ error: "Project is missing!", status: 400 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Something went wrong!", status: 400 });
  }
}

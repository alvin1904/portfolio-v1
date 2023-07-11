import { NextRequest, NextResponse } from "next/server";
import { projects } from "../data";

export function GET(request: NextRequest) {
  try {
    const list = projects.map((project) => project.name);
    return NextResponse.json({
      status: 200,
      data: list,
    });
  } catch (error: any) {
    console.error(error)
    return NextResponse.json({ error: "Something went wrong!", status: 400 });
  }
}

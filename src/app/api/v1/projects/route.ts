import { NextRequest, NextResponse } from "next/server";
import { projects } from "../../data";

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      status: 200,
      data: projects,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message, status: 400 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { courseInfo } from "@/app/types/courseInfo";
/**
 * Handles the creation of a new user.
 * @param request - The request object containing the user data in the request body.
 * @returns A response indicating the success or failure of the user creation.
 */
export async function GET(request: NextRequest) {
  try {
    // return NextResponse.json({ data });
  } catch (error: any) {
    return NextResponse.json({ message: error.message, status: 500 });
  }
}

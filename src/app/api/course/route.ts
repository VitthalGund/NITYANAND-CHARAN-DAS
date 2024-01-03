import { NextRequest, NextResponse } from "next/server";
import { courseInfo } from "@/app/types/courseInfo";
/**
 * Handles the creation of a new user.
 * @param request - The request object containing the user data in the request body.
 * @returns A response indicating the success or failure of the user creation.
 */
export async function GET(request: NextRequest) {
  try {
    let data: courseInfo = {
      instructor: {
        name: "NITYANAND CHARAN DAS",
        social_media: {
          facebook: true,
          twitter: true,
          youtube: true,
          instagram: true,
        },
      },
      course: {
        title:
          "Learn key life lessons from the Gita: Mind control and conflict resolution",
        fee: {
          amount: 5000,
          currency: "INR",
        },
        inclusions: {
          on_demand_videos: 2,
          live_qa_sessions: true,
          whatsapp_community: true,
        },
        about: {
          html_content:
            "<p>Lorem ipsum text about managing relationships, communication, time management, and forgiveness.</p>",
        },
        what_to_expect: {
          html_content: [
            "Learn to mange your relationships",
            "Better communication",
            "Time management",
            "Forgiveness",
          ],
        },
        key_topics: {
          html_content: [
            "10 written and audio sessions guiding you in decoding the language of numbers so that you can easily receive their insights and messages.",
            "Intuitive exercises and homework walk you through the energies and values of numbers and number sequences so you can become your own authority.",
            "Handy reference to numerical meanings, so you can uncover your soul's gifts, challenges, lessons, and purpose – and receive spiritual guidance along your path.",
            "<li>Expert techniques for manifestation offer simple ways to use numbers to co-create with the universe.",
          ],
        },
      },
      about_instructor: {
        html_content: [
          "Lorem ipsum text about the instructor's background and philosophy.",
        ],
      },
      testimonial: {
        text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
        reviewer_name: "Name of the reviewer",
        reviewer_designation: "Designation of the reviewer",
      },
    };
    return NextResponse.json({ data });
  } catch (error: any) {
    return NextResponse.json({ message: error.message, status: 500 });
  }
}

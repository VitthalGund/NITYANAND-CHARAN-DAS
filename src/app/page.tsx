import { courseInfo } from './types/courseInfo'
import Link from 'next/link';
import Review from './Components/Review';
import Instructor from './Components/Instructor';
import About from './Components/About';
import LandingPhoto from './Components/LandingPhoto';
export default function Home() {
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
        amount: 5_000,
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
          "Expert techniques for manifestation offer simple ways to use numbers to co-create with the universe.",
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

  return (
    <main>
      <div className='h-1/1 font-Roboto'>
        {/* //mr-40 ml-40 */}
        <LandingPhoto name={data.instructor.name} title={data.course.title} />
        <div className='mx-10'>
          <ul className='flex flex-row flex-wrap'>
            <Link href='#About' className='mx-10 underline underline-offset-4 border-b-2 decoration-purple-500 decoration-4 uppercase font-bold m-3 scroll-smooth'>About</Link>
            <Link href='#INSTRUCTOR' className='mx-10 uppercase font-bold m-3 scroll-smooth'>INSTRUCTOR</Link>
            <Link href='#REVIEW' className='mx-10 uppercase font-bold m-3'>REVIEW</Link>
          </ul>
        </div>
        <About data={data} />

        <Instructor />
        <Review />

      </div>
    </main >
  )
}

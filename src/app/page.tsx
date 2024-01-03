import axios from 'axios'
import Image from 'next/image'
import { courseInfo } from './types/courseInfo'
import { useEffect } from 'react';
import Link from 'next/link';
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
        <div className="relative w-full h-[20rem] mx-auto overflow-y-hidden object-cover">
          <Image src={"/Nityanand Charan Das.png"}
            width={30} height={10} alt='titleImage' content='.png'
            className='w-full h-[20rem] bg-black'
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-900/40"></div>
          <div className="absolute inset-0 flex flex-col justify-end items-start m-10 flex-wrap">
            <h2 className="text-white sm:text-lg lg:text-1xl font-bold">{data.instructor.name}</h2>
            <h2 className="text-white font-bold text-2xl sm:text-2xl md:w-[32rem] lg:text-4xl sm:w-80 ">{data.course.title}</h2>
          </div>
        </div>
        <div className='mx-10'>
          <ul className='flex flex-row flex-wrap  '>
            <Link href='#About' className='mx-10 underline underline-offset-4 decoration-purple-500 decoration-4 uppercase font-bold m-3 scroll-smooth'>About</Link>
            <Link href='#INSTRUCTOR' className='mx-10 uppercase font-bold m-3 scroll-smooth'>INSTRUCTOR</Link>
            <Link href='#REVIEW' className='mx-10 uppercase font-bold m-3'>REVIEW</Link>
          </ul>
        </div>
        <div className='flex flex-col justify-center items-center lg:grid grid-flow-col grid-cols-2 gap-1'>
          <div className='flex flex-col' id='About'>
            <h2 className='text-3xl font-bold mx-10 my-3'>About the course</h2>
            <div className='mx-10 my-3 mt-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laboriosam illo expedita quasi velit quo sit quibusdam perspiciatis, saepe exercitationem? Soluta totam est adipisci non doloremque voluptatum commodi possimus. Illo?
            </div>
            <div className='mx-10 my-3 mt-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laboriosam illo expedita quasi velit quo sit quibusdam perspiciatis, saepe exercitationem? Soluta totam est adipisci non doloremque voluptatum commodi possimus. Illo?
            </div>
            <div className='mx-10 my-3 mt-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laboriosam illo expedita quasi velit quo sit quibusdam perspiciatis, saepe exercitationem? Soluta totam est adipisci non doloremque voluptatum commodi possimus. Illo?
            </div>
            <div>
              <h2 className='text-3xl font-bold mx-10 my-3'>What to expect from the course</h2>
              <ul className='flex justify-center items-start flex-col ml-10'>
                {data.course.what_to_expect.html_content.map((item, indx) => {
                  return <li className="mb-4 flex" key={indx}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="mr-2 h-6 w-6 text-green-800">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span>{item}</span>
                  </li>
                })}
              </ul>
            </div>
            <div className='flex flex-col items-start'>
              <h2 className='text-3xl font-bold mx-10 my-3'>Key topics covered</h2>
              <p className='mx-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit omnis eum molestias nihil, suscipit et maiores beatae molestiae, laboriosam dolorum saepe! Reprehenderit enim sit quidem quasi error, cumque corporis asperiores?</p>
              <ul className='flex justify-center items-start flex-col mb-4'>
                {data.course.key_topics.html_content.map((item, indx) => {
                  return <li className="mb-4 flex ml-10 mt-4" key={indx}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="m-5 ml-1 h-6 w-16 text-green-800">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <p><b></b>{item}</p>
                  </li>
                })}
              </ul>
            </div>

          </div>
          <div className='w-fit'>
            <div
              className="lg:block rounded-lg bg-purple-100 shadow-lg text-black lg:absolute w-max top-72 right-32">
              <div
                className="border-b-2 border-neutral-100 px-4 py-3">
                <h5 className="mb-2 mt-4 text-lg font-semibold">Course fees</h5>
                <h4 className="mb-4">
                  <span className="text-3xl font-bold">{data.course.fee.currency ? "₹" : ""}{data.course.fee.amount.toLocaleString()}</span>
                </h4>
                <div className="flex flex-col items-start justify-center">
                  <h3 className='font-bold my-2'>What&apos;s included:</h3>
                  <ul className="text-black">
                    <li className="mb-2 flex justify-start items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-btn mx-1 my-1" viewBox="0 0 16 16">
                        <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                      </svg>
                      <p > 5 on-demand videos</p>
                    </li>
                    <li className="mb-2 flex justify-start items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-btn mx-1 my-1" viewBox="0 0 16 16">
                        <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                      </svg>
                      <p>2 livestream sessions</p>
                    </li>
                    <li className="mb-2 flex justify-start items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-btn mx-1 my-1" viewBox="0 0 16 16">
                        <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                      </svg>
                      <p>Live Q&A sessions with Nityanand Das</p>
                    </li>
                    <li className="mb-10 flex justify-start items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-btn mx-1 my-1" viewBox="0 0 16 16">
                        <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                      </svg>
                      <p>Active Whatsapp community</p>
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  className="mb-4 inline-block text-1xl w-full p-32 rounded-full bg-primary-500 px-6 pb-2 pt-2.5 font-medium transition duration-150 ease-in-out bg-purple-950 text-white"
                  data-te-ripple-init
                  data-te-ripple-color="primary">
                  Register today
                </button>
              </div>

            </div>
          </div>
        </div>

        <div className='mb-6' id='INSTRUCTOR'>
          <h2 className='text-2xl sm:text-left text-center font-bold mx-10 m-5 p-3 lg:text-4xl'>About the Instructor</h2>
          <div className='flex flex-col justify-center items-center lg:grid grid-flow-col grid-cols-3'>
            <Image src="/icon.jpeg" alt=""
              width={100} height={100}
              className='rounded-full lg:ml-[7rem] w-56 lg:self-end'
            />
            <p className='p-3 m-2 lg:m-0 lg:p-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate temporibus illo repellendus officiis sunt pariatur nesciunt iusto similique? Accusantium a omnis aliquam quisquam, ab amet?</p>
            <p className='p-3 m-2 lg:m-0 lg:p-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate temporibus illo repellendus officiis sunt pariatur nesciunt iusto similique? Accusantium a omnis aliquam quisquam, ab amet?</p>
          </div>
          <div className='flex flex-col justify-center items-center sm:flex-row p-5 flex-wrap'>
            <Link href={"https://www.facebook.com/NityanandCharanD/"}
              target='_blank'
              className="facebook flex flex-row justify-center items-center text-xl lg:mr-20 mt-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4"></stop><stop offset="1" stopColor="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
              </svg>
              Facebook
            </Link>
            <Link
              href={"https://twitter.com/nityananda_c?lang=en"}
              target='_blank'
              className="x flex flex-row justify-center items-center text-xl lg:mr-20 mt-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 50 50">
                <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
              </svg>
              Twitter
            </Link>
            <Link
              href={"https://www.youtube.com/c/NityanandCharanDas"}
              target='_blank'
              className="youtube flex flex-row justify-center items-center text-xl lg:mr-20 mt-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
              </svg>
              Youtube
            </Link>
            <Link
              href={"https://www.instagram.com/nityanand_charan_das/"}
              target='_blank'
              className="instagram flex flex-row justify-center items-center text-xl lg:mr-20 mt-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5"></stop><stop offset=".328" stopColor="#ff543f"></stop><stop offset=".348" stopColor="#fc5245"></stop><stop offset=".504" stopColor="#e64771"></stop><stop offset=".643" stopColor="#d53e91"></stop><stop offset=".761" stopColor="#cc39a4"></stop><stop offset=".841" stopColor="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9"></stop><stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
              </svg>
              Instagram
            </Link>
          </div>
        </div>

        <div id="REVIEW" className="relative w-full bg-stone-100" data-carousel="slide">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

            <div className="duration-700 ease-in-out" data-carousel-item>
              <blockquote className="flex flex-col items-center p-4 font-bold">
                <p className="max-w-4xl text-xl font-medium text-center md:text-2xl lg:text-3xl p-10">&quot;I recently used this website for a purchase and I was extremely satisfied with the ease of use and the variety of options available. The checkout process was seamless and the delivery was prompt.&quot;
                </p>
                <footer className="flex items-center gap-3 mt-6 md:mt-12">
                  <Image className="flex-shrink-0 w-12 h-12 border rounded-full border-black/10"
                    src="https://api.multiavatar.com/icon.png" alt="Sebastiaan Kloos"
                    loading="lazy"
                    width={100} height={10}
                  />
                  <a href="" target="_blank"
                    className="inline-block font-bold tracking-tight">
                    <p>Jane Doe</p>
                    <p className="font-medium text-black/60">Founder of XYZ</p>
                  </a>
                </footer>
              </blockquote>
            </div>

            <div className="duration-700 ease-in-out" data-carousel-item>
              <blockquote className="flex flex-col items-center p-4 font-bold">
                <p className="max-w-4xl text-xl font-medium text-center md:text-2xl lg:text-3xl p-10">
                  &quot;I recently used this website for a purchase and I was extremely satisfied with the ease of use and the variety of options available. The checkout process was seamless and the delivery was prompt.&quot;
                </p>
                <footer className="flex items-center gap-3 mt-6 md:mt-12">
                  <Image className="flex-shrink-0 w-12 h-12 border rounded-full border-black/10"
                    src="https://api.multiavatar.com/icon.jpeg" alt="Sebastiaan Kloos"
                    loading="lazy"
                    width={100} height={10}
                  />
                  <a href="" target="_blank"
                    className="inline-block font-bold tracking-tight">
                    <p>Jane Doe</p>
                    <p className="font-medium text-black/60">Founder of XYZ</p>
                  </a>
                </footer>
              </blockquote>
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>

            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>

            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>

            </div>
          </div>
          {/* <!-- Slider indicators --> */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
          </div>
          {/* <!-- Slider controls --> */}
          <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-24 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-24 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>

      </div>
    </main >
  )
}

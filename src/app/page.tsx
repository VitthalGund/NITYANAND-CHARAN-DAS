import Image from 'next/image'

export default function Home() {
  let data = {
    "instructor": {
      "name": "NITYANAND CHARAN DAS",
      "social_media": {
        "facebook": true,
        "twitter": true,
        "youtube": true,
        "instagram": true
      }
    },
    "course": {
      "title": "Learn key life lessons from the Gita: Mind control and conflict resolution",
      "fee": {
        "amount": 5000,
        "currency": "INR"
      },
      "inclusions": {
        "on_demand_videos": 2,
        "live_qa_sessions": true,
        "whatsapp_community": true
      },
      "about": {
        "html_content": "<p>Lorem ipsum text about managing relationships, communication, time management, and forgiveness.</p>"
      },
      "what_to_expect": {
        "html_content": "<ul><li>Learn to mange your relationships</li><li>Better communication</li><li>Time management</li><li>Forgiveness</li></ul>"
      },
      "key_topics": {
        "html_content": "<ol><li>10 written and audio sessions guiding you in decoding the language of numbers so that you can easily receive their insights and messages.</li><li>Intuitive exercises and homework walk you through the energies and values of numbers and number sequences so you can become your own authority.</li><li>Handy reference to numerical meanings, so you can uncover your soul's gifts, challenges, lessons, and purpose – and receive spiritual guidance along your path.</li><li>Expert techniques for manifestation offer simple ways to use numbers to co-create with the universe.</li></ol>"
      }
    },
    "about_instructor": {
      "html_content": "<p>Lorem ipsum text about the instructor's background and philosophy.</p>"
    },
    "testimonial": {
      "text": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
      "reviewer_name": "Name of the reviewer",
      "reviewer_designation": "Designation of the reviewer"
    }
  }

  return (
    <main>
      <div className='h-1/1 font-Roboto'>
        <div className="relative w-full h-[20rem] mx-auto overflow-y-hidden">
          <Image src={"/Nityanand Charan Das.png"}
            width={30} height={10} alt='titleImage' content='.png'
            className='w-full h-[20rem]'
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-900/40"></div>
          <div className="absolute inset-0 flex items-start justify-end m-10 flex-col flex-wrap">
            <h2 className="text-white lg:text-1xl font-bold">{data.instructor.name}</h2>
            <h2 className="text-white lg:text-4xl font-bold w-20 md:w-auto">{data.course.title}</h2>
          </div>
        </div>
        <div className='mx-10'>
          <ul className='flex flex-row'>
            <li className='mx-10 underline underline-offset-4 decoration-purple-500 decoration-4 uppercase font-bold m-3'>About</li>
            <li className='mx-10 uppercase font-bold m-3'>INSTRUCTOR</li>
            <li className='mx-10 uppercase font-bold m-3'>REVIEW</li>
          </ul>
        </div>
        <div className='flex flex-col justify-center items-center lg:grid grid-flow-col grid-cols-2 gap-1'>
          <div className='flex flex-col'>
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
                <li className="mb-4 flex">
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

                  <span>Learn to mange your relationships</span>
                </li>
                <li className="mb-4 flex">
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

                  <span>Better communication</span>
                </li>
                <li className="mb-4 flex">
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

                  <span>Time management</span>
                </li>
                <li className="mb-4 flex">
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

                  <span>Forgiveness</span>
                </li>
              </ul>
            </div>
            <div className='flex flex-col items-start'>
              <h2 className='text-3xl font-bold mx-10 my-3'>Key topics covered</h2>
              <p className='mx-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit omnis eum molestias nihil, suscipit et maiores beatae molestiae, laboriosam dolorum saepe! Reprehenderit enim sit quidem quasi error, cumque corporis asperiores?</p>
              <ul className='flex justify-center items-start flex-col ml-10'>
                <li className="mb-4 mt-4 flex">
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

                  <p><b>Learn to mange your relationships</b> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, pariatur earum laudantium similique autem voluptate?</p>
                </li>
                <li className="mb-4 mt-4 flex">
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

                  <p><b>Learn to mange your relationships</b> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, pariatur earum laudantium similique autem voluptate?</p>
                </li>
                <li className="mb-4 mt-4 flex">
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

                  <p><b>Learn to mange your relationships</b> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, pariatur earum laudantium similique autem voluptate?</p>
                </li>
                <li className="mb-4 mt-4 flex">
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

                  <p><b>Learn to mange your relationships</b> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, pariatur earum laudantium similique autem voluptate?</p>
                </li>
              </ul>
            </div>

          </div>
          <div className='w-fit'>
            <div
              className="lg:block rounded-lg bg-purple-100 shadow-lg text-black lg:absolute w-max top-72 right-20">
              <div
                className="border-b-2 border-neutral-100 px-4 py-3">
                <h5 className="mb-2 mt-4 text-lg font-semibold">Course fees</h5>
                <h4 className="mb-4">
                  <span className="text-3xl font-bold">₹5,000</span>
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

        <div>
          <h2 className='text-3xl font-bold mx-10 my-3'>About the Instructor</h2>
          <div className='flex flex-col justify-center items-center lg:grid grid-flow-col grid-cols-3'>
            <Image src="/icon.jpeg" alt=""
              width={100} height={100}
              className='rounded-full mx-24 w-fit'
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate temporibus illo repellendus officiis sunt pariatur nesciunt iusto similique? Accusantium a omnis aliquam quisquam, ab amet?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate temporibus illo repellendus officiis sunt pariatur nesciunt iusto similique? Accusantium a omnis aliquam quisquam, ab amet?</p>
          </div>
          <div className='flex flex-col justify-center items-center lg:grid grid-flow-col  grid-cols-4'></div>
        </div>

        {/* <!-- Container for demo purpose --> */}
        <div className="container my-24 mx-auto md:px-6 bg-slate-100">
          {/* <!-- Section: Design Block --> */}
          <section className="mb-32 text-center">
            <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>

            <div id="carouselExampleCaptions" className="relative" data-te-carousel-init data-te-carousel-slide>
              <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-active data-te-carousel-item style={{ "backfaceVisibility": "hidden" }}>
                  <Image className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                    src="/icon.jpeg" alt="avatar" width={100} height={100} />
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                      <h5 className="mb-2 text-lg font-bold">Maria Kate</h5>
                      <p className="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                        Photographer
                      </p>
                      <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                        In ac turpis justo. Vivamus auctor quam vitae odio feugiat
                        pulvinar. Sed semper ligula sed lorem tincidunt dignissim.
                        Nam sed cursus lectus. Proin non rutrum magna. Proin
                        gravida, justo et imperdiet tristique turpis nisi viverra.
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                          <path fill="currentColor"
                            d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                        </svg>
                      </p>
                      <ul className="mb-0 flex justify-center">
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                            <path fill="currentColor"
                              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                          </svg>
                        </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                            <path fill="currentColor"
                              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                          </svg>
                        </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                            <path fill="currentColor"
                              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                          </svg>
                        </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                            <path fill="currentColor"
                              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                          </svg>
                        </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                            <path fill="currentColor"
                              d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                          </svg>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item style="backface-visibility: hidden">
                  <img className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).jpg" alt="avatar" />
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                      <h5 className="mb-2 text-lg font-bold">John Doe</h5>
                      <p className="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                        Web Developer
                      </p>
                      <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                        Maecenas auctor, quam eget tincidunt pretium, felis diam
                        semper turpis, sed scelerisque diam libero facilisis libero.
                        Quisque vitae semper metus. Aliquam eu dui aliquam, faucibus
                        metus quis, elementum nunc.
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                          <path fill="currentColor"
                            d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                        </svg>
                      </p>
                      <ul className="mb-0 flex justify-center">
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                            <path fill="currentColor"
                              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                          </svg>
                        </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                            <path fill="currentColor"
                              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                          </svg>
                        </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                            <path fill="currentColor"
                              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                          </svg>
                        </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                            <path fill="currentColor"
                              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                          </svg>
                        </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                            <path fill="currentColor"
                              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                          </svg>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                {/* <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item style="backface-visibility: hidden">
                  <img className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg" alt="avatar" />
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                      <h5 className="mb-2 text-lg font-bold">Anna Deynah</h5>
                      <p className="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                        UX Designer
                      </p>
                      <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                        Duis sagittis, turpis in ullamcorper venenatis, ligula nibh
                        porta dui, sit amet rutrum enim massa in ante. Curabitur in
                        justo at lorem laoreet ultricies. Nunc ligula felis,
                        sagittis eget nisi vitae ex arcu sit amet erat.
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                          <path fill="currentColor"
                            d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                        </svg>
                      </p>
                      <ul className="mb-0 flex justify-center">
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                            <path fill="currentColor"
                              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                          </svg>
                        </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                            <path fill="currentColor"
                              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                          </svg>
                        </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                            <path fill="currentColor"
                              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                          </svg>
                        </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                            <path fill="currentColor"
                              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                          </svg>
                        </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                            <path fill="currentColor"
                              d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z" />
                          </svg>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </div>
              <button
                className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button" data-te-target="#carouselExampleCaptions" data-te-slide="prev">
                <span className="inline-block h-8 w-8">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                    className="text-neutral-600 dark:text-neutral-300">
                    <path fill="currentColor"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                  </svg>
                </span>
                <span
                  className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
              </button>
              <button
                className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button" data-te-target="#carouselExampleCaptions" data-te-slide="next">
                <span className="inline-block h-8 w-8">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                    className="text-neutral-600 dark:text-neutral-300">
                    <path fill="currentColor"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </span>
                <span
                  className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
              </button>
            </div>
          </section>
          {/* <!-- Section: Design Block --> */}
        </div>
        {/* <!-- Container for demo purpose --> */}
      </div>
    </main >
  )
}

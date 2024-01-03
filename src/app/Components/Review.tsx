import React from 'react'
import Image from 'next/image'

const Review = () => {
    return (
        <div>
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
    )
}

export default Review

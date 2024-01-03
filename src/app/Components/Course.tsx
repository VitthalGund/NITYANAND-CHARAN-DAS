import React from 'react'

const Course = ({ currency, amount }: { currency: string, amount: number }) => {
    return (
        <>
            <div className='flex flex-wrap flex-col'>
                <div
                    className="flex flex-wrap lg:block rounded-lg bg-purple-100 shadow-lg text-black lg:absolute w-auto p-2 top-72 right-32">
                    <div
                        className="border-b-2 border-neutral-100 px-4 py-3 flex flex-col flex-wrap">
                        <h5 className="mb-2 mt-4 text-lg font-semibold">Course fees</h5>
                        <h4 className="mb-4">
                            <span className="text-3xl font-bold">{currency ? "₹" : ""}{amount.toLocaleString()}</span>
                        </h4>
                        <div className="flex flex-col items-start justify-center flex-wrap" >
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
                            className="mb-4 inline-block text-1xl p-32 rounded-full bg-primary-500 px-6 pb-2 pt-2.5 font-medium transition duration-150 ease-in-out bg-purple-950 text-white"
                            data-te-ripple-init
                            data-te-ripple-color="primary">
                            Register today
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Course

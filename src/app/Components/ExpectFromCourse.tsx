import React from 'react'

const ExpectFromCourse = ({ html_content }: { html_content: string[] }) => {
    return (
        <>
            <div>
                <h2 className='text-3xl font-bold mx-10 my-3'>What to expect from the course</h2>
                <ul className='flex justify-center items-start flex-col ml-10'>
                    {html_content.map((item, indx) => {
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
        </>
    )
}

export default ExpectFromCourse

import React from 'react'

const KeyTopics = ({ html_content }: { html_content: string[] }) => {
    return (
        <>
            <div className='flex flex-col items-start'>
                <h2 className='text-3xl font-bold mx-10 my-3'>Key topics covered</h2>
                <p className='mx-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit omnis eum molestias nihil, suscipit et maiores beatae molestiae, laboriosam dolorum saepe! Reprehenderit enim sit quidem quasi error, cumque corporis asperiores?</p>
                <ul className='flex justify-center items-start flex-col mb-4'>
                    {html_content.map((item, indx) => {
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
        </>
    )
}

export default KeyTopics

import React from 'react'
import ExpectFromCourse from './ExpectFromCourse'
import KeyTopics from './KeyTopics'
import Course from './Course'
import { courseInfo } from '../types/courseInfo'

const About = ({ data }: { data: courseInfo }) => {
    return (
        <>
            <div className='flex flex-col justify-center items-center lg:grid grid-flow-col grid-cols-2 gap-1'>
                <div className='flex flex-col' id='About'>
                    <h2 className='text-3xl font-bold mx-10 my-3'>About the course</h2>
                    <div className='mx-10 my-3 mt-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laboriosam illo expedita quasi velit quo sit quibusdam perspiciatis, saepe exercitationem? Soluta totam est adipisci non doloremque voluptatum commodi possimus. Illo?
                    </div>
                    <div className='mx-10 my-3 mt-5'>
                        Lorem ipsum dolor ssit amet consectetur adipisicing elit. Vitae laboriosam illo expedita quasi velit quo sit quibusdam perspiciatis, saepe exercitationem? Soluta totam est adipisci non doloremque voluptatum commodi possimus. Illo?
                    </div>
                    <div className='mx-10 my-3 mt-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laboriosam illo expedita quasi velit quo sit quibusdam perspiciatis, saepe exercitationem? Soluta totam est adipisci non doloremque voluptatum commodi possimus. Illo?
                    </div>
                    <ExpectFromCourse html_content={data.course.what_to_expect.html_content} />
                    <KeyTopics html_content={data.course.key_topics.html_content} />

                </div>
                <Course amount={data.course.fee.amount} currency={data.course.fee.currency} key={1} />
            </div>
        </>
    )
}

export default About

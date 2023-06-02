import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 rounded-lg">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-28 top-36 border-8 border-base-200" />
                </div>
                <div className='lg:w-1/2 pr-16 mt-8'>
                    <h2 className='text-[#FF3811] font-bold mb-2'>About Us</h2>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even slightly believable. <br /> <br /> the majority have suffered alteration in some form, by injected humour, or randomized words which don&#39;t look even slightly believable. </p>
                    <button className="btn btn-primary bg-[#FF3811] border-none">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
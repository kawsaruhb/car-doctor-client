import React from 'react';
import image1 from '../../../assets/images/banner/1.jpg'
import image2 from '../../../assets/images/banner/2.jpg'
import image5 from '../../../assets/images/banner/5.jpg'
import image6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] mb-8">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={image1} className="w-full rounded-lg" />
                <div className="absolute flex items-center rounded-lg text-white gap-4 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4'>
                            <button className="btn btn-primary bg-[#FF3811] border-none">Discover More</button>
                            <button className="btn btn-outline  text-white  border-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-none">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <img src={image2} className="w-full rounded-lg" />
                <div className="absolute flex items-center rounded-lg text-white gap-4 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4'>
                            <button className="btn btn-primary bg-[#FF3811] border-none">Discover More</button>
                            <button className="btn btn-outline  text-white  border-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-none">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={image5} className="w-full rounded-lg" />
                <div className="absolute flex items-center rounded-lg text-white gap-4 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4'>
                            <button className="btn btn-primary bg-[#FF3811] border-none">Discover More</button>
                            <button className="btn btn-outline  text-white  border-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-none">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={image6} className="w-full rounded-lg" />
                <div className="absolute flex items-center rounded-lg text-white gap-4 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4'>
                            <button className="btn btn-primary bg-[#FF3811] border-none">Discover More</button>
                            <button className="btn btn-outline  text-white  border-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-[#FF3811] border-none">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
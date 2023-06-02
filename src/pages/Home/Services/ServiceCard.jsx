import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const ServiceCard = ({ service }) => {

    const { title, img, price } = service;

    return (
        <div data-aos="flip-left">
            <div className="card w-96 bg-base-300 shadow-2xl">
                <figure className="px-8 pt-8">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='font-semibold text-[#FF3811]'>Price: ${price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
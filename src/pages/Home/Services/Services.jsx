import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='text-center mt-8 mb-6'>
                <h5 className="font-bold text-[#FF3811] mb-1">Service</h5>
                <h1 className='text-4xl font-bold mb-2'>Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which don&#39;t look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-6 mb-8'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
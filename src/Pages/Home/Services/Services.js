import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';


const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://b6a11-service-review-server-side-shahadot99999.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='text-center mb-4'>

                <h2 className="text-5xl font-semibold">Our  Medical Service Area</h2>

            </div>


            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
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
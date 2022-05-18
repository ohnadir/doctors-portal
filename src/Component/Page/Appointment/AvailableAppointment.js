import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Services from './Services';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data=> setServices(data))
    },[])
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-center mb-8 text-[#19D3AE]'>Available Appointments on {format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <Services
                        key={service._id}
                        service={service}
                    ></Services>)
                }
            </div>
            <p>{services.length}</p>
        </div>
    );
};

export default AvailableAppointment;
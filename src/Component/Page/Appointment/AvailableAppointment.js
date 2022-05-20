import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Services from './Services';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment]= useState([])
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data=> setServices(data))
    },[])
    return (
        <div className='max-w-xl lg:max-w-4xl mx-auto mt-10'>
            <h1 className='text-center mb-8 text-[#19D3AE]'>Available Appointments on {format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <Services
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Services>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;
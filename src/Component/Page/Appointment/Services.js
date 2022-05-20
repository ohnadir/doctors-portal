import React, { useState } from 'react';

const Services = ({ service, setTreatment }) => {
    const {name, slots} = service;
    return (
        <div className='mx-auto shadow-xl p-4'>
            <div >
                <h1 className='mb-2 text-[#19D3AE]'>{name}</h1>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]} </span>
                        : <span>Try another date.</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className='mt-2'>
                    <label
                        htmlFor="booking-modal"
                        onClick={()=>setTreatment(service)}
                        className='bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] cursor-pointer rounded-lg uppercase text-white w-full px-2 py-[4px]' >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Services;
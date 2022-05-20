import React from 'react';
import Banner from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date, setDate}) => {
    return (
        <div className="hero ">
            <div className="hero-content flex-col gap-6 lg:flex-row-reverse">
                <img src={Banner} className="max-w-lg rounded-lg " />
                <div>
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        />
                </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;





{/* <div className='my-8'>
            <div className='max-w-4xl mx-auto gap-10 flex lg:flex-row-reverse flex-col  items-center '>
                <div>
                    <img className='max-w-lg rounded-lg shadow-2xl' src={Banner} alt="" />
                </div>
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        />
                </div>
            </div>
        </div> */}
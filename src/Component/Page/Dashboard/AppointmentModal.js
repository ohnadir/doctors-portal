import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentModal = ({date, setDate}) => {
    return (
        <div>
            <input type="checkbox" id="appointment-modal" className="modal-toggle" />
            <label htmlFor="appointment-modal" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="appointment-modal">
                <div className='w-full flex justify-center'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        />
                </div>
             </label>
</label>
        </div>
    );
};

export default AppointmentModal;
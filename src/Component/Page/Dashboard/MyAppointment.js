import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import AppointmentModal from './AppointmentModal';

const MyAppointment = () => {
    const [appointment, setAppointment] = useState([]);
    const [date, setDate] = useState(new Date());
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch(`http://localhost:5000/booking?patient=${user.email}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [user]);
    return (
        <div className='mt-10 px-10'>
            <div className='flex justify-between items-center mb-3'>
                <p className=''>My Appointment</p>
                <label for="appointment-modal" class="btn modal-button">{format(date, 'PP')}</label>
            </div>
            <div class="overflow-x-auto ">
                
                <table class="table w-full border">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Treatment</th>
                    </tr>
                    </thead>
                    <tbody>
                        
                            {
                            appointment.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                            </tr>)  
                            }
                        
                    </tbody>
                </table>
            </div>
            {
                date && <AppointmentModal
                    date={date}
                    setDate={setDate}
                ></AppointmentModal>
            }
        </div>
    );
};

export default MyAppointment;
// ?patient=${user.email}
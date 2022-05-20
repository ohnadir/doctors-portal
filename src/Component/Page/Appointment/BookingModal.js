import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify';
import auth from '../../firebase.init'

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { name, slots } = treatment;
    const [user] = useAuthState(auth);
    const formattedDate = format(date, 'PP');
    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;

        const booking = {
            treatment: name,
            date: formattedDate,
            slot,
            patientName: user.displayName,
            patient: user.email,
            phone: event.target.phone.value
        }
        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
            .then(data => {
            if (data.success) {
                toast(`Appointment is set ${formattedDate} at ${slot}`)
            } else {
                toast.error(`Already have an appointment on ${date.booking?.date} at ${data.booking?.slot}`)
            }
            setTreatment(null)
            
        })
    }

    return (
        <div>
            
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="input input-bordered w-full max-w-xs" >
                            {
                                slots?.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                            
                        </select>
                        <input type="text" name="name" disabled  value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="phone" placeholder='Phone Number' className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Book Appointment" className="input cursor-pointer input-bordered w-full max-w-xs bg-[#3A4256] text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
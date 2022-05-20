import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import auth from '../firebase.init';

const Navber = () => {
    const [open, setOpen] = useState(false);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth);
    }
    const menuItems = <>
        <CustomLink to='/home'>Home</CustomLink>
        <CustomLink to='/appointment'>Appointment</CustomLink>
        <CustomLink to='/review'>Review</CustomLink>
        <CustomLink to='/contact'>Contact</CustomLink>
        <CustomLink to='/about'>About</CustomLink>
        {
            user && <CustomLink to='/dashboard'>Dashboard</CustomLink>
        }
        {user ? <button onClick={handleSignOut}>Sign Out</button>
            :
            <CustomLink to='/login'>Login</CustomLink>
        }
        
    </>

    
    return (
        <div className='flex items-center h-14 justify-between text-black  relative z-50'>
            <div>
                <span className='cursor-pointer' onClick={()=>navigate('/home')}>Perfume wareHouse</span>
            </div>
            <div className='flex gap-6 items-center hidden md:flex'>
                {menuItems}
            </div>
            <FontAwesomeIcon
                icon={open ? faTimes : faBars}
                onClick={() => setOpen(!open)}
                className="text-white w-6 h-6 cursor-pointer md:hidden"/>
            {open && (
                <div className="bg-slate-600 absolute top-full left-0 flex flex-col w-full pb-8 md:hidden">
                    <div className=" flex gap-4 flex-col items-center text-xl">
                        {menuItems}
                    </div>
                </div>
            )}
            <div>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open</label>
            </div>
        </div>
    );
};

export default Navber;
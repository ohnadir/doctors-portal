import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';
import auth from '../../firebase.init';

const Navber = () => {
    const menuItems = <>
        <CustomLink to='/home'>Home</CustomLink>
        <CustomLink to='/appointment'>Appointment</CustomLink>
        <CustomLink to='/review'>Review</CustomLink>
        <CustomLink to='/contact'>Contact</CustomLink>
        <CustomLink to='/about'>About</CustomLink>
        <CustomLink to='/login'>Login</CustomLink>
    </>
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth);
    }
    return (
        <div className='flex items-center h-14 px-6 justify-between bg-slate-600 text-white  relative z-50'>
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
        </div>
    );
};

export default Navber;
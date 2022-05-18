import React, { useState } from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom';
import auth from '../../firebase.init'
import { useSendPasswordResetEmail  } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [email, setEmail] = useState('');
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    if (user) {
        console.log(user);
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    const handleForgottenPassword = async() => {
        await sendPasswordResetEmail(email)
        toast('Updated Password');
    }
    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div className="rounded-lg shadow-lg bg-white  px-10">
                    <h1 className='text-center mb-9 font-bold text-xl'>Login</h1>
                <form onSubmit={(e)=> e.preventDefault()}>
                    <div className='mb-6'>
                        <label htmlFor="Email">Email</label>
                        <input onChange={handleEmail} className=' py-[5px] w-full px-2 bg-slate-100 border border-[#CFCFCF] rounded-lg outline-none' type="email" name="email" id="" />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="Password">Password</label>
                        <input className=' py-[5px] w-full px-2 bg-slate-100 border border-[#CFCFCF] rounded-lg outline-none' type="password" name="password" id="" />
                        <button onClick={handleForgottenPassword} className='text-sm text-red-600'>Forget Password</button>
                    </div>
                    <button className='bg-[#3A4256] uppercase text-white w-full py-[8px] rounded-lg'>
                            login
                    </button>
                    <p className='text-sm mt-2'>New to Doctors Portal? <Link className='text-[#19D3AE]' to='/signup'>Create new account</Link></p>    
                </form>
                <div
                    className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                    >
                    <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>
                    <button className='mb-7 border border-black w-full py-[8px] rounded-lg' onClick={handleGoogleSignIn}>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
            
        </div>
    );
};

export default Login;
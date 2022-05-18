import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Signup = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div className="rounded-lg shadow-lg bg-white  px-10">
                    <h1 className='text-center mb-9 font-bold text-xl'>Create an Account</h1>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className='mb-6'>
                            <label htmlFor="name">Name</label>
                            <input className=' py-[5px] w-full bg-slate-100 border border-[#CFCFCF] rounded-lg px-2 outline-none' type="email" name="Email" id="" />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="Email">Email</label>
                            <input className=' py-[5px] w-full bg-slate-100 border border-[#CFCFCF] rounded-lg px-2 outline-none' type="email" name="Email" id="" />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="Password">Password</label>
                            <input className=' py-[5px] w-full bg-slate-100 border border-[#CFCFCF] rounded-lg px-2 outline-none' type="password" name="password" id="" />
                        </div>
                        <button className='bg-[#3A4256] uppercase text-white w-full py-[8px] rounded-lg px-2'>
                                login
                        </button>
                        <p className='text-sm mt-2'>Already have an Account? <Link className='text-[#19D3AE]' to='/login'>Login</Link></p>    
                </form>
                <div
                    className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                    >
                    <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>
                    <button className='mb-7 border w-full py-[8px] rounded-lg px-2' onClick={handleGoogleSignIn}>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
            
        </div>
    );
};

export default Signup;
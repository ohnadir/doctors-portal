import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Spinner from '../../Shared/Spinner'
import { useUpdateProfile } from 'react-firebase-hooks/auth';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gError, gLoading] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    navigate(from, { replace: true });
    
    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    if (user || gUser) {
        console.log(user, gUser);
    }
    if ( loading || gLoading || updating) {
        return <Spinner></Spinner>
    }

    // errors
    let signInError;
    if ( error || gError || updatingError) {
        signInError = <p className='text-red-600'><small>{gError?.message} || {error?.message}</small></p>
    }
    const onSubmit = async  data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name })
    };
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div className="rounded-lg shadow-lg bg-white w-96  px-10">
                    <h1 className='text-center mb-9 font-bold text-xl'>Sign Up</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-6'>
                            <label htmlFor="Email">Name</label>
                            <input
                                className=' py-[5px] w-full px-2 bg-slate-100 border border-[#CFCFCF] rounded-lg outline-none'
                                type="name"
                                {...register("name",{
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className='text-red-600 text-sm'>{errors.name.message}</span>}
                                </label>
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="Email">Email</label>
                            <input
                                className=' py-[5px] w-full px-2 bg-slate-100 border border-[#CFCFCF] rounded-lg outline-none'
                                type="email"
                                {...register("email",{
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className='text-red-600 text-sm'>{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className='text-red-600 text-sm'>{errors.email.message}</span>}
                                </label>
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="Password">Password</label>
                            <input
                                className=' py-[5px] w-full px-2 bg-slate-100 border border-[#CFCFCF] rounded-lg outline-none'
                                type="password" name="password"
                                {...register("password",{
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className='text-red-600 text-sm'>{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className='text-red-600 text-sm'>{errors.password.message}</span>}
                                </label>
                        </div>
                        {signInError}
                        <input className='bg-[#3A4256] uppercase text-white w-full py-[8px] rounded-lg' type="submit" value="Sign Up" />
                    </form>
                    <p className='text-sm mt-2'>Already have an account ? <Link className='text-[#19D3AE]' to='/login'>Login</Link></p>
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

export default Signup;
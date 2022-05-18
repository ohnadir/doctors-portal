import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Spinner from '../../Shared/Spinner';

function RequireAuth({ children }) {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
  let location = useLocation();
  if (loading) {
    return <Spinner/>
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
    
  if (!user.emailVerified) {
    return (
      <div className='flex justify-center items-center h-[93vh]'>
        <div>
          <p className='text-[#19D3AE] text-lg mb-4'>Verify Your Email</p>
          <button className='bg-[#3A4256] text-white px-6 py-[4px] rounded-lg'
            onClick={async() => {
              await sendEmailVerification();
              toast('Send Email Verify')
            }}
            >Verify Email</button>
          </div>
        </div>
      )
    }
  
    return children;
  }

export default RequireAuth;
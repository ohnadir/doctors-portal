import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import { sendEmailVerification } from 'firebase/auth';
import { toast } from 'react-toastify';

function RequireAuth({ children }) {
    const [user, loading] = useAuthState(auth)
    let location = useLocation();
  
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (loading) {
        return <>add spinner</>
    }
    if (!user.emailVerified) {
      return (
        <div className='flex justify-center items-center h-[93vh]'>
          <div>
            <p className='text-[#19D3AE] text-lg mb-4'>Verify Your Email</p>
            <button className='bg-[#3A4256] text-white px-4 rounded-lg'
              onClick={async () => {
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
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';

function RequireAuth({ children }) {
    const [user, loading] = useAuthState(auth)
    let location = useLocation();
  
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (loading) {
        return <>add spinner</>
    }
  
    return children;
  }

export default RequireAuth;
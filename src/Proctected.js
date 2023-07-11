import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { userData } from './Provider';

export default function Protected({children}) {
  let isAuthenticated=useContext(userData).isAuthenticated;
  
  if(!isAuthenticated){
    return <Navigate to="/" replace />
  }
  return children;  
}


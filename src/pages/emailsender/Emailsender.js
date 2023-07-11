import React, { useContext } from 'react'
import "./Emailsender.css"
import { userData } from '../../Provider'
export default function Emailsender() {
  const {user}=useContext(userData)
  return (
    <div className='card'>
     <h1  className='emailcontainer'> WELCOME TO FREE BULK EMAIL SERVICES!!</h1> 
     <p className='data'>NAME: {user.name} and EMAIL: {user.email}</p>
    </div>
  )
}

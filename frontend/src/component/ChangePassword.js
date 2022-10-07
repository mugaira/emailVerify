import React, { useRef, useState } from 'react'
import axios from 'axios';

const ChangePassword = () => {

 const password = useRef();
 const confirmPassword = useRef();


 const submitHandler =(e) => {
e.preventDefault();
const updatePassword = async (password) => {
 try {
   const config = {
     headers: {
       'Content-Type': 'application/json',
     },
   };

   const { pdata } = await axios.post(
     '/api/changepassword',
     { password },
     config
   );
 } catch (error) {
   throw new Error('User not found');
 }
};
 }
 return (
  <div>
   
   <form onSubmit={submitHandler}>
    <label htmlFor='password'>password</label>
    <input
     type='password'
     id='password'
     ref={password}
     placeholder='*******'
    />
    <br />
    <label htmlFor='confirmPassword'>Confirm Password</label>
    <input
     type='password'
     id='confirmPassword'
     ref={confirmPassword}
     placeholder='*******'
    />
    <br />

    {/* <button onClick={submitVerifyEmail}>verify email</button> */}
    <br />

    <button type='submit'>update Password</button>
   </form>
  </div>
 )
}

export default ChangePassword;

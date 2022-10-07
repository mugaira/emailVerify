import React, { useRef, useState } from 'react';
import axios from 'axios';

const Login = () => {
  const email = useRef();
  const password = useRef();
  const gmail = useRef();
  const [data, setData] = useState(0);

  const fetchLogin = async (email, password,gmail) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { pdata } = await axios.post(
        '/api/login',
        { email, password,gmail },
        config
      );
      setData(1);
    } catch (error) {
      throw new Error('User not found');
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetchLogin(
      email.current.value,
      password.current.value,
      gmail.current.value
    );
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          ref={email}
          placeholder='email'
        />
        <br />
        <label htmlFor='password'>password</label>
        <input
          type='password'
          id='password'
          ref={password}
          placeholder='*******'
        />
        <br />
        <p>gmail for verification link</p>
        <label htmlFor='gmail'>G-mail</label>
        <input
          type='email'
          id='gmail'
          ref={gmail}
          placeholder='enter gmail'
        />
        <br />

        <button type='submit'>send Link</button>
      </form>
    </div>
  );
};

export default Login;

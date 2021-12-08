/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import M from 'materialize-css';

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const UserSignUp = async () => {
    try {
      if (
        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email
        )
      ) {
        M.toast({ html: 'invalid email', classes: 'red darken-3' });
        return;
      }
      const res = await fetch(`/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }).catch((err) => {
        throw new Error(err);
      });

      const data = await res.json();
      console.info('Sign up data', data, res);
      if (res.status !== 200) {
        M.toast({
          html: data.error,
          classes: 'red darken-2',
        });
      } else {
        M.toast({
          html: data.message,
          classes: 'green darken-1',
        });
        navigate('/signin');
      }
    } catch (error) {
      console.log('Some error occured whiule signing up', error);
    }
  };

  return (
    <div className='mycard'>
      <div className='card auth-card input-field'>
        <h2>Instagram</h2>
        <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className='btn waves-effect waves-light blue darken-1' onClick={UserSignUp}>
          Sign Up
        </button>
        <h5>
          <Link to='/signin'>Already have a account ?</Link>
        </h5>
      </div>
    </div>
  );
};

export default Signup;

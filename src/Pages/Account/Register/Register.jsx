import React, { useState, useEffect } from 'react'
import "../Register/Register.css"
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { GiDialPadlock } from 'react-icons/gi';
import { IoIosMail } from 'react-icons/io';
import { FaUserTie } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { nanoid } from 'nanoid'

const Register = () => {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const PostHandler = (e) => {
    e.preventDefault();
    const addUser = async () => {
      const newUser = {
        Fullname: fullname,
        Username: username,
        Email: email,
        Password: password,
        SecurityKey: nanoid().slice(1, 7)
      }
      
      try{
        const data = await axios.post('https://localhost:7238/api/User', newUser);
        alert("You have successfully registered");
        console.log(data);
      }
      catch (e) {
        alert("User is already available");
      }
    }
    addUser();
  }
  
    
 

  const nameHandler = (e) => {
    setFullname(e.target.value);
  }
  const userHandler = (e) => {
    setUsername(e.target.value);
  }
  const emailHandler = (e) => {
    setEmail(e.target.value);
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  }
  


  return (
    <div>
      <div className='text-center mx-auto wrapper w-25 mt-lg-3' >
        <div className="form-box login">
            <h2 className='mt-4'>Register</h2>
            <form action='#' onSubmit={PostHandler} className='w-100 px-lg-5 pb-lg-5'>
                <div className="input-box align-items-center">
                    <span className='icon'><BsFillPersonLinesFill /></span>
                    <input onChange={nameHandler} className='form-control' type="fullname" placeholder='Enter fullname'/>
                </div>
                <div className="input-box align-items-center">
                    <span className='icon'><FaUserTie /></span>
                    <input onChange={userHandler} className='form-control' type="username" placeholder='Enter username'/>
                </div>
                <div className="input-box align-items-center">
                    <span className='icon'><IoIosMail /></span>
                    <input onChange={emailHandler} className='form-control' type="email" placeholder='Enter email'/>
                </div>
                <div className="input-box align-items-center">
                    <span className='icon'><GiDialPadlock /></span>
                    <input onChange={passwordHandler} className='form-control' type="password" placeholder='Enter password'/>
                </div>
                <div className="remember-forgot mt-2">
                    <label htmlFor="">
                        <input type="checkbox" />I agree to the terms & conditions
                    </label>
                </div>
                <button type='submit' className='botton'>Register</button>
                <div className="login-register">
                    <span className='text-start me-5'>Already have an account ?</span>
                    <Link to='/login' className='register-link'>Login</Link>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Register
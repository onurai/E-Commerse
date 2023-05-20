import React, { useState } from 'react'
import "../Login/Login.css"
import { useNavigate } from 'react-router-dom';
import { IoIosMail } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiDialPadlock } from 'react-icons/gi';
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const LoginHandler = (e) =>{
    e.preventDefault();
    const addUser = async () => {
      const EnteredUser = {
        username: username,
        email: email,
        password: password
      }

      await axios.post('https://localhost:7238/api/Auth', EnteredUser)
      .then(res =>{
        alert("You have successfully Logged in");
        localStorage.setItem('user', JSON.stringify(res.data))
        navigate('/')
      })
      .catch(err =>
        console.log(err)
      )    
    }
    addUser();
  }

  return (
    <div>
      <div className='text-center mx-auto wrapper my-5 w-25' >
        <div className="form-box login">
            <h2 className='mt-4'>Login</h2>
            <form action='#' className='w-100 px-lg-5 pb-lg-5'>
                <div className="input-box align-items-center">
                    <span className='icon'><BsFillPersonFill /></span>
                    <input onChange={(e) => setUsername(e.target.value)} className='form-control' type="username" placeholder='Enter username'/>
                </div>
                <div className="input-box align-items-center">
                    <span className='icon'><IoIosMail /></span>
                    <input onChange={(e) => setEmail(e.target.value)} className='form-control' type="username" placeholder='Enter email'/>
                </div>
                <div className="input-box align-items-center">
                    <span className='icon'><GiDialPadlock /></span>
                    <input onChange={(e)=>setPassword(e.target.value)} className='form-control' type="password" placeholder='Enter password'/>
                </div>
                <div className="remember-forgot mt-2">
                    <label htmlFor="">
                        <input type="checkbox" />Remember me
                    </label>
                    <Link to="">Forgot Password</Link>
                </div>
                <button type='submit' onClick={LoginHandler} className='botton'>Login</button>
                <div className="login-register">
                    <span className='text-start me-5'>Don't have an account ?</span>
                    <Link to='/register' className='register-link'>Register</Link>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
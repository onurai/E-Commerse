import React, { useState } from 'react'
import "../Login/Login.css"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { IoIosMail } from 'react-icons/io';
import { GiDialPadlock } from 'react-icons/gi';
import { Link } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  //const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () =>{
    toast.success("You have successfully logged in", {position: "bottom-right",});
    navigate("/");
  }

  const passwordHandler = (e) =>{
      setPassword(e.target.value);
      console.log(username, password);
  }


  return (
    <div>
      <div className='text-center mx-auto wrapper my-5 w-25' >
        <div className="form-box login">
            <h2 className='mt-4'>Login</h2>
            <form action='#' className='w-100 px-lg-5 pb-lg-5'>
                <div className="input-box align-items-center">
                    <span className='icon'><IoIosMail /></span>
                    <input onChange={(e) => setUsername(e.target.value)} className='form-control' type="username" placeholder='Enter username'/>
                </div>
                <div className="input-box align-items-center">
                    <span className='icon'><GiDialPadlock /></span>
                    <input onChange={passwordHandler} className='form-control' type="password" placeholder='Enter password'/>
                </div>
                <div className="remember-forgot mt-2">
                    <label htmlFor="">
                        <input type="checkbox" />Remember me
                    </label>
                    <Link to="">Forgot Password</Link>
                </div>
                <button type='submit' onClick={handleClick} className='botton'>Login</button>
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
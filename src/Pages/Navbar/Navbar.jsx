import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingBag, FaHeart, FaPowerOff } from 'react-icons/fa';
import {GiShinyPurse} from 'react-icons/gi';
import {BsPersonCircle} from 'react-icons/bs'
import {RxDashboard} from 'react-icons/rx'
import '../Navbar/Navbar.css'
import { useState } from 'react';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [login, setLogin] = useState(false);

    const showHandler = () =>{
        setShow(true);
    }
    const hideHandler = () =>{
        setShow(false);
    }

    useEffect(() =>{
        if(JSON.parse(localStorage.getItem('user')) !== null){
            setLogin(true)
        }
    },[])

    const LogoutHandler = () =>{
        localStorage.removeItem('user')
        setLogin(false)
    }

  return (
    <div className='main d-flex align-items-center justify-content-between'>
        <div className='d-flex ' >
            <li className='ms-lg-5'>
                <Link to={'/'}><GiShinyPurse style={{fontSize:"30px"}}/></Link>
            </li>
            <li className='ms-lg-5'>
                <Link to={"/"}>Home</Link>
            </li>
            <li className='ms-lg-5'>
                <Link to={"/shop"} className=''>Shop</Link>
            </li>
            <li className='ms-lg-5'>
                <Link to={"/about"}>About</Link>
            </li>
            <li className='ms-lg-5'>
                <Link to={"/blog"}>Blog</Link>
            </li>
        </div>
        <div className='d-flex me-lg-5'>
            <li className={login ? 'ms-lg-5' : "d-none"}>
                <Link onClick={LogoutHandler} ><FaPowerOff style={{fontSize: "30px"}}/></Link>
            </li>
            <li className={login ? "d-none" : 'ms-lg-5'} style={{position: 'relative'}} onMouseEnter={showHandler} onMouseLeave={hideHandler}>
                <Link><BsPersonCircle style={{fontSize: "30px"}}/> </Link>
                <ul className={show ? "hideMe hovered" : "hideMe"}>
                    <li><Link to={'/login'}>Login</Link></li>
                    <li><Link to={'/register'}>Register</Link></li>
                </ul>
            </li>
            <li className={login ? 'ms-lg-5' : 'd-none'}>
                <Link to={"/dashboard"}><RxDashboard style={{fontSize: "30px"}}/></Link>
            </li>
            <li className='ms-lg-5'>
                <Link to={"/wishlist"}><FaHeart style={{fontSize: "30px"}}/></Link>
            </li>
            <li className='ms-lg-5'>
                <Link to={"/basket"}><FaShoppingBag style={{fontSize: "30px"}}/></Link>
            </li>
        </div>
    </div>
  )
}

export default Navbar
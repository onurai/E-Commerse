import React, { useState, useEffect, useRef, useCallback } from 'react'
import axios from 'axios';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDot} from 'react-icons/rx'
import './Home.css'

const Home = () => {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);
  const timeRef = useRef(null);

  useEffect(() =>{
    getProducts();
  }, []) 

  const getProducts = () => {
      axios.get('https://localhost:7238/api/Product')
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => console.log(err.response.data))
  };

  const PreSlide = () =>{
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide ? products.length - 1 : index - 1;
    setIndex(newIndex);
  }

  const NextSlide = useCallback(() =>{
    const isFirstSlide = index === products.length - 1;
    const newIndex = isFirstSlide ? 0 : index + 1;
    setIndex(newIndex);
  }, [index, products])

  const GoToSlide = (proId) =>{
    setIndex(proId);
  }

  useEffect(() => {
    if(timeRef.current) {
      clearTimeout(timeRef.current);
    }

    timeRef.current = setTimeout(() => {
      NextSlide();
    }, 200);

    return () => clearTimeout(timeRef.current);
  }, [])

  return (
    <div className='w-100 relative text-center'>
      <div className='w-50 mx-auto mt-5'>
        <img className='image' src={products[index] && products[index].images[0]} alt=''/>
      </div>
      <div className='left-btn'>
        <BsChevronCompactLeft onClick={PreSlide} size={50}/>
      </div>
      <div className='right-btn'>
        <BsChevronCompactRight onClick={NextSlide} size={50}/>
      </div>
      <div className='mt-3 dots text-center'>
        {
          products && products.map((pro, proId) => (
            <span>
              <RxDot 
                key={proId} 
                onClick={() => 
                GoToSlide(proId)}
                style={{fontSize: '20px'}}
                className=''
              />
            </span>
          ))
        }
      </div>
    </div>
  )
}

export default Home
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../Details/Detail.css'
import { useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";

const Detail = () => {
    const {id} = useParams();
    const [item, setItem] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() =>{
        axios.get(`https://localhost:7238/api/Product/${id}`)
        .then(res => {
          setItem(res.data)
        })
        .catch(err => console.log(err.response.data))
    },[]) 

    const handleImage= (index) =>{
        setIndex(index);
    }

  return (
    <div className='container'>
        <div className="row">
            {
                <div className='details'>
                    <div className="col-lg-6 col-12 big-img">
                            <img src={item.images && item.images[index]} style={{width: '400px', height: '400px'}} alt=""/>                         
                    </div>
                    <div className="box col-lg-6 col-12">
                        <div className="row justify-content-start align-items-center">
                            <h4>{item.title}</h4>
                            <ReactStars
                                count={item.star}
                                size={24}
                                isHalf={true}
                                color='gray'
                                activeColor="#ffd700"
                            />
                            <div className='title'>
                                <span>Price: <span style={{textDecoration: 'line-through'}}>{item.price}</span></span><span className='ms-2'>{item.price *((100-item.discountPercentage)/100)} AZN</span>
                            </div>
                        </div>
                        <p> Tags: 
                            {
                                item.productTag && item.productTag.map((tag, index) =>{
                                    (
                                        <span key={index}>{tag}</span>
                                    )
                                })
                            }
                        </p>
                        <p>Description: {item.description}</p>
                        <p>Product Code: {item.productCode}</p>
                        <div className="thumb">
                            {
                                item.images && item.images.map((img, index) =>(
                                        <img 
                                        key={index}  
                                        src={img} alt='' 
                                        onClick={() => handleImage(index)}
                                        style={{width: '100px', height: '100px'}}
                                        />
                                    
                                ))
                            }
                        </div>
                        <button className='btn btn-danger'>Add to cart</button>
                    </div>
                </div>
            }
        </div>           
    </div>
  )
}

export default Detail
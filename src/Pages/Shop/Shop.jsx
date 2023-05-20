import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../Shop/Shop.css'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Shop = () => {
  const [products, setProducts] = useState([]);
    
  useEffect(() =>{
    getProducts();
  }, []) 

  const getProducts = async () => {
      await axios.get('https://localhost:7238/api/Product')
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => console.log(err.response.data))
  };
  
  const Toastering = () =>{
    toast.success('Product selected !');
  }

  return (
    <div className='container'>
      <div className="row mt-lg-5">
        <div className="col-lg-4 left">
          
        </div>
        <div className="col-lg-8 products">
          <div className="row">
            {
                products.map((pro) =>{
                return(
                  <div key={pro.id} className="col-lg-3">
                    <div className="card" >
                      <Link onClick={Toastering} to={`/details/${pro.id}`}>
                        <img src={pro.images[0]} className="img-fluid" alt="..." />
                      </Link>
                      <div className="card-body">
                        <h5 className="card-title">{pro.title}</h5>
                        <span className="card-text">{pro.description}</span>
                        <span className="card-text ms-2">{pro.price-(pro.price * pro.discountPercentage)/100} AZN</span>
                        <button className="btn btn-danger w-100 mx-auto">Add to Card</button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
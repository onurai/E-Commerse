import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { nanoid } from 'nanoid'

const AddProduct = () => {
    const [products, setProducts] = useState([]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [productCode, setProductCode] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [star, setStar] = useState('');

    useEffect(() =>{
        getProducts();
    }, []) 

    const getProducts = async () => {
        await axios.get('https://localhost:7238/api/Product')
        .then(res => {
          setProducts(res.data);
        })
        .catch(err => console.log(err.response.data))
    }


    const proCode = productCode ? productCode : nanoid().slice(1, 10)

    const PostHandler = async() =>{
        const newProduct = {
            title:title,
            description: description,
            productCode: productCode,
            brand: brand,
            price: price,
            countInStock: countInStock,
            discountPercentage: discountPercentage,
            star: star
        }
        await axios.post('https://localhost:7238/api/Product', newProduct)
        .then(response => {
            console.log(response.data)
            alert('New Product was successfully added ')
        })
        .catch(error => {
            console.log(newProduct);
            console.log(error.response.data)
        })
    }


  return (
    <div className='container'>
        <div className="row text-center">
            <div className="col-lg-12">
                <h1 className='my-lg-3'>Add new Product</h1>
                <input onChange={(e)=> setTitle(e.target.value)} className='form-control mx-auto w-50' type="text" placeholder='New Title'/>
                <input onChange={(e)=> setDescription(e.target.value)} className='form-control mx-auto my-3  w-50' type="text" placeholder='New Description'/>
                <input onChange={(e)=> setProductCode(e.target.value)} className='form-control mx-auto w-50' type="text" placeholder='New Product Code'/>
                <input onChange={(e)=> setBrand(e.target.value)} className='form-control mx-auto my-3 w-50' type="text" placeholder='New Brand'/>
                <input onChange={(e)=> setPrice(e.target.value)} className='form-control mx-auto w-50' type="text" placeholder='New Price'/>
                <input onChange={(e)=> setDiscountPercentage(e.target.value)} className='form-control mx-auto my-3 w-50' type="text" placeholder='New Discount Percentage'/>
                <input onChange={(e)=> setCountInStock(e.target.value)} className='form-control mx-auto w-50' type="text" placeholder='New Count In Stock'/>
                <input onChange={(e)=> setStar(e.target.value)} className='form-control mx-auto my-3 w-50' type="text" placeholder='New Star'/>
                <button 
                    style={{borderRadius: '20px', borderColor: 'yellow', color: '#ffffff'}} 
                    className='bg-success px-2 py-2 mt-3'
                    onClick={PostHandler}
                    >Post new Product
                </button>
            </div>
        </div>
    </div>
  )
}

export default AddProduct
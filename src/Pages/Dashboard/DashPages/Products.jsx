import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { nanoid } from 'nanoid'

const Products = () => {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState('');
  const [show, setShow] = useState(false);

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

  let user = JSON.parse(localStorage.getItem('user'))
  console.log(user);
  const token = user.token
  console.log(token)

  const getProducts = async () => {
      await axios.get('https://localhost:7238/api/Product')
      .then(res => {
        setProducts(res.data)
        console.log(products);
      })
      .catch(err => console.log(err.response.data))
  };
  
  const DeleteHandler =(id) => {
    axios.delete(`https://localhost:7238/api/Product/${id}`, {
       headers: {'Authorization':`Bearer ${token}`}
    })
    .then(res => {
        console.log(res.data);
        setProducts(products.filter(pro => pro.id !== id))
    })
    .catch(err => alert(err))
    setShow(false);
  }
  
  const SelectProduct =(id) => {
    setId(id);
    setShow(true);
  }

  const UpdateHandler = async() =>{
      const newProduct = {
        title:title,
        description: description,
        productCode: productCode,
        brand: brand,
        price: price,
        discountPercentage: discountPercentage,
        countInStock: countInStock,
        star: star
    }
    await axios.post(`https://localhost:7238/api/Product/${id}`, newProduct)
    .then(response => {
        console.log(response.data)
        alert('Product was successfully updated')
        getProducts();
    })
    .catch(error => console.log(error.response.data))
    setShow(false);
  }

  return (
    <div className='container-fluid'>
      <div className="row">
      <table className={show ? 'col-lg-10': 'col-lg-12'}>
        <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Title</th>
              <th>Descrtiption</th>
              <th>Product Code</th>
              <th>Brand</th>
              <th>Price (AZN)</th>
              <th>Discount</th>
              <th>Count In Stock</th>
              <th>Star</th>
              <th>Product Edition</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {
              products && products.map((pro, index) =>{
                return(
                  <tr key={index}>
                    <td>{pro.id}</td>
                    <td>              
                        <img key={index} src={pro.images[0]} alt="" style={{width: '70px', height: '70px', margin: '5px'}}/>
                    </td>
                    <td>{pro.title}</td>
                    <td>{pro.description}</td>
                    <td>{pro.productCode}</td>
                    <td>{pro.brand}</td>
                    <td>{pro.price}</td>
                    <td>{pro.discountPercentage}</td>
                    <td>{pro.countInStock}</td>
                    <td>{pro.star}</td>
                    <td>
                      <button onClick={() => SelectProduct(pro.id)} className='btn btn-warning'><FaEdit/> Update</button>
                      <button onClick={() => DeleteHandler(pro.id)} className='btn btn-danger mx-2'><FaTrashAlt/> Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <div className={ show ? 'col-lg-2 mt-5 text-center' : 'd-none'} >
          <input onChange={(e)=> setTitle(e.target.value)} className='form-control w-75' type="text" placeholder='New Title'/>
          <input onChange={(e)=> setDescription(e.target.value)} className='form-control my-3 w-75' type="text" placeholder='New Description'/>
          <input onChange={(e)=> setProductCode(e.target.value)} className='form-control w-75' type="text" placeholder='New Product Code'/>
          <input onChange={(e)=> setBrand(e.target.value)} className='form-control my-3 w-75' type="text" placeholder='New Brand'/>
          <input onChange={(e)=> setPrice(e.target.value)} className='form-control w-75' type="text" placeholder='New Price'/>
          <input onChange={(e)=> setDiscountPercentage(e.target.value)} className='form-control my-3 w-75' type="text" placeholder='New Discount Percentage'/>
          <input onChange={(e)=> setCountInStock(e.target.value)} className='form-control w-75' type="text" placeholder='New Count In Stock'/>
          <input onChange={(e)=> setStar(e.target.value)} className='form-control my-3 w-75' type="text" placeholder='New Star'/>
          <button 
              style={{borderRadius: '20px', color: '#ffffff', border:'none'}} 
              className='bg-warning px-2 py-2 mt-3' 
              onClick={UpdateHandler}
              >Update Product</button>
        </div>
      </div>
    </div>
  )
}

export default Products
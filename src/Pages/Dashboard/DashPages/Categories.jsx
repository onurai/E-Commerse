import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { AiFillFolderAdd } from 'react-icons/ai';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [id, setId] = useState('');
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);

    useEffect(() =>{
      getCategories();
  }, [])

  const getCategories = async () => {
      await axios.get('https://localhost:7238/api/Category')
      .then(res => {
        console.log(res.data)
        setCategories(res.data);
      })
      .catch(err => console.log(err.response.data))
  }

  const DeleteHandler = (id) =>{
    console.log(id);
    axios.delete(`https://localhost:7238/api/Category/${id}`)
    .then(res => {
        console.log(res.data.id);
        setCategories(categories.filter(cat => cat.id !== res.data.id))
    })
    .catch(err => alert(err))
    setShow(false);
    setVisible(false);
  }

  const SelectCategory = (id) =>{
    setVisible(true);
    setId(id);
    console.log(id);
  }
 
  const Update = async() =>{
    const NewCategory = {
      name: name,
      image: image
    }
    await axios.put(`https://localhost:7238/api/Category/${id}`, NewCategory)
    .then(response => {
        console.log(response.data)
        getCategories();
    })
    .catch(error => console.log(error.response.data))
    setVisible(false);
  }

  const AddHandler = () =>{
    setShow(true);
  }

  const PostHandler = async() =>{
    const NewCategory = {
      name: name,
      image: image
    }
    await axios.post('https://localhost:7238/api/Category', NewCategory)
    .then(response => {
        console.log(response.data)
        alert('New Category was successfully added ')
        getCategories();
    })
    .catch(error => console.log(error.response.data))
    setShow(false);
  }


  return (
    <div className='container'>
      <div className="row">
        <table className={visible || show ? 'col-lg-10' : 'col-lg-12'}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Cat Name</th>
              <th>Cat Image</th>
              <th>Edit Categories</th>
            </tr>
          </thead>
          <tbody>
          {
          categories && categories.map((cat) =>{
            return(
              <tr  key={cat.id}>
                <td>{cat.id}</td>
                <td>{cat.name}</td>
                <td><img style={{width: '100px', height: '100px'}} src={cat.image} alt="" /></td>
                <th style={{width: '30%'}}>
                  <button onClick={() => SelectCategory(cat.id)} className='btn btn-warning'><FaEdit/> Update</button>
                  <button onClick={() => DeleteHandler(cat.id)} className='btn btn-danger mx-2'><FaTrashAlt/> Delete</button>
                  <button onClick={AddHandler} className='btn btn-success'><AiFillFolderAdd style={{fontSize: '22px'}}/> Add</button>
                </th>
              </tr>
            )
          })
          }
          </tbody>
        </table>
        <div className={ visible ? 'col-lg-2 mt-5 text-center' : 'd-none'} >
          <input onChange={(e)=> setName(e.target.value)} className='form-control' type="text" placeholder='New Category Name'/>
          <input onChange={(e)=> setImage(e.target.value)} className='form-control my-3' type="text" placeholder='New Image Url'/>
          <button 
              style={{borderRadius: '20px', color: '#ffffff', border: 'none'}} 
              className='bg-warning px-2 py-2 mt-3' 
              onClick={Update}
              >Update Category</button>
        </div>
        <div className={ show ? 'col-lg-2 mt-5 text-center' : 'd-none'} >
          <input onChange={(e)=> setName(e.target.value)} className='form-control' type="text" placeholder='New Category Name'/>
          <input onChange={(e)=> setImage(e.target.value)} className='form-control my-3' type="text" placeholder='New Image Url'/>
          <button 
              style={{borderRadius: '20px', color: '#ffffff', border:'none'}} 
              className='bg-success px-2 py-2 mt-3' 
              onClick={PostHandler}
              >Post new Category</button>
        </div>
      </div>
    </div>
  )
}

export default Categories
import React from 'react'
import { useState, useEffect } from 'react'
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { GiCheckMark } from 'react-icons/gi';
import { CgRadioChecked  } from 'react-icons/cg';
import axios from 'axios';


const Users = () => {
    const [users, setUsers] = useState([]);
    const [value, setValue] = useState('');
    const [narrow, setNarrow] = useState(false);

    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [secure, setSecure] = useState('');

    const [id, setId] = useState('');

    useEffect(() =>{
        getUsers();
    }, [])

    const getUsers = async () => {
        const response = await axios.get('https://localhost:7238/api/User')
        setUsers(response.data);
    }
   
    const firstFiltered = users.filter(user => user.fullname.toLowerCase().includes(value.toLowerCase())) 

    const DeleteHandler = (id) =>{
        axios.delete(`https://localhost:7238/api/User/${id}`)
        .then(res => {
            console.log(res.data.id);
            setUsers(users.filter(user => user.id !== res.data.id))
        })
        .catch(response => alert(response.response.data))
    }

    const SelectUser = (id) =>{
        setId(id);
        setNarrow(true)
    }
    
    const Update = async() =>{
        const newUser = {
            fullname: fullname,
            username:username,
            email:email,
            securityKey:secure
        }
        await axios.put(`https://localhost:7238/api/User/${id}`, newUser)
        .then(response => {
            console.log(response)
            getUsers();
        })
        .catch(error => console.log(error.response.data))
        setNarrow(false);
    }

  return (
    <div className='container mt-2 text-center'>
        <input onChange={(e) => setValue(e.target.value)} type='text' placeholder='Search...' className={narrow ? 'form-control my-3 w-25 mx-auto':'form-control my-3 w-50 mx-auto'} />

        <div className="row">
            <table className={ narrow ? "col-lg-9" : 'col-lg-12'}>
                <thead>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>FullName</th>
                        <th scope='col'>Username</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>IsAdmin</th>
                        <th scope='col' className='text-start mx-5'>Edit User</th>
                    </tr>
                </thead>
                <tbody>
                    { firstFiltered && firstFiltered.map((user, index) =>{
                            return(
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.fullname}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.isAdmin ? <GiCheckMark /> : <CgRadioChecked/>}</td>
                                    <td>
                                        <button onClick={() => SelectUser(user.id)} className='btn btn-warning me-3 my-1'><FaEdit/> Update</button>
                                        <button onClick={() => DeleteHandler(user.id)} className='btn btn-danger'><FaTrashAlt/> Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className={ narrow ? "col-lg-3 mt-5 text-center" : 'd-none'} >
                <input onChange={(e)=> setFullname(e.target.value)} className='form-control' type="text" placeholder='New Fullname'/>
                <input onChange={(e)=> setUsername(e.target.value)} className='form-control my-3' type="text" placeholder='New Username'/>
                <input onChange={(e)=> setEmail(e.target.value)} className='form-control my-3' type="text" placeholder='New Email'/>
                <input onChange={(e)=> setSecure(e.target.value)} className='form-control' type="text" placeholder='New Secure Key'/>
                <button 
                    style={{borderRadius: '20px', borderColor: 'red'}} 
                    className='bg-warning px-2 py-1 mt-2' 
                    onClick={Update}
                    >Update User</button>
            </div>
        </div>
    </div>
  )
}

export default Users
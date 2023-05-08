import React from 'react'
import {Link} from 'react-router-dom'
import '../Dashboard/Dashboard.css'

const Dashboard = () => {
  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-lg-2 mt-lg-3">
                <p className='ms-lg-5'><Link to={"/users"} >Users</Link></p>
                <p className='ms-lg-5'><Link to={"/categories"} >Categories</Link></p>
                <p className='ms-lg-5'><Link to={"/products"} >Products</Link></p>
                <p className='ms-lg-5'><Link to={"/addProduct"} >Add Product</Link></p>
            </div>
            <div className="col-lg-10">
                <img style={{width: "100%", height: "95%", objectFit: "contain" }} src="https://www.dashboardy.pl/wp-content/uploads/2018/12/ds4-modern-dashboard.png" alt="" />
            </div>    
        </div>      
    </div>
  )
}

export default Dashboard
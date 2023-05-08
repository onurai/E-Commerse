import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from '../src/Pages/Navbar/Navbar.jsx'
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Basket from './Pages/Basket/Basket';
import WishList from './Pages/WishList/WishList';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Account/Login/Login';
import Register from './Pages/Account/Register/Register';
import NotFound from './Pages/NotFound';
import ForgotPassword from './Pages/Account/Login/ForgotPassword/ForgotPassword';
import Dashboard from './Pages/Dashboard/Dashboard';
import Categories from './Pages/Dashboard/DashPages/Categories';
import Products from './Pages/Dashboard/DashPages/Products';
import Users from './Pages/Dashboard/DashPages/Users';
import AddProduct from './Pages/Dashboard/DashPages/AddProduct';
import { React } from 'react';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/forgot' element={<ForgotPassword />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/products' element={<Products />} />
          <Route path='/users' element={<Users />} />
          <Route path='/addProduct' element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

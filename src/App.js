import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllReviews from './Components/AllReviews/AllReviews';
import AllTools from './Components/AllTools/AllTools';
import Login from './Components/Athentication/Login';
import ReqAuth from './Components/Athentication/ReqAuth';
import SignUp from './Components/Athentication/SignUp';
import AddProduct from './Components/Dashboard/AddProduct/AddProduct';
import AddReview from './Components/Dashboard/AddReview/AddReview';
import AllUsers from './Components/Dashboard/AllUsers/AllUsers';
import Dashboard from './Components/Dashboard/Dashboard';
import ManageOrders from './Components/Dashboard/ManageOrders/ManageOrders';
import ManageProduct from './Components/Dashboard/ManageProduct/ManageProduct';
import MyOrders from './Components/Dashboard/MyOrders/MyOrders';
import MyProfile from './Components/Dashboard/MyProfile/MyProfile';
import Home from './Components/HomePage/Home';
import Order from './Components/Order/Order';
import Footer from './Components/SharedPages/Footer';
import Navbar from './Components/SharedPages/Navbar';

export const CancelOrderContext = createContext('');


function App() {
  const [orderId, setOrderID] = useState('')

  return (
    <div>
      <Navbar />
      <CancelOrderContext.Provider value={orderId}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/alltools' element={<AllTools />}></Route>
          <Route path='/allreviews' element={<AllReviews />}></Route>
          <Route path='/dashboard' element={<ReqAuth><Dashboard /></ReqAuth>}>
            <Route index element={<MyProfile />}></Route>

            <Route path='myorders' element={<MyOrders
              setOrderID={setOrderID} />}></Route>

            <Route path='addreview' element={<AddReview />}></Route>
            <Route path='manageorders' element={<ManageOrders />}></Route>
            <Route path='addproduct' element={<AddProduct />}></Route>
            <Route path='users' element={<AllUsers />}></Route>
            <Route path='manageproducts' element={<ManageProduct />}></Route>

          </Route>
          <Route path='/order/:id' element={
            <ReqAuth>
              <Order />
            </ReqAuth>
          }></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
        </Routes>
      </CancelOrderContext.Provider>
      <Footer />
    </div>
  );
}

export default App;

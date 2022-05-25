import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllReviews from './Components/AllReviews/AllReviews';
import AllTools from './Components/AllTools/AllTools';
import Login from './Components/Athentication/Login';
import ReqAuth from './Components/Athentication/ReqAuth';
import SignUp from './Components/Athentication/SignUp';
import Addtool from './Components/Dashboard/Addtool/Addtool';
import AddReview from './Components/Dashboard/AddReview/AddReview';
import AllUsers from './Components/Dashboard/AllUsers/AllUsers';
import Dashboard from './Components/Dashboard/Dashboard';
import ManageOrders from './Components/Dashboard/ManageOrders/ManageOrders';
import ManageTools from './Components/Dashboard/ManageTools/ManageTools';
import MyOrders from './Components/Dashboard/MyOrders/MyOrders';
import MyProfile from './Components/Dashboard/MyProfile/MyProfile';
import Home from './Components/HomePage/Home';
import Order from './Components/Order/Order';
import Footer from './Components/SharedPages/Footer';
import Navbar from './Components/SharedPages/Navbar';
import UpdateTool from './Components/Dashboard/UpdateTool/UpdateTool';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Payment from './Components/Dashboard/MyOrders/Payment';
import Blogs from './Components/Blogs/Blogs';
import Portfolio from './Components/Portfolio/Portfolio';
import ResetPass from './Components/Athentication/ResetPass';

export const CancelOrderContext = createContext('');


function App() {
  const [orderId, setOrderID] = useState('')

  return (
    <div>
      <Navbar />
      <CancelOrderContext.Provider value={orderId}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/alltools' element={<AllTools />}></Route>
          <Route path='/allreviews' element={<AllReviews />}></Route>
          <Route path='/dashboard' element={<ReqAuth><Dashboard /></ReqAuth>}>
            <Route index element={<MyProfile />}></Route>
            <Route path='myorders' element={<MyOrders setOrderID={setOrderID} />}></Route>
            <Route path='myorders/payment/:id' element={<Payment />}></Route>
            <Route path='addreview' element={<AddReview />}></Route>
            <Route path='manageorders' element={<ManageOrders />}></Route>
            <Route path='addtool' element={<Addtool />}></Route>
            <Route path='users' element={<AllUsers />}></Route>
            <Route path='managetools' element={<ManageTools />}></Route>
            <Route path='managetools/updatetool/:id' element={<UpdateTool />}></Route>

          </Route>
          <Route path='/order/:id' element={
            <ReqAuth>
              <Order />
            </ReqAuth>
          }></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/resetpass' element={<ResetPass />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </CancelOrderContext.Provider>
      <Footer />
    </div>
  );
}

export default App;

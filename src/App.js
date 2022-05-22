import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllTools from './Components/AllTools/AllTools';
import Login from './Components/Athentication/Login';
import SignUp from './Components/Athentication/SignUp';
import AddReview from './Components/Dashboard/AddReview/AddReview';
import Dashboard from './Components/Dashboard/Dashboard';
import MyOrders from './Components/Dashboard/MyOrders/MyOrders';
import MyProfile from './Components/Dashboard/MyProfile/MyProfile';
import Home from './Components/HomePage/Home';
import Order from './Components/Order/Order';
import Footer from './Components/SharedPages/Footer';
import Navbar from './Components/SharedPages/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/alltools' element={<AllTools />}></Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<MyOrders />}></Route>
          <Route path='addreview' element={<AddReview />}></Route>
          <Route path='myprofile' element={<MyProfile />}></Route>
        </Route>
        <Route path='/order/:id' element={<Order />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

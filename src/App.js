import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Athentication/Login';
import SignUp from './Components/Athentication/SignUp';
import Home from './Components/HomePage/Home';
import Footer from './Components/SharedPages/Footer';
import Navbar from './Components/SharedPages/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link, NavLink } from 'react-router-dom';
import gear1 from '../../Assets/icon/gear-icon-1.ico'
import gear2 from '../../Assets/icon/gear-icon-2.ico'
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='sticky top-0 z-50 border-b-2 bg-base-100'>
            <div className="navbar lg:w-5/6 mx-auto">

                <div className="navbar-start">
                    {
                        user && <p className='text-xl font-semibold lg:hidden'>{user.displayName}</p>
                    }
                    <Link to='/' className="text-2xl font-bold hidden uppercase lg:flex">RKZ Mason <span className='flex ml-2'>T <img className='w-5 h-5 mt-2' src={gear1} alt="" /> <img className='w-5 h-5 mt-2' src={gear2} alt="" />ls</span></Link>
                </div>
                <Link to='/' className="text-2xl font-bold whitespace-nowrap lg:hidden uppercase">RKZ Mason <span className='flex ml-2'>T <img className='w-5 h-5 mt-2' src={gear1} alt="" /> <img className='w-5 h-5 mt-2' src={gear2} alt="" />ls</span></Link>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='mx-1 font-semibold'><NavLink to='/'>Home</NavLink></li>
                        <li className='mx-1 font-semibold'><NavLink to='/alltools'>Tools</NavLink></li>
                        {
                            user && <li className='mx-1 font-semibold'><NavLink to='/dashboard'>Dashboard</NavLink></li>
                        }
                        <li className='mx-1 font-semibold'><NavLink to='/blogs'>Blogs</NavLink></li>
                        <li className='mx-1 font-semibold'><NavLink to='/about'>About</NavLink></li>
                        {
                            user ? <li onClick={() => signOut(auth)} className='mx-1 font-semibold text-red-500'><Link to='/'>Log Out</Link></li> : <li className='mx-1 font-semibold'><NavLink to='/login'>Login</NavLink></li>
                        }

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <p className='text-xl font-semibold lg:block hidden'>{user.displayName}</p>
                    }
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content dropdown-end mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='my-1 font-semibold'><NavLink to='/'>Home</NavLink></li>
                        <li className='my-1 font-semibold'><NavLink to='/alltools'>Tools</NavLink></li>
                        {user && <li className='my-1 font-semibold'><NavLink to='/dashboard'>Dashboard</NavLink></li>}
                        <li className='my-1 font-semibold'><NavLink to='/blogs'>Blogs</NavLink></li>
                        <li className='my-1 font-semibold'><NavLink to='/about'>About</NavLink></li>

                        {user ? <li className='my-1 font-semibold text-red-500'><NavLink to='/logout'>Log Out</NavLink></li> : <li className='my-1 font-semibold'><NavLink to='/login'>Login</NavLink></li>}
                    </ul>
                </div>


            </div>
        </div>
    );
};

export default Navbar;
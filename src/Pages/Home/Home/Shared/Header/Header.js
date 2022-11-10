import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../../assets/logo.svg';
import { AuthContext } from '../../../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }

    const menuItem = <>
        {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to='/appointment'>Appointment</Link></li>
                    <li className='font-semibold'>
                        <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button>
                    </li>
                </>
                :
                <li className='font-semibold'><Link to='/login'>Login</Link></li>
        }

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <img className='w-10 h-10' src={logo} alt="" />
                <a href="/" alt=" " className="btn btn-ghost normal-case text-xl">Dr. KLA</a>

            </div>
            <div className="flex-none gap-2">
                <ul className="menu menu-horizontal p-0">
                    <li><a href="/" alt=" ">Home</a></li>
                    <li><a href="/service" alt=" ">Services</a></li>
                    {/* <li><a href="/login" alt=" ">Login</a></li> */}
                    <li><a href="/blog" alt=" ">Blog</a></li>
                    {/* <li><a href="/appointment" alt=" ">Appointment</a></li> */}
                    {menuItem}
                </ul>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img href=" " alt="" src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
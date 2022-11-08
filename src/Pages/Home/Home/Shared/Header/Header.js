import React from 'react';
import logo from '../../../../../assets/logo.svg';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <img className='w-10 h-10' src={logo} alt="" />
                <a href="/" alt=" " className="btn btn-ghost normal-case text-xl">Dr. KLA</a>

            </div>
            <div className="flex-none gap-2">
                <ul className="menu menu-horizontal p-0">
                    <li><a href="/" alt=" ">Home</a></li>
                    <li><a href="/" alt=" ">Services</a></li>
                    <li><a href="/" alt=" ">Blog</a></li>
                    <li><a href="/" alt=" ">Appointment</a></li>
                </ul>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img href=" " alt="" src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a href=" " alt="" className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a href=" " alt="" >Settings</a></li>
                        <li><a href=" " alt="" >Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
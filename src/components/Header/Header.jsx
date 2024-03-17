import React from 'react';
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <header>

            <div className="navbar mb-3 flex-col md:flex-row ">
                <div className="navbar-start w-full md:w-[50%]">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost md:text-3xl text-xl">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end w-full  md:w-[50%]">
                    <div className="relative md:mr-5">
                        <input
                            className="appearance-none border-2 md:pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-full w-full py-2 pl-10 md:px-3 text-gray-800 leading-tight focus:outline-none focus:ring-slate-300 focus:border-slate-400 focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Search..."
                        />


                        <div className="absolute left-0 inset-y-0 flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            <Banner></Banner>
        </header>
    );
};

export default Header;
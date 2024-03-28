import { NavLink } from "react-router-dom";

const Header = () => {
    const links=<>
        <div className="gap-4 md:flex font-medium">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/listedBooks">Listed Books</NavLink></li>
            <li><NavLink to="/pageRead">Pages to Read</NavLink></li>
            <li><NavLink to="/blogs">Blogs</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
        </div>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {links}
                </ul>
                </div>
                <a className="text-lg md:text-3xl font-extrabold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                     {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-2">
                <div className="">
                    <a className="btn bg-[#23BE0A] text-white font-medium w-24 md:w-32">Sign In</a>
                </div>
                <div>
                    <a className="btn bg-[#59C6D2] text-white font-medium w-24 md:w-32">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
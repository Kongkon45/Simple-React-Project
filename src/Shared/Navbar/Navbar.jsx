import React from "react";
import { Link, NavLink } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const auth = getAuth();
    const navigate = useNavigate();

    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            navigate("/signin")
          }).catch((error) => {
            console.log(error.code)
          });
    }

    
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-blue-400 text-white text-3xl ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-400 rounded-box w-52"
            >
              <li>
                <NavLink to='/' activeClassName='orange' style={{background:'none'}}>Home</NavLink>
              </li>
              <li>
                <NavLink to='/about_Us' activeClassName='orange' style={{background:'none'}}>About</NavLink>
              </li>
              <li>
                <NavLink to='/services' activeClassName='orange' style={{background:'none'}}>Services</NavLink>
              </li>
              <li>
                <NavLink to='/contact' activeClassName='orange' style={{background:'none'}}>Contact</NavLink>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost text-3xl font-bold">daisyUI</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[18px] font-bold">
            <li>
              <NavLink to='/' activeClassName='orange' style={{background:'none'}}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about_Us' activeClassName='orange' style={{background:'none'}}>About Us</NavLink>
            </li>
            <li>
              <NavLink to='/services' activeClassName='orange' style={{background:'none'}}>Services</NavLink>
            </li>
            <li>
              <NavLink to='/contact' activeClassName='orange' style={{background:'none'}}>Contact</NavLink>
            </li>
            <li>
              <NavLink to='/signup' activeClassName='orange' style={{background:'none'}}>SignUp</NavLink>
            </li>
            <li>
              <NavLink to='/signin' activeClassName='orange' style={{background:'none'}}>SignIn</NavLink>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <NavLink>Settings</NavLink>
            </li>
            <li>
              <NavLink onClick={handleSignOut}>SignOut</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { FaSearch } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/news">News</NavLink>
      </li>
      <li>
        <NavLink to="/destination">Destination</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <nav
      className={`${
        location.pathname === "/login"
           || location.pathname === "/signUp" ? "static mx-auto "
          : "absolute left-1/2 -translate-x-1/2 text-white"
      } navbar bg-transparent    max-w-7xl  `}
    >
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Travel Guru</a>

        {
          location.pathname === "/login" ? "" 
          : 
        <div className="flex items-center border border-white rounded-md p-2 bg-[#ffffff53] focus-within:border-white shadow-sm w-full">
          <FaSearch className="text-white mr-2" />
          <input
            type="text"
            placeholder="Search your Destination..."
            className="flex-1 outline-none bg-transparent text-white placeholder-white"
          />
        </div>
        }

      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <Link to="/login" className="btn bg-yellow-400">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

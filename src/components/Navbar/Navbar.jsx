import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  }

  const navOptions = (
    <>
      <li>
        <NavLink
          className={({isActive})=>isActive?"me-6 text-gray-300 text-sm bg-transparent":"me-6 hover:text-gray-300 text-white hover:text-sm hover:bg-transparent"}
          to="/"
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive})=>isActive?"me-6 text-gray-300 text-sm bg-transparent":"me-6 hover:text-gray-300 text-white hover:text-sm hover:bg-transparent"}
          to="/instructors"
        >
          INSTRUCTORS
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive})=>isActive?"me-6 text-gray-300 text-sm bg-transparent":"me-6 hover:text-gray-300 text-white hover:text-sm hover:bg-transparent"}
          to="/classes"
        >
          CLASSES
        </NavLink>
      </li>
      { user &&
      <li>
      <NavLink
        className={({isActive})=>isActive?"me-6 text-gray-300 text-sm bg-transparent":"me-6 hover:text-gray-300 text-white hover:text-sm hover:bg-transparent"}
        to="/dashboard"
      >
        DASHBOARD
      </NavLink>
    </li>
      }
      {
        user ? <>
        <img title={user.displayName} className="w-12 me-3 mb-3 rounded-full" src={user.photoURL} alt="" />
        <button onClick={handleLogOut} className="btn me-16 border-none bg-gradient-to-r from-green-500 to-green-600 hover:scale-90 rounded px-5 py-1 text-white font-bold -mt-2">
        LOG OUT
      </button>
        </> : <li>
        <Link to="/login">
          <button className="btn me-16 border-none bg-gradient-to-r from-green-500 to-green-600 hover:scale-90 rounded px-5 py-1 text-white font-bold -mt-3">
            LOG IN
          </button>
        </Link>
      </li>
      }
    </>
  );
  return (
    <>
      <div className="navbar -mt-4 mb-8 md:-mt-0 relative z-10 bg-opacity-30 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn border-none btn-sm bg-green-300 md:hidden">
              <FaBars
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </FaBars>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact
                 dropdown-content p-2 shadow bg-green-400 rounded-box w-48"
            >
              {navOptions}
            </ul>
          </div>
          <div className="flex items-center mt-2 md:-ps-4 ms-5">
            <img
              className="md:w-32 w-28 md:ms-0 ms-20"
              src="https://i.ibb.co/z6cF7yH/Picsart-23-06-08-00-16-31-818.png?fbclid=IwAR2HUTtHinkdzNoWRvPJ0un2hgwuqPFA7JE6kPIj5hB5C4A1yBnU95PsrJQ"
              alt=""
            />
            <p className="md:text-xl text-xs text-white font-serif font-semibold uppercase -ms-3 tracking-widest">
              Supreme
              <br />
              <span className="text-xs md:text-sm  normal-case -tracking-wide ">
                Athletes Academy
              </span>
            </p>
          </div>
        </div>
        <div className="navbar-center hidden md:flex ms-40">
          <ul className="flex px-1 md:mt-7">{navOptions}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

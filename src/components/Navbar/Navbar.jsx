import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

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
        <Link
          className="me-6 hover:text-gray-300 text-white hover:text-sm hover:bg-transparent"
          to="/"
        >
          HOME
        </Link>
      </li>
      <li>
        <Link
          className="me-5 hover:text-gray-300 text-white hover:text-sm hover:bg-transparent"
          to="/"
        >
          INSTRUCTORS
        </Link>
      </li>
      <li>
        <Link
          className="me-5 text-white hover:text-gray-300 hover:text-sm hover:bg-transparent"
          to="/"
        >
          CLASSES
        </Link>
      </li>
      { user &&
      <li>
      <Link
        className="me-5 text-white hover:text-gray-300 hover:text-sm hover:bg-transparent"
        to="/"
      >
        DASHBOARD
      </Link>
    </li>
      }
      {
        user ? <>
        <img title={user.displayName} className="w-12 me-3 mb-3 rounded-full" src={user.photoURL} alt="" />
        <button onClick={handleLogOut} className="btn me-16 border-none bg-gradient-to-r from-green-400 to-green-500 hover:scale-90 rounded px-5 py-1 text-white font-bold -mt-2">
        LOG OUT
      </button>
        </> : <li>
        <Link to="/login">
          <button className="btn me-16 border-none bg-gradient-to-r from-green-400 to-green-500 hover:scale-90 rounded px-5 py-1 text-white font-bold -mt-3">
            LOG IN
          </button>
        </Link>
      </li>
      }
    </>
  );
  return (
    <>
      <div className="navbar relative z-10 bg-opacity-30 text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact
                 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <div className="flex items-center mt-2 -ps-4">
            <img
              className="w-32"
              src="https://i.ibb.co/z6cF7yH/Picsart-23-06-08-00-16-31-818.png?fbclid=IwAR2HUTtHinkdzNoWRvPJ0un2hgwuqPFA7JE6kPIj5hB5C4A1yBnU95PsrJQ"
              alt=""
            />
            <p className="text-xl text-white font-serif font-semibold uppercase -ms-3 tracking-widest">
              Supreme <br />
              <span className="text-sm  normal-case -tracking-wide ">
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

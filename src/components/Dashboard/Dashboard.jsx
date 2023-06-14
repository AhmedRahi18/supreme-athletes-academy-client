import { FaCheckCircle, FaCog, FaHistory, FaHome, FaList, FaPlus, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

  const isStudent = false;
  const isInstructor = true;
  const isAdmin = false;

  return (
    <div className="bg-green-100">
         <div className="-mt-28">
        <img
          className="w-[1260px] h-[300px] brightness-50 rounded"
          src="https://media.istockphoto.com/id/1289562025/vector/dark-green-background-with-small-touches-christmas-texture-with-vignette-on-the-sides-and.jpg?s=612x612&w=0&k=20&c=AyUlGOhur7Su8xWtu-3eTx3Nup4YEj-sRT6Wj-e-4nw="
          alt=""
        />
        <div className="absolute inset-0 top-20 w-1/2 mx-auto">
          <div className=" text-white p-4">
            <h2 className="text-6xl font-bold text-center">Dashboard</h2>
            <p className="text-center text-gray-200 mt-3">
            Welcome to your personalized dashboard, where you can manage and track all your activities and information in one place.
            </p>
          </div>
        </div>
      </div>
      <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center mt-10">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-green-800">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
          {
            isStudent && <>
            <li>
            <img className="w-52 ms-8 -mt-5" src="https://i.ibb.co/z6cF7yH/Picsart-23-06-08-00-16-31-818.png?fbclid=IwAR2HUTtHinkdzNoWRvPJ0un2hgwuqPFA7JE6kPIj5hB5C4A1yBnU95PsrJQ" alt="" />
            <p className="text-white font-semibold text-xl -mt-5 mb-3 underline">Student Dashboard</p>
          </li>
            <li>
            <NavLink className="uppercase text-black" to="/">
              <FaHome size={20}></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink className="uppercase text-black" to="/dashboard/mySelectedClass">
            <FaList size={20}/> My Selected Classes
            </NavLink>
          </li>
          <li>
            <NavLink className="uppercase text-black" to="/dashboard/myEnrolledClass">
            <FaCheckCircle size={20}/> My Enrolled Classes
            </NavLink>
          </li>
          <li>
            <NavLink className="uppercase text-black" to="/paymentHistory">
           <FaHistory size={20}/> Payment History
            </NavLink>
          </li>
            </>
          }
        {isInstructor && 
        <>
        <li>
            <img className="w-52 ms-8 -mt-5" src="https://i.ibb.co/z6cF7yH/Picsart-23-06-08-00-16-31-818.png?fbclid=IwAR2HUTtHinkdzNoWRvPJ0un2hgwuqPFA7JE6kPIj5hB5C4A1yBnU95PsrJQ" alt="" />
            <p className="text-white font-semibold text-xl -mt-5 mb-3 underline">Instructor Dashboard</p>
          </li>
        <li>
            <NavLink className="uppercase text-black" to="/">
            <FaHome size={20}></FaHome> Home
            </NavLink>
          </li>
        <li>
            <NavLink className="uppercase text-black" to="/dashboard/addClass">
             <FaPlus size={20}></FaPlus> Add a Class
            </NavLink>
          </li>
          <li>
            <NavLink className="uppercase text-black" to="/dashboard/myClasses">
            <FaList size={20}/> My Classes
            </NavLink>
          </li>
        </>
        }
        {
          isAdmin && <>
          <li>
            <img className="w-52 ms-8 -mt-5" src="https://i.ibb.co/z6cF7yH/Picsart-23-06-08-00-16-31-818.png?fbclid=IwAR2HUTtHinkdzNoWRvPJ0un2hgwuqPFA7JE6kPIj5hB5C4A1yBnU95PsrJQ" alt="" />
            <p className="text-white font-semibold text-xl -mt-5 mb-3 underline">Admin Dashboard</p>
          </li>
          <li>
            <NavLink className="uppercase text-black" to="/">
              <FaHome size={20}></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink className="uppercase text-black" to="/dashboard/manageClasses">
            <FaCog size={20}/> Manage Classes
            </NavLink>
          </li>
          <li>
            <NavLink className="uppercase text-black" to="/dashboard/manageUsers">
            <FaUsers size={20}/> Manage Users
            </NavLink>
          </li>
          </>
        }
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;

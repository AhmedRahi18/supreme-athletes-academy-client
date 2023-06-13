import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
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
      <div className="drawer-content flex flex-col items-center justify-center">
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
        <li>
            <NavLink className="uppercase" to="/">
               Home
            </NavLink>
          </li>
          <li>
            <NavLink className="uppercase" to="mySelectedClass">
            My Selected Classes
            </NavLink>
          </li>
          <li>
            <NavLink className="uppercase" to="">
            My Enrolled Classes
            </NavLink>
          </li>
          <li>
            <NavLink className="uppercase" to="">
            Payment History
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;

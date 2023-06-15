import { useQuery } from "@tanstack/react-query";
import { FaChalkboardTeacher, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is an admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInstructor = (user) => {
      fetch(`http://localhost:5000/users/instructor/${user._id}`, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${user.name} is an instructor now`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }

  return (
    <div>
      <h2 className="text-black text-5xl font-serif border-b-2 border-b-black pb-2 text-center mb-5">
        Manage Users
      </h2>
      <div>
        <table className="table w-full bg-green-900">
          {/* head */}
          <thead>
            <tr>
              <th className="border-b-2 border-white text-xl font-semibold text-white font-serif">
                #
              </th>
              <th className="border-b-2 border-white text-xl font-semibold text-white font-serif">
                Name
              </th>
              <th className="border-b-2 border-white text-xl font-semibold text-white font-serif">
                Email
              </th>
              <th className="border-b-2 border-white text-xl font-semibold text-white font-serif">
                Role
              </th>
              <th className="border-b-2 border-white text-xl font-semibold text-white font-serif">
                Make Instructor
              </th>
              <th className="border-b-2 border-white text-xl font-semibold text-white font-serif">
                Make Admin
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td className="border-b-2 border-white text-white font-serif">
                  {index + 1}
                </td>
                <td className="border-b-2 border-white text-white font-serif">
                  {user.name}
                </td>
                <td className="border-b-2 border-white text-white font-serif">
                  {user.email}
                </td>
                <td className="border-b-2 border-white text-white font-serif">
                  {user.role}
                </td>
                <td className="border-b-2 text-center border-white text-white font-serif">
                  <button
                    onClick={() => handleMakeInstructor(user)}
                    disabled={user.role === "instructor"}
                    className="btn btn-info border-none bg-blue-600 hover:scale-90 text-white"
                  >
                    <FaChalkboardTeacher size={20}></FaChalkboardTeacher>
                  </button>
                </td>
                <td className="border-b-2 text-center border-white text-white font-serif">
                  <button
                    disabled={user.role === "admin"}
                    onClick={() => handleMakeAdmin(user)}
                    className="btn btn-success me-10 border-none bg-green-600 hover:scale-90 text-white"
                  >
                    <FaUserShield size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;

import { FaCreditCard, FaTrashAlt } from "react-icons/fa";
import useMyClasses from "../../hooks/useMyClasses";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MySelectedClass = () => {
    const [myClasses,refetch] = useMyClasses();

    const handleDelete = (myClass)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://supreme-athletes-academy-server.vercel.app/myClasses/${myClass._id}`,{
                method: 'DELETE',
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your Class has been deleted.',
                        'success'
                      )
                }
              })
            }
          })
      }

    return (
        <div>
            <h2 className="text-black text-5xl font-serif border-b-2 border-b-black pb-2 text-center">My Selected Classes</h2>
            <div className="mt-10">
            <table className="table w-full bg-green-900">
          {/* head */}
          <thead>
            <tr>
              <th className="border-b-2 border-white text-xl font-semibold text-white font-serif">
                #
              </th>
              <th className="border-b-2 border-white text-xl font-semibold text-white font-serif">
                Class
              </th>
              <th className="border-b-2 border-white text-xl font-semibold text-white font-serif">
                Class Name
              </th>
              <th className="border-b-2 border-white text-xl font-semibold text-white font-serif">
                Instructor Name
              </th>
              <th className="border-b-2 border-white text-xl font-semibold text-white font-serif">
                Price
              </th>
              <th className="border-b-2 border-white text-xl font-semibold text-white font-serif">
                Delete
              </th>
              <th className="border-b-2 border-white text-xl font-semibold text-white font-serif">
                Pay
              </th>
            </tr>
          </thead>
          <tbody>
            {myClasses.map((myClass, index) => (
              <tr key={myClass._id}>
                <td className="border-b-2 border-white text-white font-serif">
                  {index + 1}
                </td>
                <td className="border-b-2 border-white text-white font-serif">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={myClass.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td className="border-b-2 border-white text-white font-serif">
                  {myClass.name}
                </td>
                <td className="border-b-2 border-white text-white font-serif">
                  {myClass.instructorName}
                </td>
                <td className="border-b-2 border-white text-white font-serif">
                 ${myClass.price}
                </td>
                <td className="border-b-2 border-white text-white font-serif">
                  <button onClick={()=>handleDelete(myClass)} className="btn btn-error border-none bg-red-600 hover:scale-90 text-white">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
                <td className="border-b-2 border-white text-white font-serif">
                  <Link to={`/dashboard/payment/${myClass._id}`}>
                  <button className="btn btn-success me-10 border-none bg-green-600 hover:scale-90 text-white">
                  <FaCreditCard />
                  </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
            </div>
        </div>
    );
};

export default MySelectedClass;
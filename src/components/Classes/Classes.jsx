import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useRole from "../hooks/useRole";
import { CirclesWithBar } from "react-loader-spinner";

const Classes = () => {
  const location = useLocation();
  const [userRole] = useRole();
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  const { data: classes = [],isLoading } = useQuery(["classes"], async () => {
    const res = await fetch("https://supreme-athletes-academy-server.vercel.app/approved");
    return res.json();
  });
  const handleSelect = singleClass => {
  if (user) {
    const selectedClass = {
      classId: singleClass._id,
      name: singleClass.name,
      image: singleClass.image,
      price: singleClass.price,
      enrolled: singleClass.enrolled,
      instructorName: singleClass.instructorName,
      email: user.email,
    };

    fetch('https://supreme-athletes-academy-server.vercel.app/myClasses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedClass),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Class selected',
            showConfirmButton: false,
            timer: 1000,
          });
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Class already selected',
            showConfirmButton: false,
            timer: 1000,
          });
        }
      })
      .catch(error => {
        console.log(error);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'An error occurred',
          text: 'Failed to select class',
          showConfirmButton: false,
          timer: 2000,
        });
      });
  } else {
    Swal.fire({
      title: 'Please login to select a class',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Login Now',
    }).then(result => {
      if (result.isConfirmed) {
        navigate('/login', { state: { from: location } });
      }
    });
  }
};
  return (
    <div>
      <Helmet>
        <title>Classes | Supreme Athletes Academy</title>
      </Helmet>
      <div className="-mt-36">
        <img
          className="w-[1260px] h-[420px] brightness-50 rounded"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhMvn83MEVVcjf3lP8LMsaaZo7ZFI4GGob7cIWG-8A9pWRQGAzfmlXyENluQ46I8qM0Tk&usqp=CAU"
          alt=""
        />
        <div className="absolute inset-0 top-40 w-1/2 mx-auto">
          <div className=" text-white p-4">
            <h2 className="text-6xl font-bold text-center">Our Classes</h2>
            <p className="text-center text-gray-200 mt-3">
            Dive into a world of excitement and growth on our Classes page. Discover a wide variety of sports classes tailored for all skill levels. Led by our expert instructors, our dynamic sessions in soccer, basketball, tennis, volleyball, and more will help you develop fundamental skills, boost fitness, and ignite a lifelong passion for sports.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-10 bg-green-100 pb-20">
        { isLoading ? <div className="flex justify-center items-center my-20">
        <h4 className="text-3xl font-serif font-semibold text-black">Loading...</h4>
        <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          outerCircleColor=""
          innerCircleColor=""
          barColor=""
          ariaLabel="circles-with-bar-loading"
        />
      </div> : 
        
        <table className="table w-full border border-white rounded bg-[url('https://ewscripps.brightspotcdn.com/dims4/default/c1a1a13/2147483647/strip/true/crop/640x360+0+0/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.wtxl.com%2Fwtxl.com%2Fcontent%2Ftncms%2Fassets%2Fv3%2Feditorial%2Fc%2F0e%2Fc0e976c4-8332-11e5-a38b-27b210b5ecbc%2F563a6b4c8fb6a.image.jpg')] bg-cover brightness-90">
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
              Available Seats
            </th>
            <th className="border-b-2 border-white text-xl font-semibold text-white font-serif">
              Select
            </th>
          </tr>
        </thead>
        <tbody>
          {classes.map((singleClass, index) => (
            <tr key={singleClass._id} className={singleClass.availableSeats === 0 ? 'bg-red-500' : ''}>
              <td className="border-b-2 border-white text-white font-serif">
                {index + 1}
              </td>
              <td className="border-b-2 border-white text-white font-serif">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={singleClass.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td className="border-b-2 border-white text-white font-serif">
                {singleClass.name}
              </td>
              <td className="border-b-2 border-white text-white font-serif">
                {singleClass.instructorName}
              </td>
              <td className="border-b-2 border-white text-white font-serif">
               ${singleClass.price}
              </td>
              <td className="border-b-2 text-center border-white text-white font-serif">
                {singleClass.availableSeats}
              </td>
              <td className="border-b-2 border-white text-white font-serif">
                <button disabled={singleClass.availableSeats === 0 || userRole?.role === 'admin' || userRole?.role === 'instructor' }
                 onClick={()=>handleSelect(singleClass)} className="btn me-16 border-none bg-gradient-to-r from-green-500 to-green-600 hover:scale-90 rounded px-5 py-1 text-white font-bold -mt-3">
                  Select
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        }
      </div>
    </div>
  );
};

export default Classes;

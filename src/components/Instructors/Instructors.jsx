import { useQuery } from "@tanstack/react-query";

const Instructors = () => {
    const {data: instructors=[]} = useQuery(['instructors'],async()=>{
        const res = await fetch('http://localhost:5000/instructors')
        return res.json()
    })
  return (
    <div>
      <div className="-mt-28">
        <img
          className="w-[1260px] h-[420px] brightness-50 rounded"
          src="https://thetrainingcamp.in/wp-content/uploads/2021/02/IMG_20210204_165457084_HDR-1.jpg?x68024"
          alt=""
        />
        <div className="absolute inset-0 top-40 w-1/2 mx-auto">
          <div className=" text-white p-4">
            <h2 className="text-6xl font-bold text-center">Our Instructors</h2>
            <p className="text-center text-gray-200 mt-3">Get ready to be inspired by our exceptional team of instructors on our dedicated Instructors page. With a wealth of experience and a deep passion for sports, our instructors specialize in various disciplines, including soccer, basketball, tennis, volleyball, and more. Join their engaging classes and unlock your athletic potential under their expert guidance.</p>
          </div>
        </div>
      </div>
      <div className="pt-10 bg-green-100 pb-20">
      <table className="table w-full border border-white rounded bg-[url('https://t3.ftcdn.net/jpg/04/69/90/34/360_F_469903427_nrHZeMb08IfOiTxlBdSPD8yx5i9icGLv.jpg')] bg-cover brightness-90">
          {/* head */}
          <thead>
            <tr>
              <th className="border-b-2 border-white text-xl font-semibold text-white font-serif">#</th>
              <th className="border-b-2 border-white text-xl font-semibold text-white font-serif">Instructor</th>
              <th className="border-b-2 border-white text-xl font-semibold text-white font-serif">Instructor Name</th>
              <th className="border-b-2 border-white text-xl font-semibold text-white font-serif">Instructor Email</th>
            </tr>
          </thead>
          <tbody>
            {
                instructors.map((instructor,index) => <tr
                key={instructor._id}
                >
                    <td className="border-b-2 border-white text-white font-serif">
                      {index+1}
                    </td>
                    <td className="border-b-2 border-white text-white font-serif">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={instructor.instructorImage}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                    </td>
                    <td className="border-b-2 border-white text-white font-serif">
                      {instructor.instructorName}
                    </td>
                    <td className="border-b-2 border-white text-white font-serif">${instructor.instructorEmail}</td>
                  </tr> )
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Instructors;

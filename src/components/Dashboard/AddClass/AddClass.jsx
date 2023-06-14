import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddClass = () => {
    const { user } = useContext(AuthContext);
  
    const handleAdd = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const image = form.image.value;
      const instructor = form.instructor.value;
      const email = form.email.value;
      const photo = form.photo.value;
      const price = form.price.value;
      const seats = form.seats.value;
      const classData = {
        name: name,
        image: image,
        instructorName: instructor,
        instructorEmail: email,
        instructorImage: photo,
        price: price,
        availableSeats: seats,
      }
  
      fetch("http://localhost:5000/classes", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(classData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Class Added Successfully',
              showConfirmButton: false,
              timer: 1000
            })
          }
        });
        form.reset()
    };
  
    return (
      <div>
        <h2 className="text-black text-5xl font-serif border-b-2 border-b-black pb-2 text-center">Add Class</h2>
        <div className="rounded-lg bg-green-800 mb-16 mt-10">
          <div
            className="rounded-lg h-full"
          >
            <form onSubmit={handleAdd}>
              <div className="grid grid-cols-2 px-10 gap-5 pt-10">
                <div className="form-control">
                  <label className="label">
                    <span
                      className="label-text text-gray-200 
                  text-xl font-serif"
                    >
                      Class Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Class Name"
                    className="input input-bordered bg-slate-200 font-bold"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span
                      className="label-text text-gray-200 
                  text-xl font-serif"
                    >
                      Class Image URL
                    </span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    required
                    placeholder="class Image URL"
                    className="input input-bordered bg-slate-200 font-bold"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span
                      className="label-text text-gray-200 
                  text-xl font-serif"
                    >
                      Instructor Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="instructor"
                    defaultValue={user?.displayName}
                    required
                    readOnly
                    placeholder="Instructor Name"
                    className="input input-bordered bg-slate-200 font-bold"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span
                      className="label-text text-gray-200 
                  text-xl font-serif"
                    >
                      Instructor Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    required
                    readOnly
                    placeholder="instructor Email"
                    className="input input-bordered bg-slate-200 font-bold"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span
                      className="label-text text-gray-200 
                  text-xl font-serif"
                    >
                      Instructor Image
                    </span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    defaultValue={user?.photoURL}
                    required
                    readOnly
                    placeholder="Instructor Image"
                    className="input input-bordered bg-slate-200 font-bold"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span
                      className="label-text text-gray-200 
                  text-xl font-serif"
                    >
                      Price
                    </span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    required
                    placeholder="Price"
                    className="input input-bordered bg-slate-200 font-bold"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span
                      className="label-text text-gray-200 
                  text-xl font-serif"
                    >
                      Available Seats
                    </span>
                  </label>
                  <input
                    className="input input-bordered bg-slate-200 font-bold"
                    type="text"
                    name="seats"
                    placeholder="Available Seats"
                    required
                  />
                </div>
              </div>
              <div className="py-6 px-10">
                <input
                  className="btn btn-block text-white font-bold
               hover:bg-green-700 bg-green-600 border-none"
                  type="submit"
                  value="Add Class"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

export default AddClass;
import { FaPen } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateClass = () => {
    const updateClass = useLoaderData()
    const {_id,name,image,price,availableSeats} = updateClass;

    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const seats = form.seats.value;
    
        fetch(`https://supreme-athletes-academy-server.vercel.app/updateClass/${_id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify({name: name,image: image,price:price,availableSeats:seats})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Updated Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    
      }
    
  return (

    <div className="">
        <h2 className="text-black text-5xl font-serif border-b-2 border-b-black pb-2 text-center mb-5">Add Class</h2>
        
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-green-500 bg-base-100">
            <div className="card-body">
              <form onSubmit={handleUpdate}>
              <div className="form-control">
                <label className="label">
                  <span  className="label-text 
                text-xl font-serif">Class Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Class Name"
                  className="input input-bordered bg-slate-200 font-bold"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span  className="label-text 
                text-xl font-serif">Class Image URL</span>
                </label>
                <input
                  type="text"
                  name="image"
                  defaultValue={image}
                  placeholder="Class image URL"
                  className="input input-bordered bg-slate-200 font-bold"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span  className="label-text 
                text-xl font-serif">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="Price"
                  className="input input-bordered bg-slate-200 font-bold"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span  className="label-text 
                text-xl font-serif">Available Seats</span>
                </label>
                <input
                  type="text"
                  name="seats"
                  defaultValue={availableSeats}
                  placeholder="Available Seats"
                  className="input input-bordered bg-slate-200 font-bold"
                />
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-block font-bold
             hover:bg-green-600 bg-green-500 border-none" 
             type="submit" value="Update" />
              </div>
              </form>
            </div>
          </div>
        </div>
  );
     
};

export default UpdateClass;
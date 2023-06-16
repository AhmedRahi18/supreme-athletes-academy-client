import Swal from "sweetalert2";

const ManageClassesCard = ({ singleClass,refetch }) => {
  const {
    image,
    name,
    instructorName,
    instructorEmail,
    price,
    availableSeats,
    status,
    _id
  } = singleClass;

  const handleApprove = id => {
    fetch(`http://localhost:5000/classes/approve/${_id}`, {
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
            title: `${name} is Approved`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  }

  const handleDeny = id => {
    fetch(`http://localhost:5000/classes/deny/${_id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            title: `${name} is denied`,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        }
      });
  }

  const handleFeedback = id => {
    Swal.fire({ 
      title: 'Send Feedback', 
      input: 'textarea', 
      inputPlaceholder: 'Enter feedback', 
      showCancelButton: true, 
      confirmButtonText: 'Send', 
      cancelButtonText: 'Cancel', 
      preConfirm: (reason) => { 
        if (reason) { 
          const message = reason; 
          fetch(`http://localhost:5000/classes/feedback/${_id}`, { 
            method: 'PATCH', 
            headers: { 
              'content-type': 'application/json' 
            }, 
            body: JSON.stringify({ message: message }) 
          }) 
          .then(res => res.json()) 
          .then(data => { 
            console.log(data); 
          }) 
        } 
      }, 
    }).then((result) => { 
      if (result.isConfirmed) { 
        refetch(); 
        Swal.fire({ 
          position: 'center', 
          icon: 'success', 
          title: 'Feedback sent successfully', 
          showConfirmButton: false, 
          timer: 1500 
        }); 
      } 
    }); 
  }
  
  return (
    <div>
      <div className="card w-96 bg-gradient-to-r from-green-200 to-gray-100  shadow-xl">
        <figure>
          <img
            src={image}
          />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-semibold font-serif">{name}</h2>
          <p className=" text-lg font-semibold">Instructor Name: {instructorName} </p>
          <p className=" text-lg font-semibold">Instructor Email: {instructorEmail} </p>
          <p className=" text-lg font-semibold">Price: ${price}</p>
          <div className="flex justify-between items-center mt-3">
            <p className="font-semibold text-lg">Status: {status}</p>
            <p className="font-semibold text-lg">Available Seats: {availableSeats}</p>
          </div>
          <div className="card-actions mt-5 flex justify-between">
          <button onClick={()=>handleApprove(_id)} disabled={status === 'Approved' || status  === 'deny'} className="btn border-none bg-gradient-to-r from-green-500 to-green-600 hover:scale-90 rounded px-5 py-1 text-white">
            Approve
          </button>
          <button onClick={()=>handleDeny(_id)} disabled={status === 'Approved' || status === 'deny'} className="btn border-none bg-gradient-to-r from-red-500 to-red-600 hover:scale-90 rounded px-5 py-1 text-white">
            Deny
          </button>
          <button onClick={()=>handleFeedback(_id)} className="btn border-none bg-gradient-to-r from-blue-500 to-blue-600 hover:scale-90 rounded px-5 py-1 text-white">
            Feedback
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageClassesCard;

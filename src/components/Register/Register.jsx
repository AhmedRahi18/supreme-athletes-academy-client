import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const newUser = result.user;
        console.log(newUser);
        updateUserProfile(data.name, data.photo)
          .then(() => {
            const saveUser = {name: data.name, email: data.email}
            fetch("http://localhost:5000/users",{
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User Created Successfully",
                    showConfirmButton: false,
                    timer: 1000,
                  });
                  reset();
                  navigate("/");
                }
              });
          })
          .catch((error) => {
            console.log(error.message);
            setError(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        const googleUser = result.user;
        console.log(googleUser);
        const saveUser = {
          name: googleUser.displayName,
          email: googleUser.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
        .then((res) => res.json())
          .then(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "User Created Successfully",
              showConfirmButton: false,
              timer: 1000,
            });
            navigate('/')
          });
        
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Register | Supreme Athletes Academy</title>
      </Helmet>
      <div className="-mt-36">
        <img
          className="w-[1260px] h-[400px] brightness-75 rounded"
          src="https://t3.ftcdn.net/jpg/02/24/59/26/360_F_224592604_3Kvi4PQyQ7EjekybYUj2Q6PWepezbgRU.jpg"
          alt=""
        />
        <div className="absolute inset-0 top-52 w-1/2 mx-auto">
          <div className=" text-white p-4">
            <h2 className="text-6xl font-bold text-center">Register Here</h2>
          </div>
        </div>
      </div>
      <div className="bg-[url('https://w0.peakpx.com/wallpaper/353/644/HD-wallpaper-green-grass-texture-summer-macro-green-background-grass-textures-green-grass-close-up-grass-from-top-grass-background-thumbnail.jpg')] brightness-90">
        <div className="hero">
          <div className="hero-content bg-gradient-to-r from-green-50 to-green-200 shadow-xl p-20 m-5 rounded flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl absolute top-36 ps-24 text-center text-green-500 font-bold">
                Welcome
              </h2>
              <img
                className="w-[600px] rounded"
                src="https://img.freepik.com/free-vector/placeholder-concept-illustration_114360-4847.jpg"
                alt=""
              />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-green-600 bg-green-100">
              <div className="card-body">
                <div className="flex items-center">
                  <FaUser size={25}></FaUser>
                  <h2
                    className="text-2xl ms-2 
                 font-serif font-semibold "
                  >
                    Register
                  </h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control">
                    <label className="label">
                      <span
                        className="label-text text-xl
                 font-serif"
                      >
                        Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      {...register("name", { required: true })}
                      className="input input-bordered bg-slate-200 font-semibold"
                    />
                    {errors.name && (
                      <span className="text-red-600">Name is required</span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span
                        className="label-text text-xl
                 font-serif"
                      >
                        Photo URL
                      </span>
                    </label>
                    <input
                      type="text"
                      name="photo"
                      placeholder="Photo URL"
                      {...register("photo", { required: true })}
                      className="input input-bordered bg-slate-200 font-semibold"
                    />
                    {errors.photo && (
                      <span className="text-red-600">
                        Photo URL is required
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span
                        className="label-text text-xl
                 font-serif"
                      >
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      {...register("email", { required: true })}
                      className="input input-bordered bg-slate-200 font-semibold"
                    />
                    {errors.email && (
                      <span className="text-red-600">Email is required</span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-serif">
                        Password
                      </span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        pattern: {
                          value: /^(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/,
                          message:
                            "Password must contain at least one capital letter and one special character",
                        },
                      })}
                      className="input input-bordered bg-slate-200 font-semibold"
                    />
                    {errors.password && (
                      <span className="text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="text-red-500">
                        Password must be at least 6 characters long
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span
                        className="label-text text-xl 
                 font-serif"
                      >
                        Confirm Password
                      </span>
                    </label>
                    <input
                      type="password"
                      name="confirm"
                      placeholder="Confirm Password"
                      {...register("confirm", {
                        required: true,
                        validate: (value) =>
                          value === watch("password") ||
                          "Password didn't matched",
                      })}
                      className="input input-bordered bg-slate-200 font-semibold"
                    />
                    {errors.confirm && (
                      <span className="text-red-600">
                        {errors.confirm.message}
                      </span>
                    )}
                    {error && <span className="text-red-500">{error}</span>}
                  </div>
                  <div className="form-control mt-6">
                    <input
                      className="btn px-10 bg-gradient-to-r from-green-400 to-green-500 text-white font-bold
           border-none rounded hover:bg-green-500"
                      type="submit"
                      value="Register"
                    />
                  </div>
                  <p className="text-center mt-3 font-serif">
                    Already have an account?{" "}
                    <Link to="/login" className="text-green-500">
                      Login
                    </Link>{" "}
                  </p>
                  <div className="divider">OR</div>
                  <div
                    onClick={handleGoogle}
                    className="flex items-center rounded-xl  bg-white"
                  >
                    <FaGoogle className="text-blue-500 ms-16"></FaGoogle>
                    <p
                      className=" py-2 pe-2
            text-center font-semibold"
                    >
                      Continue with Google
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

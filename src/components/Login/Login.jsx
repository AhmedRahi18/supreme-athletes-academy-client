import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle, FaUserCheck } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [error, setError] = useState();
  const [show,setShow] = useState(false)
  const { googleSignIn, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1000,
        });
        reset();
        navigate(from, {replace: true});
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
        fetch("https://supreme-athletes-academy-server.vercel.app/users", {
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
              title: "Login Successfully",
              showConfirmButton: false,
              timer: 1000,
            });
            navigate(from, { replace: true });
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
        <title>Login | Supreme Athletes Academy</title>
      </Helmet>
      <div className="-mt-36">
        <img
          className="w-[1260px] h-[400px] brightness-75 rounded"
          src="https://t3.ftcdn.net/jpg/02/24/59/26/360_F_224592604_3Kvi4PQyQ7EjekybYUj2Q6PWepezbgRU.jpg"
          alt=""
        />
        <div className="absolute inset-0 top-52 w-1/2 mx-auto">
          <div className=" text-white p-4">
            <h2 className="text-6xl font-bold text-center">Login Here</h2>
          </div>
        </div>
      </div>
      <div className="bg-[url('https://w0.peakpx.com/wallpaper/353/644/HD-wallpaper-green-grass-texture-summer-macro-green-background-grass-textures-green-grass-close-up-grass-from-top-grass-background-thumbnail.jpg')] brightness-90">
        <div className="hero">
          <div className="hero-content bg-gradient-to-r from-green-50 to-green-200 shadow-xl p-20 m-5 rounded flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl absolute top-24 ps-16 text-center text-green-500 font-bold">
                Welcome Back
              </h2>
              <img
                className="w-[550px] rounded"
                src="https://img.freepik.com/premium-vector/trendy-vector-design-account-phishing-flat-illustration_203633-8869.jpg"
                alt=""
              />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-green-600 bg-green-100">
              <div className="card-body">
                <div className="flex items-center">
                  <FaUserCheck size={25}></FaUserCheck>
                  <h2
                    className="text-2xl ms-2 
                 font-serif font-semibold "
                  >
                    Login
                  </h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                      <span
                        className="label-text text-xl 
                 font-serif"
                      >
                        Password <p onClick={()=>setShow(!show)}>
                          {
                            show?<FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                          }
                        </p>
                      </span>
                    </label>
                    <input
                      type={show ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      {...register("password", { required: true })}
                      className="input input-bordered bg-slate-200 font-semibold"
                    />
                    {errors.password && (
                      <span className="text-red-600">Password is required</span>
                    )}
                    {error && <span className="text-red-500">{error}</span>}
                  </div>
                  <div className="form-control mt-6">
                    <input
                      className="btn px-10 bg-gradient-to-r from-green-400 to-green-500 text-white font-bold
           border-none rounded hover:bg-green-500"
                      type="submit"
                      value="Login"
                    />
                  </div>
                  <p className="text-center mt-3 font-serif">
                    Did not have an account?{" "}
                    <Link to="/register" className="text-green-500">
                      Register
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
                      {" "}
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

export default Login;

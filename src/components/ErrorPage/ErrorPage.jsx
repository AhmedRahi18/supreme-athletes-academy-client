import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-6xl text-black font-bold text-center mt-20 mb-5 uppercase">Error!!! Page not found!!!</h2>
            <div className="ms-96">
            <img className="w-[550px] rounded-lg" src="https://ubiq.co/tech-blog/wp-content/uploads/2020/11/How-to-Make-a-Custom-404-Page.jpg" alt="" />
            </div>
            <div className="text-center">
            <Link to="/">
            <button className="btn border-none bg-gradient-to-r from-green-500 to-green-600 hover:scale-90 mt-5 rounded px-5 py-1 text-white">
            Back to home page
          </button>
            </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
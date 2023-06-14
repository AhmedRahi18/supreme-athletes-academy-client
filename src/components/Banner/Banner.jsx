import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="-mt-36">
        <Carousel>
        <div className="relative">
        <img className="brightness-75 rounded" src="https://www.newfolks.com/wp-content/uploads/sites/6/2021/06/kids-playing-basketball.jpg?p=1" />
        <div className="absolute inset-0 top-52 w-1/2 right-[500px]">
          <div className=" text-white p-4">
            <h2 className="text-6xl font-bold">Supreme <br /> <span className="">
            Athletes Academy
                </span></h2>
            <p className="text-gray-200 w-[600px] mt-5">Welcome to Athletes Academy, where champions are made! Make your summer full of joy with our premier sports training facility offers top-notch coaching and state-of-the-art facilities to help athletes of all ages and skill levels reach their full potential. Join us and experience the thrill of professional training, personalized guidance, and a supportive community that fosters growth and excellence. Unleash your inner athlete and embark on a journey of success with Athletes Academy!</p>
            <button className="btn me-16 border-none bg-gradient-to-r from-green-600 to-green-800 hover:scale-90 rounded px-5 py-1 text-white font-bold mt-8">
                Read More
            </button>
            <div className="w-96">
            <img className="relative left-[750px] bottom-96" src="https://i.ibb.co/GPPbRwY/Picsart-23-06-09-00-06-59-024.png?fbclid=IwAR1boWPtGE3nBGpP3NCChH7baVBF9otqUHEc1dXA2e_eLrBVZTudYN8o1Vs" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img className="brightness-50 rounded" src="https://static1.straitstimes.com.sg/s3fs-public/articles/2022/06/19/sv_soccer_190622.jpg?VersionId=Kc.KIwxtXNgeMvYUdWkGgwF8ej7boorb" />
        <div className="absolute inset-0 top-52 w-1/2 right-[500px]">
          <div className=" text-white p-4">
            <h2 className="text-6xl font-bold">Supreme <br /> <span className="text-5xl">
            Athletes Academy
                </span></h2>
            <p className="text-gray-200 w-[600px] mt-5">Welcome to Athletes Academy, where champions are made! Make your summer full of joy with our premier sports training facility offers top-notch coaching and state-of-the-art facilities to help athletes of all ages and skill levels reach their full potential. Join us and experience the thrill of professional training, personalized guidance, and a supportive community that fosters growth and excellence. Unleash your inner athlete and embark on a journey of success with Athletes Academy!</p>
            <button className="btn me-16 border-none bg-gradient-to-r from-green-600 to-green-800 hover:scale-90 rounded px-5 py-1 text-white font-bold mt-8">
                Read More
            </button>
            <div className="w-96">
            <img className="relative left-[750px] bottom-96" src="https://i.ibb.co/yWH8ZCk/Picsart-23-06-09-00-06-09-582.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img className="brightness-75 rounded" src="https://www.qldcricket.com.au/-/media/cricketqldcomau/Images/Article%20Images/Junior%20Web%20Images.ashx?la=en&h=498&w=768&mw=768" />
        <div className="absolute inset-0 top-52 w-1/2 right-[500px]">
          <div className=" text-white p-4">
            <h2 className="text-6xl font-bold">Supreme <br /> <span className="">
            Athletes Academy
                </span></h2>
            <p className="text-gray-200 w-[600px] mt-5">Welcome to Athletes Academy, where champions are made! Make your summer full of joy with our premier sports training facility offers top-notch coaching and state-of-the-art facilities to help athletes of all ages and skill levels reach their full potential. Join us and experience the thrill of professional training, personalized guidance, and a supportive community that fosters growth and excellence. Unleash your inner athlete and embark on a journey of success with Athletes Academy!</p>
            <button className="btn me-16 border-none bg-gradient-to-r from-green-600 to-green-800 hover:scale-90 rounded px-5 py-1 text-white font-bold mt-8">
                Read More
            </button>
            <div className="w-96">
            <img className="relative left-[750px] bottom-96" src="https://i.ibb.co/xHszw4b/Picsart-23-06-09-00-07-11-689.png?fbclid=IwAR2ksXFA1Aj_d8-ZI1oxFlq5aIw4B3n3t12QI2flTTLyTcp-c6sxjGYHLDg" alt="" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <img className="brightness-75 rounded" src="https://t3.ftcdn.net/jpg/02/75/53/98/360_F_275539864_UqHlNCfeW138CbkZNayWIUuDznSGXACs.jpg" />
        <div className="absolute inset-0 top-52 w-1/2 right-[500px]">
          <div className=" text-white p-4">
            <h2 className="text-6xl font-bold">Supreme <br /> <span className="">
            Athletes Academy
                </span></h2>
            <p className="text-gray-200 w-[600px] mt-5">Welcome to Athletes Academy, where champions are made! Make your summer full of joy with our premier sports training facility offers top-notch coaching and state-of-the-art facilities to help athletes of all ages and skill levels reach their full potential. Join us and experience the thrill of professional training, personalized guidance, and a supportive community that fosters growth and excellence. Unleash your inner athlete and embark on a journey of success with Athletes Academy!</p>
            <button className="btn me-16 border-none bg-gradient-to-r from-green-600 to-green-800 hover:scale-90 rounded px-5 py-1 text-white font-bold mt-8">
                Read More
            </button>
            <div className="w-3/4">
            <img className="relative left-[750px] bottom-96" src="https://i.ibb.co/CvnGCTz/Picsart-23-06-09-00-08-34-192.png?fbclid=IwAR1CMwx_F4uw9IDzHVxAfj7E4byvN3bkBKLyZ5JyxowZfH588DVhYWsVqNo" alt="" />
            </div>
          </div>
        </div>
      </div>
      
    </Carousel>
    </div>
  );
};

export default Banner;

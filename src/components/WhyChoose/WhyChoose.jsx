import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaCheckCircle } from 'react-icons/fa';

const WhyChoose = () => {
  return (
    <div className='pb-20 pt-10'>
        <div className="bg-[url('https://global-uploads.webflow.com/5ca5fe687e34be0992df1fbe/5e688f0b6d8517676996b2c5_AJB07186-min.jpg')] bg-cover brightness-90 bg-fixed rounded py-10">
      <div className="container mx-auto px-4">
        <Fade>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Why Choose Our Academy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center">
              <div className="w-12 h-12 p-2 rounded-full bg-white text-green-600 flex items-center justify-center text-2xl font-semibold mr-4">
                <FaCheckCircle />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Expert Coaching</h3>
                <p className="text-sm text-white">
                  Our academy is led by experienced coaches who have a deep understanding of the sport and a passion for helping athletes reach their full potential.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 p-2 rounded-full bg-white text-green-600 flex items-center justify-center text-2xl font-semibold mr-4">
                <FaCheckCircle />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">State-of-the-Art Facilities</h3>
                <p className="text-sm text-white">
                  Our academy is equipped with cutting-edge facilities that provide a conducive environment for training, including top-notch equipment and specialized training areas.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 p-2 rounded-full bg-white text-green-600 flex items-center justify-center text-2xl font-semibold mr-4">
                <FaCheckCircle />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Comprehensive Training Programs</h3>
                <p className="text-sm text-white">
                  We offer comprehensive training programs that focus on skill development, physical conditioning, mental preparation, and strategic gameplay to help athletes excel in their sport.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 p-2 rounded-full bg-white text-green-600 flex items-center justify-center text-2xl font-semibold mr-4">
                <FaCheckCircle />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Supportive Community</h3>
                <p className="text-sm text-white">
                  Our academy fosters a supportive community where athletes can connect with like-minded individuals, build friendships, and experience the camaraderie of being part of a team.
                </p>
              </div>
            </div>
          </div>
        </div>
        </Fade>
      </div>
    </div>
    </div>
  );
};

export default WhyChoose;

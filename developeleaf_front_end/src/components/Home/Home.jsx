import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/bg_tree_video_home.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        type="video/mp4"
        poster="/assets/bg_tree_video_home.jpg"
        alt="Background Video"
        title="Background Video"
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="font-knewave text-6xl sm:text-8xl md:text-9xl lg:text-10xl font-bold shadow-md">
          Welcome <br /> to <br /> DevelopLeaf
        </h1>
        <p className="mt-4 text-lg lg:text-4xl font-semibold shadow-md">
          Join us in making the world greener by planting trees and sharing your
          journey.
        </p>
        <button
          onClick={() => navigate("/main")}
          className="mt-6 shadow-md px-6 lg:px-18 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition cursor-pointer"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;

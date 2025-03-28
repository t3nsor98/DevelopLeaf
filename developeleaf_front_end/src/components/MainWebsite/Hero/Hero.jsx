import React from "react";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/192136/pexels-photo-192136.jpeg?auto=compress&cs=tinysrgb&w=600')",
      }}
    >
      <div className="absolute inset-0 bg-opacity-50"></div>
      <div className="relative z-10 max-w-3xl p-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          DevelopLeaf - Grow Together, Green Forever
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Join our mission to make the world greener! DevelopLeaf is a platform
          where you can share your tree plantation journey, track growth, and
          inspire others to take action for a sustainable future.
        </p>
        <p className="text-md md:text-lg mb-6">
          Trees are the lifeline of our planet, providing oxygen, improving air
          quality, and fostering biodiversity. Every tree planted makes a
          difference, and together, we can create a lasting impact.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition cursor-pointer">
          Join the Movement
        </button>
      </div>
    </section>
  );
};

export default Hero;

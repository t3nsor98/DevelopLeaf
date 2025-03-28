import React from "react";

const About = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-gray-100 text-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-700">
          About DevelopLeaf
        </h2>
        <p className="text-lg md:text-xl mb-6">
          DevelopLeaf is a community-driven platform dedicated to promoting tree
          plantations and environmental sustainability. We empower individuals
          to document their planting journeys, connect with like-minded nature
          enthusiasts, and inspire a greener future.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-6xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-green-600 mb-3">
            🌱 Our Mission
          </h3>
          <p className="text-md">
            Our mission is to encourage tree plantations globally and create a
            network of eco-conscious individuals who work together for a
            sustainable environment. Every tree planted contributes to a
            healthier planet.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-green-600 mb-3">
            🌍 Our Vision
          </h3>
          <p className="text-md">
            We envision a world where people actively participate in
            afforestation, urban greenery, and biodiversity conservation.
            Through DevelopLeaf, we aim to make tree planting accessible,
            enjoyable, and impactful for everyone.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-3xl font-bold text-green-700 mb-4">
          Join the Movement!
        </h3>
        <p className="text-lg max-w-3xl mx-auto">
          Whether you plant a single tree or an entire forest, your efforts
          count. Document your journey, inspire others, and contribute to a
          greener world with DevelopLeaf.
        </p>
        <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default About;

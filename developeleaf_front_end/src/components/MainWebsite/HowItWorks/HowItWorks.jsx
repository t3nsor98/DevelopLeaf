import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-6">How It Works</h2>
        <p className="text-lg text-gray-700 mb-12">
          Join DevelopLeaf in just three simple steps and contribute to a
          greener planet!
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {/* Step 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img
            src="https://images.pexels.com/photos/4503265/pexels-photo-4503265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Plant a Tree"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold text-green-600 mb-3">
            🌱 Plant a Tree
          </h3>
          <p className="text-gray-600">
            Start your journey by planting a tree in your home, community, or
            any open space.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img
            src="https://images.pexels.com/photos/31332844/pexels-photo-31332844/free-photo-of-woman-photographing-art-in-gallery-with-phone.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Upload and Share"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold text-green-600 mb-3">
            📸 Upload & Share
          </h3>
          <p className="text-gray-600">
            Capture photos of your tree plantation and share them with the
            DevelopLeaf community.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img
            src="https://images.pexels.com/photos/29562922/pexels-photo-29562922/free-photo-of-inspirational-black-board-with-start-now-message.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Inspire Others"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold text-green-600 mb-3">
            🌍 Track & Inspire Others
          </h3>
          <p className="text-gray-600">
            Encourage others to take part in tree plantation and make an impact
            together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

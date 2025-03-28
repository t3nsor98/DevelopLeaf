import React from "react";

const GetInvolved = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-green-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-6">Get Involved</h2>
        <p className="text-lg text-gray-700 mb-12">
          Be a part of the DevelopLeaf community and contribute to a greener
          future! Whether you plant trees, support others, or spread awareness,
          every effort counts. 🌱
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Section 1 - Plant a Tree */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
          <img
            src="https://images.pexels.com/photos/4503265/pexels-photo-4503265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Plant a Tree"
            className="w-full h-56 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold text-green-600 mb-3">
            Plant a Tree
          </h3>
          <p className="text-gray-600 mb-4">
            Take the first step by planting a tree in your backyard, community,
            or an open space. Every tree contributes to a healthier planet.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition cursor-pointer">
            Start Planting
          </button>
        </div>

        {/* Section 2 - Share Your Story */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
          <img
            src="https://images.pexels.com/photos/31332844/pexels-photo-31332844/free-photo-of-woman-photographing-art-in-gallery-with-phone.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Share Your Story"
            className="w-full h-56 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold text-green-600 mb-3">
            Share Your Story
          </h3>
          <p className="text-gray-600 mb-4">
            Inspire the world by sharing your plantation journey. Upload
            pictures, write about your experience, and encourage others to take
            action.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition cursor-pointer">
            Upload Now
          </button>
        </div>

        {/* Section 3 - Support the Cause */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
          <img
            src="https://images.pexels.com/photos/7782895/pexels-photo-7782895.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Support the Cause"
            className="w-full h-56 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold text-green-600 mb-3">
            Support the Cause
          </h3>
          <p className="text-gray-600 mb-4">
            Can't plant a tree? No problem! Support organizations that are
            making a difference. Donate, volunteer, or spread the word.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition cursor-pointer">
            Donate Now
          </button>
        </div>

        {/* Section 4 - Join the Community */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
          <img
            src="https://images.pexels.com/photos/29562922/pexels-photo-29562922/free-photo-of-inspirational-black-board-with-start-now-message.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Join the Community"
            className="w-full h-56 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold text-green-600 mb-3">
            Join the Community
          </h3>
          <p className="text-gray-600 mb-4">
            Connect with like-minded individuals who are passionate about making
            the world greener. Participate in events and discussions.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition cursor-pointer">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;

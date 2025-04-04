import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase"

const provider = new GoogleAuthProvider();

const Login = () => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
      alert(`Welcome, ${user.displayName}!`);
    } catch (error) {
      console.error("Error during sign-in:", error.message);
      alert("Failed to sign in. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Login to DevelopLeaf</h1>
        <button
          onClick={handleGoogleSignIn}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;

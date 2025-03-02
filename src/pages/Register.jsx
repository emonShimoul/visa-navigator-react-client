import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { myObj } = useContext(AuthContext);

  console.log(myObj);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md px-8 py-4 space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow-md my-4">
        {/* Logo / Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          Create Account
        </h2>

        {/* Registration Form */}
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300">
              Photo URL
            </label>
            <input
              type="url"
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Register Button */}
          <input
            type="submit"
            value="Register"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"
          />
        </form>

        {/* Already have an account? */}
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

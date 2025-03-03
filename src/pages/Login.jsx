import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { googleLogin, user, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        console.log(user);

        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError(err.message);
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        {/* Logo / Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          Login
        </h2>

        {/* Login Form */}
        <form className="space-y-4">
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

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <Link to="" className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <input
            type="submit"
            value="Sign In"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"
          />
        </form>

        {/* Signup Link */}
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>

        <div className="flex justify-center">
          <button
            onClick={handleGoogleLogin}
            className="w-1/2 bg-amber-500 text-black py-2 rounded-lg hover:bg-amber-600 transition cursor-pointer"
          >
            Google Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

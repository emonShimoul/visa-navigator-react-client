import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const navlinks = (
    <>
      <li>
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
      </li>
      <li>
        <Link to="/all-visas" className="hover:text-gray-300">
          All Visas
        </Link>
      </li>
      <li>
        <Link to="/add-visa" className="hover:text-gray-300">
          Add Visa
        </Link>
      </li>
      <li>
        <Link to="/my-added-visas" className="hover:text-gray-300">
          My Added Visas
        </Link>
      </li>
      <li>
        <Link to="/my-visa-applications" className="hover:text-gray-300">
          My Visa Applications
        </Link>
      </li>
      {user && user?.email ? (
        // Show Profile Picture & Logout Button when user is logged in
        <li className="flex  items-center justify-center space-x-2">
          <img
            src={user?.photoURL}
            alt="User"
            className="w-10 h-10 rounded-full cursor-pointer"
            title={user?.displayName}
          />
          <button
            onClick={logOut}
            className="btn btn-sm btn-warning text-black font-semibold text-base"
          >
            Logout
          </button>
        </li>
      ) : (
        <>
          <li>
            <Link
              to="/login"
              className="hover:text-gray-300 font-bold underline"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="hover:text-gray-300 font-bold underline"
            >
              Register
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Website Name */}
        <Link to="/" className="text-2xl font-bold">
          VisaNavigator
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 justify-center items-center">
          {navlinks}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-3 bg-blue-700 p-4 rounded-lg">
          {navlinks}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

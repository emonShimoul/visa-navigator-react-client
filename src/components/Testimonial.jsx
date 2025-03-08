import React from "react";
import { FaCheckCircle, FaFileAlt, FaSearch } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="">
      <section className="mt-12 pt-12 pb-18 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            How It Works?
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500 hidden md:block"></div>

            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
              {/* Step 1 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white rounded-full text-3xl">
                  <FaSearch />
                </div>
                <div className="mt-4 bg-white p-6 shadow-lg rounded-lg w-72">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Find Your Visa
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Search for visa requirements based on your travel
                    destination.
                  </p>
                </div>
                <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full"></div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-indigo-500 text-white rounded-full text-3xl">
                  <FaFileAlt />
                </div>
                <div className="mt-4 bg-white p-6 shadow-lg rounded-lg w-72">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Submit Application
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Fill out the necessary forms and submit your application
                    online.
                  </p>
                </div>
                <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-indigo-500 rounded-full"></div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-teal-500 text-white rounded-full text-3xl">
                  <FaCheckCircle />
                </div>
                <div className="mt-4 bg-white p-6 shadow-lg rounded-lg w-72">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Get Approved
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Track your visa status and receive approval notifications.
                  </p>
                </div>
                <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-teal-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;

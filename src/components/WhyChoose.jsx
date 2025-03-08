import React from "react";
import { FaClock, FaGlobe, FaHeadset } from "react-icons/fa";

const WhyChoose = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 mt-16 mb-12 space-y-16">
      {/* Why Choose Us Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Why Choose VisaNavigator?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg shadow-lg bg-white flex flex-col items-center">
            <FaClock size={40} className="text-blue-500" />
            <h3 className="text-xl font-semibold my-3">Fast Processing</h3>
            <p className="text-gray-600 text-center">
              Get visa updates quickly with our streamlined application process.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg bg-white flex flex-col items-center">
            <FaHeadset size={40} className="text-green-500" />
            <h3 className="text-xl font-semibold my-3">24/7 Support</h3>
            <p className="text-gray-600 text-center">
              Our expert team is available 24/7 to assist you with visa queries.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg bg-white flex flex-col items-center">
            <FaGlobe size={40} className="text-orange-500" />
            <h3 className="text-xl font-semibold my-3">Global Coverage</h3>
            <p className="text-gray-600 text-center">
              We provide visa information and assistance for over 150 countries.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChoose;

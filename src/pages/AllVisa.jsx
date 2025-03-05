import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const AllVisa = () => {
  const loadVisas = useLoaderData();

  const [visas, setVisas] = useState(loadVisas);
  console.log(visas);
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-4xl font-extrabold text-center mb-8">
        Explore Visa Options 🌍
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {visas.map((visa) => (
          <div
            key={visa._id}
            className="relative bg-white/30 backdrop-blur-md p-5 rounded-2xl shadow-lg transition-transform transform hover:scale-105 border border-gray-300"
          >
            <img
              src={visa.countryImage}
              alt={visa.countryName}
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
            <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
              {visa.visaType}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-3">
              {visa.countryName}
            </h3>
            <p className="text-gray-600 mt-1">
              <span className="font-bold text-blue-500">Processing:</span>{" "}
              {visa.processingTime}
            </p>
            <p className="text-gray-600">
              <span className="font-bold text-blue-500">Fee:</span> ${visa.fee}
            </p>
            <button
              className="mt-4 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-4 rounded-lg shadow-md transition-all duration-300 hover:from-indigo-600 hover:to-blue-500 hover:shadow-xl cursor-pointer"
              onClick={() => navigate(`/all-visas/${visa._id}`)}
            >
              See Details →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVisa;

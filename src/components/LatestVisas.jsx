import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LatestVisas = () => {
  const [latestVisas, setLatestVisas] = useState([]);
  const navigate = useNavigate();

  // Fetch the latest 6 visas (Replace with your API call)
  useEffect(() => {
    fetch("https://visa-navigator-server-xi-lovat.vercel.app/visas") // Replace with actual API endpoint
      .then((res) => res.json())
      .then((data) => setLatestVisas(data.slice(0, 6))) // Get only the latest 6
      .catch((error) => console.error("Error fetching visas:", error));
  }, []);

  return (
    <div className="container mx-auto px-6 pt-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Latest Visas
      </h2>

      {latestVisas.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          No visas available at the moment.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {latestVisas.map((visa) => (
            <div
              key={visa._id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={visa.countryImage}
                alt={visa.country}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {visa.country}
                </h3>
                <p className="text-gray-700 text-sm">
                  <span className="font-medium">Visa Type:</span>{" "}
                  {visa.visaType}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-medium">Processing Time:</span>{" "}
                  {visa.processingTime}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-medium">Fee:</span> ${visa.fee}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-medium">Validity:</span> {visa.validity}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-medium">Method:</span>{" "}
                  {visa.applicationMethod}
                </p>

                <button
                  onClick={() => navigate(`/all-visas/${visa._id}`)}
                  className="mt-4 w-full py-2 bg-black text-white text-sm font-semibold rounded-md hover:bg-gray-800 transition-all cursor-pointer"
                >
                  See Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* See All Visas Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/all-visas")}
          className="px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md cursor-pointer hover:bg-blue-700 transition"
        >
          See All Visas
        </button>
      </div>
    </div>
  );
};

export default LatestVisas;

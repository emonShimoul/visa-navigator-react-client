import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import {
  FaMoneyBillWave,
  FaClock,
  FaFileAlt,
  FaUserShield,
  FaCheckCircle,
} from "react-icons/fa";

const VisaDetails = () => {
  const visaInfo = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    countryImage,
    countryName,
    visaType,
    processingTime,
    requiredDocuments,
    description,
    ageRestriction,
    fee,
    validity,
    applicationMethod,
  } = visaInfo;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Hero Section */}
      <div className="relative bg-gray-500 text-white p-6 rounded-lg shadow-lg flex items-center">
        <img
          src={countryImage}
          alt={countryName}
          className="w-16 h-16 rounded-md shadow-md mr-4"
        />
        <div>
          <h2 className="text-3xl font-bold">{countryName} Visa</h2>
          <p className="text-lg">{visaType}</p>
        </div>
      </div>

      {/* Visa Details */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Visa Information
        </h3>
        <div className="space-y-4">
          <p className="flex items-center text-gray-700">
            <FaClock className="text-blue-500 mr-2" />{" "}
            <strong>Processing Time: </strong>{" "}
            <span className="ms-2"> {processingTime}</span>
          </p>
          <p className="flex items-center text-gray-700">
            <FaMoneyBillWave className="text-green-500 mr-2" />{" "}
            <strong>Fee: </strong> <span className="ms-2">${fee}</span>
          </p>
          <p className="flex items-center text-gray-700">
            <FaUserShield className="text-yellow-500 mr-2" />{" "}
            <strong>Age Restriction: </strong>{" "}
            <span className="ms-2">{ageRestriction}+</span>
          </p>
          <p className="flex items-center text-gray-700">
            <FaCheckCircle className="text-purple-500 mr-2" />{" "}
            <strong>Validity: </strong> <span className="ms-2">{validity}</span>
          </p>
          <p className="flex items-center text-gray-700">
            <FaFileAlt className="text-red-500 mr-2" />{" "}
            <strong>Application Method: </strong>{" "}
            <span className="ms-2">{applicationMethod}</span>
          </p>
          <p className="text-gray-700">
            <strong>Description:</strong>{" "}
            <span className="ms-2">{description}</span>
          </p>
        </div>

        {/* Required Documents */}
        <div className="mt-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            Required Documents
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            {requiredDocuments.map((doc, index) => (
              <li key={index} className="text-gray-700">
                {doc}
              </li>
            ))}
          </ul>
        </div>

        {/* Back Button */}
        <button
          className="mt-6 bg-gray-600 text-white py-2 px-4 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-700 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          ← Back to All Visas
        </button>
      </div>
    </div>
  );
};

export default VisaDetails;

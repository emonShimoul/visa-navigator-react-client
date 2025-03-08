import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import {
  FaMoneyBillWave,
  FaClock,
  FaFileAlt,
  FaUserShield,
  FaCheckCircle,
} from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const VisaDetails = () => {
  const { user } = useContext(AuthContext);
  const visaInfo = useLoaderData();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userEmail = user.email;
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

  const appliedDate = new Date().toISOString().split("T")[0]; // Current Date

  const handleVisaApplication = (e) => {
    e.preventDefault();

    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;

    const visaApplication = {
      firstName,
      lastName,
      appliedDate,
      fee,
      userEmail,
      countryName,
      countryImage,
      visaType,
      processingTime,
      validity,
      applicationMethod,
    };

    fetch(
      "https://visa-navigator-server-xi-lovat.vercel.app/visa-application",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(visaApplication),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Visa application submitted successfully!!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
          setIsModalOpen(false);
        }
      });
  };

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
            <strong>Processing Time:</strong> {processingTime}
          </p>
          <p className="flex items-center text-gray-700">
            <FaMoneyBillWave className="text-green-500 mr-2" />{" "}
            <strong>Fee:</strong> ${fee}
          </p>
          <p className="flex items-center text-gray-700">
            <FaUserShield className="text-yellow-500 mr-2" />{" "}
            <strong>Age Restriction:</strong> {ageRestriction}+
          </p>
          <p className="flex items-center text-gray-700">
            <FaCheckCircle className="text-purple-500 mr-2" />{" "}
            <strong>Validity:</strong> {validity}
          </p>
          <p className="flex items-center text-gray-700">
            <FaFileAlt className="text-red-500 mr-2" />{" "}
            <strong>Application Method:</strong> {applicationMethod}
          </p>
          <p className="text-gray-700">
            <strong>Description:</strong> {description}
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

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          <button
            className="bg-gray-600 text-white py-2 px-4 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-700 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            ← Back to Visas
          </button>
          <button
            className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-2 px-4 rounded-lg shadow-md transition-all duration-300 hover:from-teal-600 hover:to-green-500 hover:shadow-xl cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            Apply for the Visa 📄
          </button>
        </div>
      </div>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Apply for {countryName} Visa
            </h3>
            <form onSubmit={handleVisaApplication} className="space-y-4">
              <div>
                <label className="block text-gray-700">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={user?.email}
                  className="w-full border rounded p-2 bg-gray-100 cursor-not-allowed"
                  disabled
                />
              </div>
              <div>
                <label className="block text-gray-700">First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Applied Date:</label>
                <input
                  type="date"
                  name="appliedDate"
                  value={appliedDate}
                  className="w-full border rounded p-2 bg-gray-100 cursor-not-allowed"
                  disabled
                />
              </div>
              <div>
                <label className="block text-gray-700">Fee:</label>
                <input
                  type="text"
                  name="fee"
                  value={fee || ""}
                  className="w-full border rounded p-2 bg-gray-100 cursor-not-allowed"
                  disabled
                />
              </div>
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="text-gray-900 font-semibold underline cursor-pointer"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 cursor-pointer"
                >
                  Apply ✅
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisaDetails;

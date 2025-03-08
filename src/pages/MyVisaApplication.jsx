import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const MyVisaApplication = () => {
  const { user } = useContext(AuthContext);
  const [visaApplications, setVisaApplications] = useState([]);

  useState(() => {
    fetch(
      `https://visa-navigator-server-xi-lovat.vercel.app/visa-application/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setVisaApplications(data);
      });
  }, []);

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure to cancel?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Nooo",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://visa-navigator-server-xi-lovat.vercel.app/visa-application/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Cancelled!",
                text: "Your Visa Application has been cancelled.",
                icon: "success",
              });

              const remaining = visaApplications.filter(
                (application) => application._id !== id
              );
              setVisaApplications(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
        My Visa Applications
      </h2>

      {visaApplications.length === 0 ? (
        <div className="">
          <p className="text-center text-red-600 font-bold text-2xl my-20">
            You haven't applied for any visas yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {visaApplications.map((visa) => (
            <div
              key={visa._id}
              className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-lg p-6 border border-gray-200 transition transform hover:scale-105"
            >
              <img
                src={visa.countryImage}
                alt={visa.country}
                className="w-full h-44 object-cover rounded-md"
              />
              <h3 className="text-2xl font-semibold text-gray-900 mt-4">
                {visa.country}
              </h3>
              <p className="text-gray-700 mt-2">
                <span className="font-medium">Visa Type:</span> {visa.visaType}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Processing Time:</span>{" "}
                {visa.processingTime}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Fee:</span> ${visa.fee}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Validity:</span> {visa.validity}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Method:</span>{" "}
                {visa.applicationMethod}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Applied Date:</span>{" "}
                {visa.appliedDate}
              </p>
              <p className="text-gray-900 font-medium mt-2">
                Applicant:{" "}
                <span className="font-bold text-lg">
                  {visa.firstName} {visa.lastName}
                </span>
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Email:</span> {user?.email}
              </p>

              <button
                onClick={() => handleCancel(visa._id)}
                className="mt-4 w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all cursor-pointer"
              >
                Cancel
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyVisaApplication;

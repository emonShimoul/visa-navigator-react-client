import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const MyAddedVisas = () => {
  const { user } = useContext(AuthContext);
  const [myAddedVisas, setMyAddedVisas] = useState([]);
  // console.log(visaApplications);

  useState(() => {
    fetch(`http://localhost:5000/visas/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyAddedVisas(data);
      });
  }, []);
  console.log(myAddedVisas);

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/visas/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Visa has been deleted successfully.",
                icon: "success",
              });

              const remaining = myAddedVisas.filter(
                (application) => application._id !== id
              );
              setMyAddedVisas(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        My Added Visas
      </h2>

      {myAddedVisas.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          You haven't added any visas yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {myAddedVisas.map((visa) => (
            <div
              key={visa._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-4"
            >
              <img
                src={visa.countryImage}
                alt={visa.country}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-900 mt-3">
                {visa.country}
              </h3>
              <p className="text-gray-700 text-sm">
                <span className="font-medium">Visa Type:</span> {visa.visaType}
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

              {/* Action Buttons */}
              <div className="mt-4 flex justify-between">
                {/* onClick={() => navigate(`/update-visa/${visa._id}`)} */}
                <button className="px-4 py-2 bg-gray-600 text-white text-sm font-semibold rounded-md hover:bg-gray-700 transition cursor-pointer">
                  Update
                </button>
                <button
                  onClick={() => handleDelete(visa._id)}
                  className="px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-md hover:bg-red-700 transition cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAddedVisas;

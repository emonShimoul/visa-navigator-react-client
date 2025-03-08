import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateVisa = () => {
  const visa = useLoaderData();
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
  } = visa;

  const [selectedDocuments, setSelectedDocuments] = useState([]);

  useEffect(() => {
    if (requiredDocuments) {
      setSelectedDocuments(requiredDocuments);
    }
  }, [requiredDocuments]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedDocuments([...selectedDocuments, value]); // Add to array
    } else {
      setSelectedDocuments(selectedDocuments.filter((doc) => doc !== value)); // Remove from array
    }
  };

  const handleUpdateVisa = (e) => {
    e.preventDefault();
    const form = e.target;
    const countryImage = form.countryImage.value;
    const countryName = form.countryName.value;
    const visaType = form.visaType.value;
    const processingTime = form.processingTime.value;
    const requiredDocuments = selectedDocuments;
    const description = form.description.value;
    const ageRestriction = form.ageRestriction.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const applicationMethod = form.applicationMethod.value;

    const updatedVisa = {
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
    };

    fetch(`http://localhost:5000/visas/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Visa info updated successfully!!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        navigate("/my-added-visas");
      });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Update Visa</h2>
      <form onSubmit={handleUpdateVisa} className="space-y-4">
        <input
          type="text"
          name="countryImage"
          defaultValue={countryImage}
          placeholder="Country Image URL"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="countryName"
          defaultValue={countryName}
          placeholder="Country Name"
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="visaType"
          defaultValue={visaType}
          className="w-full p-2 border rounded"
        >
          <option value="Tourist visa">Tourist visa</option>
          <option value="Student visa">Student visa</option>
          <option value="Official visa">Official visa</option>
        </select>
        <input
          type="text"
          name="processingTime"
          defaultValue={processingTime}
          placeholder="Processing Time"
          className="w-full p-2 border rounded"
          required
        />

        <div>
          <label className="font-semibold">Required Documents:</label>
          <div>
            <input
              type="checkbox"
              name="requiredDocuments"
              value="Valid passport"
              checked={selectedDocuments.includes("Valid passport")}
              onChange={handleCheckboxChange}
            />{" "}
            Valid passport
          </div>
          <div>
            <input
              type="checkbox"
              name="requiredDocuments"
              value="Visa application form"
              checked={selectedDocuments.includes("Visa application form")}
              onChange={handleCheckboxChange}
            />{" "}
            Visa application form
          </div>
          <div>
            <input
              type="checkbox"
              name="requiredDocuments"
              value="Recent passport-sized photograph"
              checked={selectedDocuments.includes(
                "Recent passport-sized photograph"
              )}
              onChange={handleCheckboxChange}
            />{" "}
            Recent passport-sized photograph
          </div>
        </div>

        <textarea
          name="description"
          defaultValue={description}
          placeholder="Description"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="ageRestriction"
          defaultValue={ageRestriction}
          placeholder="Age Restriction"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="fee"
          defaultValue={fee}
          placeholder="Visa Fee"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="validity"
          defaultValue={validity}
          placeholder="Validity"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="applicationMethod"
          defaultValue={applicationMethod}
          placeholder="Application Method"
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded cursor-pointer"
        >
          Update Visa
        </button>
      </form>
    </div>
  );
};

export default UpdateVisa;

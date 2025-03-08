import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateVisa = () => {
  const visa = useLoaderData();

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
    console.log(event.target.checked);

    if (checked) {
      setSelectedDocuments([...selectedDocuments, value]); // Add to array
    } else {
      setSelectedDocuments(selectedDocuments.filter((doc) => doc !== value)); // Remove from array
    }
  };

  const handleUpdateVisa = (e) => {
    e.preventDefault();
    console.log("Updated Visa Data:", {
      countryImage: e.target.countryImage.value,
      countryName: e.target.countryName.value,
      visaType: e.target.visaType.value,
      processingTime: e.target.processingTime.value,
      requiredDocuments: selectedDocuments,
      description: e.target.description.value,
      ageRestriction: e.target.ageRestriction.value,
      fee: e.target.fee.value,
      validity: e.target.validity.value,
      applicationMethod: e.target.applicationMethod.value,
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

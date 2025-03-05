import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddVisa = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const countryImage = form.countryImage.value;
    const countryName = form.countryName.value;
    const visaType = form.visaType.value;
    const processingTime = form.processingTime.value;
    const description = form.description.value;
    const ageRestriction = form.ageRestriction.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const applicationMethod = form.applicationMethod.value;

    // Handle checkboxes (Only checked ones)
    const requiredDocuments = Array.from(
      form.querySelectorAll('input[name="requiredDocuments"]:checked')
    ).map((checkbox) => checkbox.value);

    const newVisa = {
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

    // console.log("Form Data Submitted:", newVisa);

    fetch("http://localhost:5000/visas", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Visa added successfully!!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/all-visas");
        }
      });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Add a New Visa</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="countryImage"
          placeholder="Country Image URL"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="countryName"
          placeholder="Country Name"
          className="w-full p-2 border rounded"
          required
        />
        <select name="visaType" className="w-full p-2 border rounded">
          <option value="Tourist visa">Tourist visa</option>
          <option value="Student visa">Student visa</option>
          <option value="Official visa">Official visa</option>
        </select>
        <input
          type="text"
          name="processingTime"
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
            />{" "}
            Valid passport
          </div>
          <div>
            <input
              type="checkbox"
              name="requiredDocuments"
              value="Visa application form"
            />{" "}
            Visa application form
          </div>
          <div>
            <input
              type="checkbox"
              name="requiredDocuments"
              value="Recent passport-sized photograph"
            />{" "}
            Recent passport-sized photograph
          </div>
        </div>
        <textarea
          name="description"
          placeholder="Description"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="ageRestriction"
          placeholder="Age Restriction"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="fee"
          placeholder="Visa Fee"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="validity"
          placeholder="Validity"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="applicationMethod"
          placeholder="Application Method"
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded cursor-pointer"
        >
          Add Visa
        </button>
      </form>
    </div>
  );
};

export default AddVisa;

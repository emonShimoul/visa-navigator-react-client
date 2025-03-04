import React from "react";

const AddVisa = () => {
  const handleAddVisa = (e) => {
    e.preventDefault();
    console.log("Added visaa");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Add a New Visa</h2>
      <form onSubmit={handleAddVisa} className="space-y-4">
        <input
          type="text"
          placeholder="Country Image URL"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Country Name"
          className="w-full p-2 border rounded"
        />
        <select className="w-full p-2 border rounded">
          <option>Tourist visa</option>
          <option>Student visa</option>
          <option>Official visa</option>
        </select>
        <input
          type="text"
          placeholder="Processing Time"
          className="w-full p-2 border rounded"
        />
        <div>
          <label className="font-semibold">Required Documents:</label>
          <div>
            <input type="checkbox" id="passport" />
            <label htmlFor="passport" className="ml-2">
              Valid passport
            </label>
          </div>
          <div>
            <input type="checkbox" id="form" />
            <label htmlFor="form" className="ml-2">
              Visa application form
            </label>
          </div>
          <div>
            <input type="checkbox" id="photo" />
            <label htmlFor="photo" className="ml-2">
              Recent passport-sized photograph
            </label>
          </div>
        </div>
        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Age Restriction"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Visa Fee"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Validity"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Application Method"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Add Visa
        </button>
      </form>
    </div>
  );
};

export default AddVisa;

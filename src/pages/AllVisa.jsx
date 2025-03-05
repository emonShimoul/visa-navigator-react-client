import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const AllVisa = () => {
  const loadVisas = useLoaderData();

  const [visas, setVisas] = useState(loadVisas);
  console.log(visas);

  return (
    <div>
      <h1>All Visa: {visas.length}</h1>
    </div>
  );
};

export default AllVisa;

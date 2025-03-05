import React from "react";
import { useLoaderData } from "react-router-dom";

const VisaDetails = () => {
  const visaInfo = useLoaderData();
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
    <div>
      <h2>Visa Details: {countryName}</h2>
    </div>
  );
};

export default VisaDetails;

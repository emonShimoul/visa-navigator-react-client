import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyVisaApplication = () => {
  const { user } = useContext(AuthContext);

  fetch(`http://localhost:5000/visa-application/${user?.email}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return (
    <div>
      <h1>My Visa Application</h1>
    </div>
  );
};

export default MyVisaApplication;

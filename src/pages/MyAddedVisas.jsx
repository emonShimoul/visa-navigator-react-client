import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

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

  return (
    <div>
      <h1>My Added Visas: {myAddedVisas.length}</h1>
    </div>
  );
};

export default MyAddedVisas;

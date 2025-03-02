import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import AddVisa from "./pages/AddVisa";
import AllVisa from "./pages/AllVisa";
import MyAddedVisas from "./pages/MyAddedVisas";
import MyVisaApplication from "./pages/MyVisaApplication";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "all-visas",
        element: <AllVisa></AllVisa>,
      },
      {
        path: "add-visa",
        element: <AddVisa></AddVisa>,
      },
      {
        path: "my-added-visas",
        element: <MyAddedVisas></MyAddedVisas>,
      },
      {
        path: "my-visa-applications",
        element: <MyVisaApplication></MyVisaApplication>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

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
import AuthProvider from "./provider/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
import VisaDetails from "./pages/VisaDetails";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import UpdateVisa from "./pages/UpdateVisa";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/all-visas",
        element: <AllVisa></AllVisa>,
        loader: () =>
          fetch("https://visa-navigator-server-xi-lovat.vercel.app/visas"),
      },
      {
        path: "all-visas/:id",
        element: (
          <PrivateRoute>
            <VisaDetails></VisaDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://visa-navigator-server-xi-lovat.vercel.app/all-visas/${params.id}`
          ),
      },
      {
        path: "/add-visa",
        element: (
          <PrivateRoute>
            <AddVisa></AddVisa>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-visa/:id",
        element: (
          <PrivateRoute>
            <UpdateVisa></UpdateVisa>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://visa-navigator-server-xi-lovat.vercel.app/all-visas/${params.id}`
          ),
      },
      {
        path: "/my-added-visas",
        element: (
          <PrivateRoute>
            <MyAddedVisas></MyAddedVisas>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-visa-applications",
        element: (
          <PrivateRoute>
            <MyVisaApplication></MyVisaApplication>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

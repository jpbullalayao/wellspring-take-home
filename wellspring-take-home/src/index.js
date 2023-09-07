import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Layout } from "./components/Layout/Layout.tsx";

import { Home } from "./pages/Home/Home.tsx";
import { Patients } from "./pages/Patients/Patients.tsx";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/patients",
        element: <Patients />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  // {
  //   path: "/patients",
  //   element: <Patients />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

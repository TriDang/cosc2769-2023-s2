import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home";
import Customers, { loadCustomers } from "./Customers";
import Customer, { loadCustomer } from "./Customer";
import CustomerIndex from "./CustomerIndex";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/customers",
    element: <Customers />,
    loader: loadCustomers,
    children: [
      {
        index: true,
        element: <CustomerIndex />,
      },
      {
        path: ":customerID",
        element: <Customer />,
        loader: loadCustomer,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cookies from "./components/cookies/cookies";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "cookies",
    element: <Cookies />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <Navbar brand="Calories" />
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);

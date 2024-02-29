import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cookies from "./components/cookies/cookies";
import Navbar from "./components/Navbar";
import ReactGa from "react-ga4";

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

ReactGa.initialize("G-MG2RZ57KQ6");
ReactGa.send({
  hitType: "pageview",
  page: window.location.pathname,
  title: "Custom Title",
});
ReactDOM.render(
  <React.StrictMode>
    <Navbar brand="Calories" />
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);

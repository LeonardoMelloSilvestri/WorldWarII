import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home";
import Statistics from "./components/Statistics";
import Summary from "./components/Summary";
import Chronology from "./components/Chronology";
import Countries from "./components/Countries.jsx";

import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Home />
            <Statistics />
            <Summary />
          </>
        ),
      },
      {
        path: "cronologia",
        element: <Chronology />,
      },
      {
        path: "participantes",
        element: <Countries />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

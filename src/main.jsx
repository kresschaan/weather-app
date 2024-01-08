import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Root from "./Layout/Root.jsx";
import Landing from "./Layout/Landing.jsx";
import Auth0Provider from "./services/Auth0.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <Auth0Provider>
            <App />
          </Auth0Provider>
        ),
      },
      {
        path: "/login",
        element: (
          <Auth0Provider>
            <Landing />
          </Auth0Provider>
        ),
      },
      {
        path: "/home",
        element: <ProtectedRoute></ProtectedRoute>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);

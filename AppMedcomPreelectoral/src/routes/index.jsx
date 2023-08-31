import React from "react";
import {createBrowserRouter } from "react-router-dom";
import { Home, Wall, Register} from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Wall/:role",
    element: <Wall />
  },
  {
    path: "/Register",
    element: <Register />,
  }
]);
/*
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home setAuthenticated={setAuthenticated}/>,
  },
  {
    path: "/Wall/:role",
    element: authenticated?<Wall />:<Navigate to="/" />,
  },
  {
    path: "/Register",
    element: <Register />,
  }
]);*/

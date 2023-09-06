import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <h1 className="fixed inset-5 opacity-70 flex items-end justify-end font-extrabold text-white text-5xl lg:text-7xl -z-50">OFERTA ELECTORAL</h1>

    </>
  );
}

export default App;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import PlaceProvider from "./providers/PlaceProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PlaceProvider>
      <RouterProvider router={router}></RouterProvider>
    </PlaceProvider>
  </StrictMode>
);

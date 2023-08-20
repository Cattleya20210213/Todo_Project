import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Index from "./components/pages/index.tsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Provider } from "jotai";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Index />
      </LocalizationProvider>
    </Provider>
  </React.StrictMode>
);

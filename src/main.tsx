import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TodoList from "./components/pages/todoList.tsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Provider } from "jotai";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TodoList />
      </LocalizationProvider>
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom";
import { BackendService } from "./backend";
import "./index.css";
import App from "./app/app";
import { BrowserRouter } from 'react-router-dom';

const backend = new BackendService();

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App backend={backend} />
    </React.StrictMode>  
  </BrowserRouter>,
  document.getElementById("root")
);

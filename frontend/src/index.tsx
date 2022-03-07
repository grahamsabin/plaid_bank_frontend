//import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Navbar from "./Components/Design/Navbar";
import { QuickstartProvider } from "./Context";
import reportWebVitals from "./reportWebVitals";
import React, {Component} from 'react';
import LandingPage from "./Components/Design/LandingPage";


ReactDOM.render(
  
  <React.StrictMode>
    <QuickstartProvider>
      <LandingPage/>
      <App />
    </QuickstartProvider>
  </React.StrictMode>,
  document.getElementById("root")
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

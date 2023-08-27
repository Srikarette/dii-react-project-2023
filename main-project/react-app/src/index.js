import React from "react";
import ReactDOM from "react-dom/client";
import "./pages/css/index.css";
import reportWebVitals from "./reportWebVitals";

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import MainContent from "./pages/MainContent";
import Navbar from "./pages/Navbar";
import EditProfile from "./pages/EditProfile";
import PrivacySetting from "./pages/privacySetting";
import GlobalStyle from "./pages/GlobalStyle"
import SelfUser from "./pages/selfUserPage";
// import Userself from "./Selfe_userpage/selfUserPage";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="mainDisplay">
        <GlobalStyle />
        <Navbar />
        {/* <MainContent /> */}

        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/home" element={<MainContent />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/user-profile" element={<SelfUser />} />
          <Route path="/privacy-setting" element={<PrivacySetting />} />
        </Routes>
      </div>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

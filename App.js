import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Users/Registration/Register";
import EmergencyContact from "./EmergencyContacts/EmergencyContact";
import MenuBar from "./LandingPage/NavBar/MenuBar";
import Dashboard from "./Users/Dashboard";
import Login from "./Users/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuBar />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/EmergencyContacts" element={<EmergencyContact />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </Router>
  );
};

export default App;

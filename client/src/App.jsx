import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useState, useEffect} from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Contact from "./pages/contactform";
import Mission from "./pages/Mission";
import "./assets/css/App.css"
import axios from "axios";

const App = () => {

  // const fetchAIP = async () => {
  //   const response = await axios.get("http://localhost:5173/api");
  //   console.log(response.data.message);
  // };

  // useEffect(() => {
  //   fetchAIP();
  // }, []);

  return (
    <Router>
      <div id="root">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;


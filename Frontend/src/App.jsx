// import { useState } from "react";
// import Homepage from "./pages/Homepage/Homepage.jsx";
// import Footer from "./components/Footer/Footer.jsx";
// import Navbar from '../Navbar/NavBar.jsx';
// import "./App.css";

// function App() {

//   return (
//     <>
//       <Navbar/>
//       <Homepage />
//       <Footer />
//     </>
//   );
// }

// export default App;
// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../Navbar/NavBar.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Register from "../Navbar/Register.jsx";
import Login from "../Navbar/Login.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

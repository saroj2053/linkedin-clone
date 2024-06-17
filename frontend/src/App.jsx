import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/home" exact element={<Home />} />
            <Route path="/" exact element={<Login />} />
            <Route path="/signup" exact element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

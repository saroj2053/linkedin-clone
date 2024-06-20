import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Home from "./pages/Home/Home.jsx";
import { UserContext } from "./context/user-context.jsx";

function App() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/home" exact element={<Home />} />
            <Route
              path="/"
              exact
              element={user ? <Navigate to="/home" /> : <Login />}
            />
            <Route
              path="/signup"
              exact
              element={user ? <Navigate to="/home" /> : <Register />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

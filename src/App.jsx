import React from "react";
import Navebar from "./components/Navebar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Firstpage from "./pages/Firstpage";

const App = () => {
  return (
    <>
      <Navebar />
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/home" element={<Home />} />
      
        <Route path="/login" element={<Login />} />
        <Route path="/sinup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;

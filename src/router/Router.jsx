import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Course from "../pages/Course";
import Footer from "../components/Shared/Footer/Footer";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/course" element={<Course />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
export default Router;

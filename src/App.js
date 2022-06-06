/** @format */

import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Shared/Footer/Footer";
import About from "./components/About/About/About";
import Contact from "./components/Contact/Contact/Contact";
import Course from "./components/Course/Course/Course";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/course' element={<Course />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

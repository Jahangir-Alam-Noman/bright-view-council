/** @format */

import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headers from "./components/Shared/Headers/Headers";
import Footer from "./components/Shared/Footer/Footer";
import About from "./components/About/About/About";

function App() {
  return (
    <div className='App'>
      <Router>
        <Headers></Headers>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

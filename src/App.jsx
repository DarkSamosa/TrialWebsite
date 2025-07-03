import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import PhotoGallery from "./components/PhotoGallery";

import "./App.css"; // 👈 you'll use this for layout-wide styles

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/PhotoGallery" element={<PhotoGallery />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

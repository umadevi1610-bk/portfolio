import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Certifications from "./pages/Certifications"; // ✅ add this


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/certifications" element={<Certifications />} /> {/* ✅ new route */}
</Routes>
    </Router>
  );
}

export default App;

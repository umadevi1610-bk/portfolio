import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Umadevi Balakrishnan</h2>

      <ul className="nav-links">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/skills">Skills</Link></li>
  <li><Link to="/projects">Projects</Link></li>
  <li><Link to="/certifications">Certifications</Link></li> {/* ✅ added */}
  <li><Link to="/contact">Contact</Link></li>
</ul>
    </nav>
  );
};

export default Navbar;

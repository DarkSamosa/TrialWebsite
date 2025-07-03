import { Link } from "react-router-dom";
import "./navbar.css"; 

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/Experience" className="nav-link">
        Experience
      </Link>
      <Link to="/Contact" className="nav-link">
        Contact
      </Link>
      <Link to="/PhotoGallery" className="nav-link">
        Photo Gallery
      </Link>
    </nav>
  );
}

export default Navbar;
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {
  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    e.preventDefault();
    // Navigate to the login page when login is clicked
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/photos">Photos</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <button onClick={handleLoginClick}>Login</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;


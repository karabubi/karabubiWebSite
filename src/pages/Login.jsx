import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import "../Styles/login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0); // Track failed attempts
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "123") {
      // Successful login, navigate to the Photos page
      navigate("/photos");
    } else {
      // Increment failed attempts
      setAttempts(attempts + 1);
      if (attempts >= 2) {
        // After 3 failed attempts, navigate to the ContactAdmin page
        navigate("/contact-admin?loginFailed=true");
      } else {
        // Display error message with remaining attempts
        setError(
          `Invalid username or password. Attempts left: ${2 - attempts}`
        );
      }
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
      <Footer />
    </div>
  );
}

export default Login;

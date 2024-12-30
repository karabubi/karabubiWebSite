import "../Styles/Home.css"; // Import Home styles
import salehImage from "../assets/saleh.jpg"; // Ensure the path to your image is correct
import Footer from "../components/Footer.jsx"; // Import the Footer component

function Home() {
  return (
    <div className="container">
      <div className="box1">
        <h2>Welcome to Saleh's Website</h2>
        <p>This is the home page where you can learn more about Saleh.</p>
        <img src={salehImage} alt="Saleh" className="box1-image" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
        </ul>
      </nav>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default Home;


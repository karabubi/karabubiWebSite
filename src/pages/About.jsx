import Footer from "../components/Footer.jsx"; // Import the Footer component

function About() {
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Welcome to Saleh's personal website. Here you can find details about
        Saleh, his interests, and projects.
      </p>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default About;

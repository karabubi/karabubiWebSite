import "../Styles/Contact.css"; // Adjust the path as necessary
import Footer from "../components/Footer.jsx"; // Import Footer component

const Contact = () => {
  return (
    <div className="container">
      <header>
        <h1>Contact Us</h1>
      </header>
      <section id="social-media">
        <ul className="social-links">
          <li>
            <a href="index.html" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-home"></i> Home
            </a>
          </li>
          <li>
            <a
              href="mailto:example@example.com"
              target="_blank"
              id="emailLink"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i> Email
            </a>
          </li>
          <li>
            <a
              href="https://www.yahoo.com"
              target="_blank"
              id="yahooLink"
              rel="noopener noreferrer"
            >
              <i className="fab fa-yahoo"></i> Yahoo
            </a>
          </li>
          <li>
            <a
              href="https://x.com/@SalehAlkarabubi"
              target="_blank"
              id="twitterLink"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i> X (Twitter)
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/saleh.alkarabubi"
              target="_blank"
              id="facebookLink"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/results?search_query=Alkarabubi+"
              target="_blank"
              id="youtubeLink"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i> YouTube
            </a>
          </li>
        </ul>
      </section>
      {/* Use the imported Footer component */}
      <Footer />
    </div>
  );
};

export default Contact;

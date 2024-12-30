import "../Styles/Photos.css"; // Adjusted import path
import Footer from "../components/Footer.jsx"; // Import the Footer component

const Photos = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li className="title">
            <h1>Photo Gallery</h1>
          </li>
        </ul>
      </nav>
      <div id="gallery-container">
        {/* Example images */}
        <div className="box">
          <img src="image1.jpg" alt="Image 1" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Image 2.
          </p>
        </div>
        <div className="box">
          <img src="image2.jpg" alt="Image 2" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Image 2.
          </p>
        </div>
        <div className="box">
          <img src="image3.jpg" alt="Image 3" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Image 2.
          </p>
        </div>

        <div className="box">
          <img src="image4.jpg" alt="Image 4" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Image 2.
          </p>
        </div>
        <div className="box">
          <img src="image5.jpg" alt="Image 5" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Image 2.
          </p>
        </div>
        <div className="box">
          <img src="image6.jpg" alt="Image 6" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Image 2.
          </p>
        </div>

        <div className="box">
          <img src="image7.jpg" alt="Image 7" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Image 2.
          </p>
        </div>
        <div className="box">
          <img src="image8.jpg" alt="Image 8" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Image 2.
          </p>
        </div>
      </div>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default Photos;

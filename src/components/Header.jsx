import "../Styles/Header.css"; // Import the Header styles

function Header() {
  return (
    <header
      style={{ backgroundImage: "url('/src/assets/Web2.jpg')" }} // Path to your background image
      className="header"
    >
      <div className="header-content">
        <h1>Saleh Alkarabubi</h1>
      </div>
    </header>
  );
}

export default Header;

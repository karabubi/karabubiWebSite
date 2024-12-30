import "../Styles/Footer.css"; // Import the Footer styles

function Footer() {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className="footer">
      <p>© {currentYear} Saleh Alkarabubi</p>
    </footer>
  );
}

export default Footer;

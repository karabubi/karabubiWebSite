import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Photos from "./pages/Photos.jsx";
import Login from "./pages/Login.jsx";
import ContactAdmin from "./pages/ContactAdmin.jsx"; // Import ContactAdmin component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Define each page route */}
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="photos" element={<Photos />} />
          <Route path="login" element={<Login />} />
          <Route path="contact-admin" element={<ContactAdmin />} />{" "}
          {/* Add ContactAdmin route */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

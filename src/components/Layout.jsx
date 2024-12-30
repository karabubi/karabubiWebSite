import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";
function Layout() {
  return (
    <>
      {/* Shared layout components */}
      
      <Navbar />
      <Header />
      {/* Outlet is where the child routes will render */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;

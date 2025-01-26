  //   import { Link, useNavigate } from "react-router-dom";
  //   import "../styles/Navbar.css";
  //   function Navbar() {
  //   const navigate = useNavigate();

  // const handleLoginClick = (e) => {
  //       e.preventDefault();
  //       // Navigate to the login page when login is clicked
  //     navigate("/login");
  //   };

  //   return (
  //     <nav className="navbar">
  //         <ul>
  //           <li>
  //             <Link to="/">Home</Link>
  //         </li>
  //           <li>
  //           <Link to="/about">About</Link>
  //           </li>
  //           <li>
  //             <Link to="/photos">Photos</Link>
  //         </li>
  //           <li>
  //           <Link to="/contact">Contact</Link>
  //         </li>
  //         <li>
  //           <button onClick={handleLoginClick}>Login</button>
  //           </li>
  //       </ul>
  //       </nav>
  //     );
  //   }

  // export default Navbar;



  import * as React from "react";
  import { Link, useNavigate } from "react-router-dom";
  import AppBar from "@mui/material/AppBar";
  import Box from "@mui/material/Box";
  import Toolbar from "@mui/material/Toolbar";
  import IconButton from "@mui/material/IconButton";
  import Typography from "@mui/material/Typography";
  import Menu from "@mui/material/Menu";
  import MenuItem from "@mui/material/MenuItem";
  import MenuIcon from "@mui/icons-material/Menu";
  import Container from "@mui/material/Container";
  import Avatar from "@mui/material/Avatar";
  import Tooltip from "@mui/material/Tooltip";
  import "../styles/Navbar.css"; // Import the CSS file for background and burger menu
  
  const Navbar = () => {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [menuOpen, setMenuOpen] = React.useState(false); // State for toggling menu visibility
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen); // Toggle the mobile menu visibility
    };
  
    const handleLoginClick = (e) => {
      e.preventDefault();
      navigate("/login"); // Navigate to the login page when login is clicked
    };
  
    return (
      <AppBar position="static" sx={{ backgroundImage: 'url("../assets/Web2.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Hamburger Menu (Mobile View) */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleMenu} // Toggle menu on hamburger icon click
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={menuOpen}
                onClose={handleCloseNavMenu}
              >
                <MenuItem component={Link} to="/" onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>Home</Typography>
                </MenuItem>
                <MenuItem component={Link} to="/about" onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>About</Typography>
                </MenuItem>
                <MenuItem component={Link} to="/photos" onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>Photos</Typography>
                </MenuItem>
                <MenuItem component={Link} to="/contact" onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>Contact</Typography>
                </MenuItem>
                <MenuItem>
                  <button onClick={handleLoginClick}>Login</button>
                </MenuItem>
              </Menu>
            </Box>
  
            {/* Navbar Title (Brand Logo or Name) */}
            <Typography variant="h6" noWrap component={Link} to="/" sx={{ display: { xs: "flex", md: "none" }, color: 'white' }}>
              Delivery System
            </Typography>
  
            {/* Desktop Navigation Links */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/photos" className="nav-link">Photos</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
              <button onClick={handleLoginClick}>Login</button>
            </Box>
  
            {/* User Avatar Menu */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key="home" onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>Home</Typography>
                </MenuItem>
                <MenuItem key="dashboard" onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>Dashboard</Typography>
                </MenuItem>
                <MenuItem key="logout" onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  };
  
  export default Navbar;
  
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavComponent = () => {
  return (
    <nav>
      <Navbar bg="" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="">
            <img src={require("../assets/logo L.jpg")} className="w-25" />
          </Navbar.Brand>
          <Nav className="me-auto links d-flex">
            <Nav.Link href="#home" className="text-black">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="text-black">
              About
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-black">
              Menu
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-black">
              Reservations
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-black">
              Order Online
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-black">
              Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <nav
        class="navbar bg-dark border-bottom border-body text-white"
        data-bs-theme="dark"
      >
        Little Lemon
      </nav>
    </nav>
  );
};

export default Nav;

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function App() {
  return (
    <>
      {/* Responsive Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">UI Design Lab</Navbar.Brand>

          {/* Toggle Button for Mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Page Content */}
      <Container className="mt-5 text-center">
        <h2>Naviagtion bar</h2>
        <p>
          This is a responsive navigation bar built using React-Bootstrap
          component library.
        </p>
      </Container>
    </>
  );
}

export default App;

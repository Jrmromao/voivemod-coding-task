import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../../assets/images/logo/voicemod-logo.png";

const myNavbar: React.FC = () => {
  return (
    <Navbar bg="light" variant="light" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="35"
            height="35"
            className="d-inline-block align-top"
            alt="voivemode-logo"
          />
          Voicemod
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default myNavbar;

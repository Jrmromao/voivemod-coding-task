import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import logo from '../../assets/images/logo/voicemod-logo.png'
import LoadSounds from './loadSounds'

const myNavbar: React.FC = () => {
  return (
    <Navbar bg="light" variant="light" sticky="top">
      <Container>
        <div className="row">
          <div className="col-md">
            <Navbar.Brand>
              <img
                src={logo}
                width="35"
                height="35"
                className="d-inline-block align-top"
                alt="voivemode-logo"
              />
              Voicemod
            </Navbar.Brand>
          </div>
          <div className="col-md">
            <LoadSounds />
          </div>
        </div>
      </Container>
    </Navbar>
  )
}

export default myNavbar

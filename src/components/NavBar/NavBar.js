import React from 'react'
import { Navbar, Nav, Container, Button} from 'react-bootstrap'

function NavBar() {
  return (
    <Navbar bg="light" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <Nav className='navbar-items ms-auto'>
          <Nav.Link href="#home" >About</Nav.Link>
          <Nav.Link href="#features" >Work</Nav.Link>
          <Nav.Link href="#pricing">Projects</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
          <Button variant='outline-primary shadow-sm'>Test</Button>
        </Nav>
      </Container>

    </Navbar>
  )
}

export default NavBar
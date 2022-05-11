import React from 'react'
import { Navbar, Nav, Container, Button} from 'react-bootstrap'

function NavBar() {
  return (
    <Navbar bg="light" fixed="top" style={{borderColor: 'red'}}>
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="paper.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <h2 className='big-header' style={{display: 'inline', fontSize: '28px'}}>Jarred's Portfolio</h2>
        </Navbar.Brand>
        

        <div className='navbar-container'>
          <Nav.Link href="#about" >Home</Nav.Link>
          <Nav.Link href="#about" >About</Nav.Link>
          <Nav.Link href="#features" >Projects</Nav.Link>
        </div>
      </Container>

    </Navbar>
  )
}

export default NavBar
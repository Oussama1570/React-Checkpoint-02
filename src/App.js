import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LogoFifa from './LogoFifa.png'
import React from 'react';
import {Card, img} from 'react-bootstrap';
import PlayersList from './PlayersList';
import Player from './Player'







function App() {
  return (


   
    <div className="Body">
      
<div className='Header'>
      



      

{/* Navbar */}

<div className='Navbar'>




<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
<a href='#home'><img src={LogoFifa} alt='Logo' className='LogoFifa' ></img></a>
      <Container>
        <Navbar.Brand href="#home">Fifa Cup 2024</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Players">Players</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#About">About</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Features
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contact us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                More
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="Thanking">Thanking</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>

<h1 className='MainTitle'> Welcome to Fifa 2024 World</h1>







<div className="App">

  
      <PlayersList />
    </div>

</div>

      
    </div>




  );
}

export default App;

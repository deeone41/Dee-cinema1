import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-black">
      <Container>
        <img src="/Download.png" alt="Logo" width={150} />
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/movies">Movies</Nav.Link>
            <Nav.Link href="/tv shows">Tv Shows</Nav.Link>
            <Nav.Link href="/categories">Categories</Nav.Link>
            <Nav.Link href="/about us">About Us</Nav.Link>
            <Nav.Link href="/contact us">Contact</Nav.Link>

              {/* <Napdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another actvDroion
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
              </Napdown> */}


            <button style={{ backgroundColor: 'red',
             color: 'white', 
             border: 'none',
              padding: '10px 20px',
               borderRadius: '5px',
                cursor: 'pointer' }}
                 >
            Book Now
            </button>
          </Nav>
        </Navbar.Collapse>
        
        
      </Container>
    </Navbar>
  );
}

export default Header;
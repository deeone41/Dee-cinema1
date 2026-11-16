import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Nav } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Footer = () => {
  return (
    <footer className='bg-black text-white pt-5'>
       <Container>
      <Row>
        <Col>
        <img src="/Download.png" alt="Logo" width={150} />

        <p> Experince Movies Beyond Imagination.</p>
        <p>Your destination for unforgettable cinema experience. Discover the latest blockbusters,book your favourite seats, and enjoy entertainment across Nigeria.</p>
        </Col>

        {/* 2nd column */}
        <Col>
        <h5>Quick Links</h5>

        <Nav>

         <Nav.Link href="/home">Home</Nav.Link>
         <Nav.Link href="/home">Now Showing</Nav.Link>
         <Nav.Link href="/home">Coming Soon</Nav.Link>
         <Nav.Link href="/home">Cinema Location</Nav.Link>
         <Nav.Link href="/home">Showtimes</Nav.Link>

         </Nav>
        </Col>

        {/* 3rd column */}
        <Col>
        <h5>Explore</h5>

        <Nav>
         
         <Nav.Link href="/home">Food and Drinks</Nav.Link>
         <Nav.Link href="/home">About Us</Nav.Link>
         <Nav.Link href="/home">Contact Us</Nav.Link>
         <Nav.Link href="/home">My Account</Nav.Link>
         <Nav.Link href="/home">My Bookings</Nav.Link>
         </Nav>
        </Col>

        <Col>
        <h5>Support</h5>

        <Nav>

         <Nav.Link href="/">Help Center</Nav.Link>
         <Nav.Link href="/">FAQS</Nav.Link>
         <Nav.Link href="/">Booking Assistance</Nav.Link>
         <Nav.Link href="/">Cancellation Policy</Nav.Link>
         </Nav>
        </Col>
        <Col>
        <h5>Follow</h5>

        <Nav>

         <Nav.Link href="/home">Facebook</Nav.Link>
         <Nav.Link href="/home">Instagram</Nav.Link>
         <Nav.Link href="/home">X (twitter)</Nav.Link>
         <Nav.Link href="/home">Youtube</Nav.Link>
         </Nav>
        </Col>

      </Row>

      <Row className='border-top border-secondary mt-3 py-4'>
        <Col>
        <h5>Stay Updated with SilverScreen</h5>
        <p>Get the latest movie releases, exclusive offers and cinema updates delivered to your inbox.
        </p>
        </Col>
        <Col>
         <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
     
     <Button type='button' style={{backgroundColor: "goldenrod", color:'black', whiteSpace: 'nowrap'}}> Suscribe</Button>
    </Form>
        </Col>
      </Row>

      <Row className='border-top border-secondary mt-3 py-4' >
        <Col>&copy; {new Date().getFullYear()} Dee Cinema. All Right Reserved</Col>
      </Row >
    </Container>
      



    </footer>
  )
}

export default Footer
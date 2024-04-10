import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './One.css'

export function One() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" className='yes'>Furniture world</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '300px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action9">Know Us</Nav.Link>
            <NavDropdown title="Products" id="navbarScrollingDropdown">
              <NavDropdown.Item className="cc" href="#action3">Sofa's</NavDropdown.Item>
              <NavDropdown.Item className="cc" href="#action3">Chairs</NavDropdown.Item>
              <NavDropdown.Item className="cc" href="#action3">Living Room</NavDropdown.Item>
              <NavDropdown.Item className="cc" href="#action3">Office</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Brands" id="navbarScrollingDropdown">
              <NavDropdown.Item className="cc" href="#action3">Google</NavDropdown.Item>
              <NavDropdown.Item className="cc" href="#action3">Netflic</NavDropdown.Item>
              <NavDropdown.Item className="cc" href="#action3">Amazon</NavDropdown.Item>
              <NavDropdown.Item className="cc" href="#action3">Flipkart</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action6">Contact Us</Nav.Link>
            <Nav.Link href="#action7">Blog</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



import { Navbar, Nav, Container } from "react-bootstrap";

const CustomNavbar = () => {
  return (

    <Navbar bg="white" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand className="fs-2 fw-bold " style={{ color: '#78350F' }}>Collers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center" style={{ color: '#78350F' }}>
            <Nav.Link href="#products" className="me-3" style={{ color: '#78350F' }}>
              Products
            </Nav.Link>
            <Nav.Link href="#solutions" className="me-3" style={{ color: '#78350F' }}>
              Solutions
            </Nav.Link>
            <Nav.Link href="#pricing" className="me-3" style={{ color: '#78350F' }}>
              Pricing
            </Nav.Link>
            <Nav.Link href="#resources" className="me-3" style={{ color: '#78350F' }}>
              Resources
            </Nav.Link>
            <Nav.Link href="#login" className="me-3" style={{ color: '#78350F' }}>
              Log In
            </Nav.Link>
            <Nav.Link style={{ border: " 1px solid #78350F" }}>Sign up now</Nav.Link >
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

import { Navbar, Container, Nav, Button } from "react-bootstrap";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const navbar = () => {
  return (
    <Navbar
      className={styles.fixed}
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Container>
        <Nav>
          <Navbar.Brand href="#home" className="text-transform-uppercase">
            <h1>
              <span
                style={{
                  color: "rgb(131, 100, 226)",
                  border: "2px solid rgb(131, 100, 226)",
                  padding: "0 5px",
                  marginRight: "10px",
                }}
              >
                KS
              </span>
              koinsoin
            </h1>
          </Navbar.Brand>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-md-flex d-block flex-row mx-md-auto mx-0 navlinks">
            <Nav.Link className="active" href="/">
              Home
            </Nav.Link>
            <Nav.Link href="#payment">Payment</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#help">Help</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
          </Nav>

          <Nav>
            <Link href="/signup" passHref>
              <Button className={`${styles.btn} buttons outline-none b-0 px-4`}>
                Sign In
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navbar;

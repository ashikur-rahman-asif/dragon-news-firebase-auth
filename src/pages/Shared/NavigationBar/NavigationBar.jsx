import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <Navbar
        className="mt-3"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <div className="mx-2">
                <Link to="/category/0" className="mx-2 text-decoration-none text-reset font-weight-bold">Home</Link>
                <Link className="mx-2 text-decoration-none text-reset font-weight-bold">About</Link>
                <Link className="mx-2 text-decoration-none text-reset font-weight-bold">Career</Link>
              </div>
            </Nav>
            <Nav className="d-flex align-items-center">
              {user && (
                <Nav.Link href="#deets">
                  <FaUserAlt style={{ fontSize: "2rem" }}></FaUserAlt>
                </Nav.Link>
              )}
              <Nav.Link eventKey={2} href="#memes">
                {user ? (
                  <Button className="" variant="secondary">
                    Log Out
                  </Button>
                ) : (
                  <Link to="login">
                    <Button className="" variant="secondary">
                      Login
                    </Button>
                  </Link>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;

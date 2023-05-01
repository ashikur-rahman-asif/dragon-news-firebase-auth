import React, { useContext } from "react";
import logo from "../../../../public/assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from "../../../provider/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  const {user}=useContext(AuthContext)
  return (
    <Container className="mt-3">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY, h:mm a")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Danger</Button>
        <Marquee speed={100}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      <Navbar className="mt-3" collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="http://localhost:5173/category/0">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center">
              {user && <Nav.Link href="#deets"><FaUserAlt style={{fontSize:'2rem'}}></FaUserAlt></Nav.Link>}
              <Nav.Link eventKey={2} href="#memes">
             {user ? <Button className="" variant="secondary">Log Out</Button> :
                  <Link to='/login'><Button className="" variant="secondary">Login</Button></Link>
                }
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;

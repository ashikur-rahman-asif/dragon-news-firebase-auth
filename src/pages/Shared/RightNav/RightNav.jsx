import React from "react";
import { Button } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import QZone from "../QZone/QZone";
import bg from "../../../../public/assets/bg.png";
import "./RightNav.css";
const RightNav = () => {
  return (
    <div>
      <h4>Login with</h4>
      <Button className="mb-2" variant="outline-primary">
        {" "}
        <FaGoogle /> Login with google
      </Button>{" "}
      <Button variant="outline-secondary">
        <FaGithub /> Login with github
      </Button>{" "}
      <div className="mt-3">
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="position-relative">
        <img className="w-100 mt-3" src={bg} alt="" />
        <div className="position-absolute top-0 text-white text-center mt-5">
          <h1>Create an Amazing Newspaper</h1>
          <p className="mt-5">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button className="p-3 mt-5" variant="danger">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;

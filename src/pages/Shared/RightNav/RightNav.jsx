import React from "react";
import { Button } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaInstagram,FaTwitter } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import QZone from "../QZone/QZone";
import bg from '../../../../public/assets/bg.png'

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
          <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
        </ListGroup>
          </div>
          <QZone></QZone>
          <div>
              <img className="w-100 mt-3" src={bg} alt="" />
        </div>
    </div>
  );
};

export default RightNav;

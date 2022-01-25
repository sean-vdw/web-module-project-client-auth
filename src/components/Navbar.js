import React from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const FriendNav = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Friends Database</Navbar.Brand>
      <Nav className="me-auto nav-links">
        <Link to='/'>Home</Link>
        <Link to='/friends'>Friends List</Link>
        <Link to='/friends/add'>Add Friend</Link>
        <Link to='/logout'>Logout</Link>
      </Nav>
      </Container>
    </Navbar>
  )
}

export default FriendNav;
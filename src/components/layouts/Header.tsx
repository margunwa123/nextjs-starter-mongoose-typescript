import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";

function Header() {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="#home">Todo List</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
          <Link href="/create">
            <a className="nav-link">Create</a>
          </Link>
          {/* Maybe later <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

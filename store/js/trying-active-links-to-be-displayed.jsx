import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate, NavLink } from "react-router-dom";

function Mynavbar() {
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            navigate("/search");
        }
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">React Router App</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0 mh-100" navbarScroll>
                        <Nav.Link
                            to="/"
                            className={({ isActive, isPending }) => {
                                return isActive
                                    ? "on"
                                    : isPending
                                    ? "cued"
                                    : "";
                            }}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                        <NavDropdown
                            title="About Us"
                            id="navbarScrollingDropdown"
                        >
                            <NavDropdown.Item href="/AboutUs">
                                Get to know us
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/contact">
                                Contact us
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/this-address-does-not-exist">
                                Error 404
                            </NavDropdown.Item>
                        </NavDropdown>
                        {/* <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link> */}
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onKeyDown={handleSearch}
                        />
                        <Button
                            variant="outline-success"
                            onClick={() => navigate("/search")}
                        >
                            Search
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Mynavbar;

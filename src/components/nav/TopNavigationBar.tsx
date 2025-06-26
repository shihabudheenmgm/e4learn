"use client";
import LogoBox from "@/components/LogoBox";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaSignInAlt, FaUserAlt } from "react-icons/fa";

const TopNavigationBar = () => {
    const [navScroll, SetNavScroll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [showDropdown, setShowDropdown] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            SetNavScroll(window.scrollY > 0);
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        handleResize();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Navbar expand="lg" className={`sticky-top ${navScroll ? "scrolling" : ""}`}>
            <Container>
                <LogoBox height={36} width={143} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavDropdown title="Courses" id="basic-nav-dropdown" autoClose={true} show={showDropdown} onToggle={(isOpen) => setShowDropdown(isOpen)}>
                            <NavDropdown.Item as={Link} href="/">
                                Sample Course 1
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/">
                                Sample Course 2
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item>
                            <Nav.Link href="/college">For Colleges</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/corporate">For Corporates</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about">About Us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/faq">FAQ</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                <div className="d-flex gap-2 gap-md-3 ms-auto">
                    <Link href={"/login"} className="btn btn-primary">
                        {isMobile ? <FaSignInAlt /> : "Login"}
                    </Link>
                    <Link href={"/register"} className="btn btn-danger">
                        {isMobile ? <FaUserAlt /> : "Register"}
                    </Link>
                </div>
                <Navbar.Toggle aria-controls="navbarNav" />
            </Container>
        </Navbar>
    );
};

export default TopNavigationBar;

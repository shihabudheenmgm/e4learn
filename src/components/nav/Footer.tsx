import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import WhatsAppWidget from "./WhatsAppWidget";

import logo from "@/assets/images/logo.svg";
import { footerLinks } from "@/assets/data/footer-items";
import clsx from "clsx";

const Footer = ({ className }: { className?: string }) => {
    return (
        <>
            <footer className={clsx("pt-5", className)}>
                <Container>
                    <Row className="g-4">
                        <Col lg={3}>
                            <Link className="me-0" href="/">
                                <Image className="light-mode-item h-40px" width={189} height={40} src={logo} alt="logo" />
                            </Link>
                            <p className="my-3">Eduport education theme, built specifically for the education centers which is dedicated to teaching and involve learners.</p>
                            <ul className="list-inline mb-0 mt-3">
                                <li className="list-inline-item">
                                    {" "}
                                    <a className="btn btn-white btn-sm shadow px-2 text-facebook" href="#">
                                        <FaFacebookF className="fa-fw" />
                                    </a>{" "}
                                </li>
                                <li className="list-inline-item">
                                    {" "}
                                    <a className="btn btn-white btn-sm shadow px-2 text-instagram" href="#">
                                        <FaInstagram className="fa-fw" />
                                    </a>{" "}
                                </li>
                                <li className="list-inline-item">
                                    {" "}
                                    <a className="btn btn-white btn-sm shadow px-2 text-twitter" href="#">
                                        <FaTwitter className="fa-fw" />
                                    </a>{" "}
                                </li>
                                <li className="list-inline-item">
                                    {" "}
                                    <a className="btn btn-white btn-sm shadow px-2 text-linkedin" href="#">
                                        <FaLinkedinIn className="fa-fw" />
                                    </a>{" "}
                                </li>
                            </ul>
                        </Col>
                        <Col lg={6}>
                            <Row className="g-4">
                                {footerLinks.map((link, idx) => (
                                    <Col xs={6} md={4} key={idx}>
                                        <h5 className="mb-2 mb-md-4">{link.title}</h5>
                                        <ul className="nav flex-column">
                                            {link.items.map((item, idx) => (
                                                <li className="nav-item" key={idx}>
                                                    <Link className="nav-link" href={item.link ?? ""}>
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col lg={3}>
                            <h5 className="mb-2 mb-md-4">Contact</h5>
                            <p className="mb-2">
                                Toll free:<span className="h6 fw-light ms-2">+1234 568 963</span>
                                <span className="d-block small">(9:AM to 8:PM IST)</span>
                            </p>
                            <p className="mb-0">
                                Email:<span className="h6 fw-light ms-2">example@gmail.com</span>
                            </p>
                        </Col>
                    </Row>
                    <hr className="mt-4 mb-0" />
                    <div className="py-3">
                        <Container className="px-0">
                            <div className="d-lg-flex justify-content-between align-items-center py-3 text-center text-md-left">
                                <div className="text-body text-primary-hover"> Copyrights ©2025 Study</div>
                                <div className="justify-content-center mt-3 mt-lg-0">
                                    <ul className="nav list-inline justify-content-center mb-0">
                                        <li className="list-inline-item">
                                            <a className="nav-link" href="#">
                                                Terms of use
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="nav-link pe-0" href="#">
                                                Privacy policy
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Container>
                    </div>
                </Container>
            </footer>
            <WhatsAppWidget />
        </>
    );
};

export default Footer;

import React from "react";
import ForgotPassword from "./components/ForgotPassword";
import { Metadata } from "next";
import elementImg from "@/assets/images/element/02.svg";
import avatar1 from "@/assets/images/avatar/01.jpg";
import avatar2 from "@/assets/images/avatar/02.jpg";
import avatar3 from "@/assets/images/avatar/03.jpg";
import avatar4 from "@/assets/images/avatar/04.jpg";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

export const metadata: Metadata = { title: "Forgot-Password" };

const ForgotPasswordPage = () => {
    return (
        <section className="p-0 d-flex align-items-center position-relative overflow-hidden">
            <Container fluid>
                <Row>
                    <Col xs={12} lg={6} className="d-none d-lg-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
                        <div className="p-3 p-lg-5">
                            <div className="text-center">
                                <h2 className="fw-bold">Welcome to our largest community</h2>
                                <p className="mb-0 h6 fw-light">Let&apos;s learn something new today!</p>
                            </div>
                            <Image src={elementImg} className="mt-5" alt="element" />
                            <div className="d-sm-flex mt-5 align-items-center justify-content-center">
                                <ul className="avatar-group mb-2 mb-sm-0">
                                    <li className="avatar avatar-sm">
                                        <Image className="avatar-img rounded-circle" src={avatar1} alt="avatar" />
                                    </li>
                                    <li className="avatar avatar-sm">
                                        <Image className="avatar-img rounded-circle" src={avatar2} alt="avatar" />
                                    </li>
                                    <li className="avatar avatar-sm">
                                        <Image className="avatar-img rounded-circle" src={avatar3} alt="avatar" />
                                    </li>
                                    <li className="avatar avatar-sm">
                                        <Image className="avatar-img rounded-circle" src={avatar4} alt="avatar" />
                                    </li>
                                </ul>
                                <p className="mb-0 h6 fw-light ms-0 ms-sm-3">4k+ Students joined us, now it&apos;s your turn.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className="d-flex justify-content-center">
                        <Row className="my-5">
                            <Col sm={10} xl={12} className="m-auto">
                                <span className="mb-0 fs-1">🤔</span>
                                <h1 className="fs-2">Forgot Password?</h1>
                                <h5 className="fw-light mb-4">To receive a new password, enter your email address below.</h5>
                                <ForgotPassword />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ForgotPasswordPage;

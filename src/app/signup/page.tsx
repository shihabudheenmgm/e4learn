import React from "react";
import element3Img from "@/assets/images/element/03.svg";
import elementImg from "@/assets/images/element/02.svg";
import avatar1 from "@/assets/images/avatar/01.jpg";
import avatar2 from "@/assets/images/avatar/02.jpg";
import avatar3 from "@/assets/images/avatar/03.jpg";
import avatar4 from "@/assets/images/avatar/04.jpg";
import SingUpForm from "./components/SingUpForm";
import Image from "next/image";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Metadata } from "next";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

export const metadata: Metadata = { title: "Sign-Up" };

const SignUpPage = () => {
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
                    <Col xs={12} lg={6} className="m-auto">
                        <Row className="my-5">
                            <Col sm={10} xl={8} className="m-auto">
                                <Image src={element3Img} className=" mb-2 ms-0" height={40} alt="element" />
                                <h2>Sign up for your account!</h2>
                                <p className="lead mb-4">Nice to see you! Please Sign up with your account.</p>
                                <SingUpForm />
                                <Row>
                                    <div className="position-relative my-4">
                                        <hr />
                                        <p className="small position-absolute top-50 start-50 translate-middle bg-body px-5">Or</p>
                                    </div>
                                    <Col xxl={6} className="d-grid">
                                        <a href="#" className="btn bg-google mb-2 mb-xxl-0">
                                            <FaGoogle className="text-white me-2" />
                                            Signup with Google
                                        </a>
                                    </Col>
                                    <Col xxl={6} className="d-grid">
                                        <a href="#" className="btn bg-facebook mb-0">
                                            <FaFacebookF className="me-2" />
                                            Signup with Facebook
                                        </a>
                                    </Col>
                                </Row>
                                <div className="mt-4 text-center">
                                    <span>
                                        Already have an account?<Link href="/login"> Sign in here</Link>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SignUpPage;

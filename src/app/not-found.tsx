import React from "react";
import error404Img from "@/assets/images/error/error404.svg";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Col, Container, Row } from "react-bootstrap";

export const metadata: Metadata = { title: "Not Found" };

const NotFound = () => {
    return (
        <>
            <section className="pt-5">
                <Container>
                    <Row>
                        <Col xs={12} className="text-center">
                            <Image src={error404Img} height={1000} width={1000} className="h-200px h-md-400px mb-4" alt="error404" />
                            <h1 className="display-1 text-danger mb-0">404</h1>
                            <h2>Oh no, something went wrong!</h2>
                            <p className="mb-4">Either something went wrong or this page doesn&apos;t exist anymore.</p>
                            <Link href="/" className="btn btn-primary mb-0">
                                Take me to Homepage
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default NotFound;

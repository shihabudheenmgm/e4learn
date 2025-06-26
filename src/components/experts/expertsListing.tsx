"use client";
import Link from "next/link";
import { Button, Card, CardBody, CardTitle, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import type { expertTypes, headingType } from "@/types/other";
import { getExpertData } from "@/helpers/data";
import { useFetchData } from "@/hooks/useFetchData";

const FeaturedCourses = ({ heading }: headingType) => {
    const allexpertsItems = useFetchData<expertTypes[]>(getExpertData);
    return (
        <section>
            <Container>
                <Row className="mb-4">
                    <Col lg={8} className="text-center mx-auto">
                        <h2>{heading}</h2>
                    </Col>
                </Row>
                <Row className="g-4">
                    {allexpertsItems?.map((course, idx) => (
                        <Col md={6} lg={4} xxl={3} key={idx}>
                            <Card className="bg-white position-relative text-center excard">
                                <figure>
                                    <Image src={course.image} alt="" width={300} height={300} />
                                    <span>{course.experience}</span>
                                </figure>
                                <CardBody>
                                    <CardTitle as="h5">
                                        <Link href="">{course.title}</Link>
                                    </CardTitle>
                                    <p>{course.designation}</p>
                                    <div>
                                        <Link href={"#"} className="btn btn-danger fsz-sm">
                                            View Sessions
                                        </Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <div className="text-center mt-5">
                    <Button variant="primary-soft">View more</Button>
                </div>
            </Container>
        </section>
    );
};

export default FeaturedCourses;

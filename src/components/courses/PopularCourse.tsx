"use client";
import { getAllCourses, getTabData } from "@/helpers/data";
import { useFetchData } from "@/hooks/useFetchData";
import useToggle from "@/hooks/useToggle";
import type { CourseType, TabDataType } from "@/types/other";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, CardTitle, Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from "react-bootstrap";

const CourseCard = ({ course }: { course: CourseType }) => {
    const { isTrue: isOpen, toggle } = useToggle();
    const { description, image, title } = course;
    return (
        <Card className="shadow h-100 coursecard">
            <Image src={image} className="card-img-top" alt="course image" />
            <CardBody className="pb-0 mb-2">
                <CardTitle className="fw-normal">
                    <Link href="">{title}</Link>
                </CardTitle>
                <p className="text-truncate-2">{description}</p>
                <div className="mt-4">
                    <Link href={"/"} className="btn btn-primary">
                        Learn More
                    </Link>
                </div>
            </CardBody>
        </Card>
    );
};

const Courses = ({ courseKey }: { courseKey: string }) => {
    const allCourses = useFetchData<CourseType[]>(getAllCourses);
    const tabDescription = useFetchData<TabDataType[]>(getTabData);
    const filteredCourses = allCourses?.filter((course) => course.category === courseKey);
    const currentTabDescription = tabDescription?.filter((tdesc) => tdesc.category === courseKey);
    return (
        <>
            <TabPane eventKey={courseKey} className="fade show" id="course-pills-tabs-1" role="tabpanel" aria-labelledby="course-pills-tab-1">
                <Row className="g-4">
                    {filteredCourses?.map((course, idx) => (
                        <Col sm={6} lg={4} xl={3} key={idx}>
                            <CourseCard course={course} />
                        </Col>
                    ))}
                </Row>
                <Col lg={8} className="mx-auto text-center mt-5">
                    {currentTabDescription?.map((tdesc, index) => (
                        <h5 key={index} className="text-white mb-0 fw-light">
                            {tdesc.tabdescription}
                        </h5>
                    ))}
                </Col>
            </TabPane>
        </>
    );
};

type titleProps = {
    heading: string;
    classname: string;
};

const PopularCourse = ({ heading, classname }: titleProps) => {
    const categories: CourseType["category"][] = ["Micro Courses", "Short Courses", "Job Linked Tracks", "Bootcamps", "Non-Tech Essentials"];
    return (
        <section className={`${classname}`}>
            <Container>
                <Row className="mb-4">
                    <Col lg={10} className="mx-auto text-center">
                        <h2 className="text-white">{heading}</h2>
                        <p className="mb-0 text-white">Choose from hundreds of courses from specialist organizations</p>
                    </Col>
                </Row>
                <TabContainer defaultActiveKey={categories[0]}>
                    <Nav className="nav-pills nav-pills-bg-soft bg-white justify-content-sm-center mb-4 px-3" id="course-pills-tab" role="tablist">
                        {categories.map((category, idx) => (
                            <NavItem key={idx} className="me-2 me-sm-5">
                                <NavLink as="button" eventKey={category} className="mb-2 mb-md-0" type="button" role="tab">
                                    {category}
                                </NavLink>
                            </NavItem>
                        ))}
                    </Nav>
                    <TabContent id="course-pills-tabContent">
                        {categories.map((category, idx) => (
                            <Courses courseKey={category} key={idx} />
                        ))}
                    </TabContent>
                </TabContainer>
            </Container>
        </section>
    );
};

export default PopularCourse;

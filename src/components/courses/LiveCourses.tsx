"use client";

import TinySlider from "@/components/TinySlider";
import { Button, Card, CardBody, CardTitle, Col, Container, Row } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import type { expertTypes, headingType } from "@/types/other";
import { getExpertData } from "@/helpers/data";
import { useFetchData } from "@/hooks/useFetchData";
import { renderToString } from "react-dom/server";
import type { TinySliderSettings } from "tiny-slider";
import Link from "next/link";

const LiveCourses = ({ heading }: headingType) => {
    const allLiveCourses = useFetchData<expertTypes[]>(getExpertData);

    const courseSliderSettings: TinySliderSettings = {
        arrowKeys: true,
        gutter: 15,
        mouseDrag: true,
        autoplayButton: false,
        autoplayButtonOutput: false,
        nested: "inner",
        controlsText: [renderToString(<FaChevronLeft size={16} />), renderToString(<FaChevronRight size={16} />)],
        autoplay: false,
        controls: true,
        edgePadding: 2,

        items: 2,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 3,
            },
        },
    };

    const liveCourses = allLiveCourses?.filter((course) => course.title.length >= 1);
    return (
        <section className="position-relative">
            <Container>
                <div className="text-center mb-4">
                    <h2>{heading}</h2>
                </div>
                <div className="tiny-slider arrow-round arrow-blur">
                    {liveCourses && (
                        <TinySlider settings={courseSliderSettings} data-autoplay="false" data-edge={2} data-arrow="true" data-dots="false" data-items-lg={1} data-items-xl={2}>
                            {liveCourses?.map((course, idx) => {
                                return (
                                    <div className="p-4" key={idx}>
                                        <Card className="p-1 bg-white position-relative text-center expertcard">
                                            <div className="headbox">
                                                <CardTitle as="h4">
                                                    <Link href="">{course.coursetitle}</Link>
                                                </CardTitle>
                                                <div className="exp">{course.experience}</div>
                                                <div className={`status`}>
                                                    <span className={`dot ${course.status == "Online" ? "green" : "red"}`}></span>
                                                </div>
                                            </div>
                                            <CardBody>
                                                <h5>{course.title}</h5>
                                                <p>{course.designation}</p>
                                                <div>
                                                    <Link href={"#"} className="btn btn-primary fsz-sm">
                                                        Join Now
                                                    </Link>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </div>
                                );
                            })}
                        </TinySlider>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default LiveCourses;

// "use client";

// import TinySlider from "@/components/TinySlider";
// import { Button, Card, CardBody, CardTitle, Col, Container, Row } from "react-bootstrap";
// import { FaArrowLeft, FaArrowRight, FaChevronLeft, FaChevronRight, FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

// import type { expertTypes, headingType } from "@/types/other";
// import { getExpertData } from "@/helpers/data";
// import { useFetchData } from "@/hooks/useFetchData";
// import { renderToString } from "react-dom/server";
// import type { TinySliderSettings } from "tiny-slider";
// import Link from "next/link";

// const LiveCourses = ({ heading }: headingType) => {
//     const allLiveCourses = useFetchData<expertTypes[]>(getExpertData);

//     const courseSliderSettings: TinySliderSettings = {
//         arrowKeys: true,
//         gutter: 15,
//         mouseDrag: true,
//         autoplayButton: false,
//         autoplayButtonOutput: false,
//         nested: "inner",
//         controlsText: [renderToString(<FaChevronLeft size={16} />), renderToString(<FaChevronRight size={16} />)],
//         autoplay: false,
//         controls: true,
//         edgePadding: 2,
//         items: 2,
//         nav: false,
//         responsive: {
//             0: {
//                 items: 1,
//             },
//             992: {
//                 items: 1,
//             },
//             1200: {
//                 items: 2,
//             },
//         },
//     };

//     const liveCourses = allLiveCourses?.filter((course) => course.title.length >= 30);

//     // Don't render slider until data is loaded and we have slides
//     if (!liveCourses || liveCourses.length === 0) {
//         return (
//             <section className="position-relative">
//                 <Container>
//                     <div className="text-center mb-4">
//                         <h2>{heading}</h2>
//                     </div>
//                     <Row className="g-4 align-items-center justify-content-between">
//                         <Col>
//                             <div className="text-center py-5">
//                                 <p className="mb-0">Loading courses...</p>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>
//         );
//     }

//     return (
//         <section className="position-relative">
//             <Container>
//                 <div className="text-center mb-4">
//                     <h2>{heading}</h2>
//                 </div>
//                 <Row className="g-4 align-items-center justify-content-between">
//                     <Col md={6} xl={8}>
//                         <Row>
//                             <div className="tiny-slider arrow-round arrow-blur">
//                                 <TinySlider settings={courseSliderSettings} data-autoplay="false" data-edge={2} data-arrow="true" data-dots="false" data-items-lg={1} data-items-xl={2}>
//                                     {liveCourses.map((course, idx) => (
//                                         <div key={idx}>
//                                             <Card className="p-2 bg-white position-relative text-center expertcard">
//                                                 <CardBody>
//                                                     <CardTitle as="h4">
//                                                         <Link href="">{course.coursetitle}</Link>
//                                                     </CardTitle>
//                                                     <h5>{course.title}</h5>
//                                                     <p>{course.designation}</p>
//                                                     <p>{course.experience}</p>
//                                                     <ul className="list-inline hstack justify-content-center">
//                                                         <li className="list-inline-item ms-2 h6 fw-light mb-0">{course.rating}/5.0</li>
//                                                         {Array(Math.floor(course.rating))
//                                                             .fill(0)
//                                                             .map((_star, idx) => (
//                                                                 <li key={idx} className="list-inline-item me-1 small">
//                                                                     <FaStar size={14} className="text-warning" />
//                                                                 </li>
//                                                             ))}
//                                                         {!Number.isInteger(course.rating) && (
//                                                             <li className="list-inline-item me-1 small">
//                                                                 {" "}
//                                                                 <FaStarHalfAlt size={14} className="text-warning" />{" "}
//                                                             </li>
//                                                         )}
//                                                         {course.rating < 5 &&
//                                                             Array(5 - Math.ceil(course.rating))
//                                                                 .fill(0)
//                                                                 .map((_star, idx) => (
//                                                                     <li key={idx} className="list-inline-item me-1 small">
//                                                                         <FaRegStar size={14} className="text-warning" />
//                                                                     </li>
//                                                                 ))}
//                                                     </ul>
//                                                     <div>
//                                                         <Link href={"#"} className="btn btn-primary fsz-sm">
//                                                             Enquire Now
//                                                         </Link>
//                                                     </div>
//                                                 </CardBody>
//                                             </Card>
//                                         </div>
//                                     ))}
//                                 </TinySlider>
//                             </div>
//                         </Row>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     );
// };

// export default LiveCourses;

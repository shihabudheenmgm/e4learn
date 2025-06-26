import clsx from "clsx";
import { Card, Col, Container, Row } from "react-bootstrap";
import type { IconType } from "react-icons";
import { FaCertificate, FaCode, FaCube, FaFileAlt, FaHeadphones, FaLaptop, FaLaptopCode, FaProjectDiagram, FaSuitcase } from "react-icons/fa";

type CategoryType = {
    title: string;
    description: string;
    icon: IconType;
    variant: string;
};

type CategoryProps = {
    heading: string;
    footheading: string;
    subhead: string;
    footsubhead: string;
    classname: string;
};

export const courseCategories: CategoryType[] = [
    {
        title: "Live, Instructor-Led Classes",
        description: "Learn directly from real working professionals — no pre-recorded fluff.",
        icon: FaLaptop,
        variant: "bg-purple text-purple",
    },
    {
        title: "Job-Linked Career Tracks",
        description: "90%+ job-aligned curriculum with placement visibility after course milestones.",
        icon: FaCode,
        variant: "bg-danger text-danger",
    },
    {
        title: "AI-Powered Personalized Paths",
        description: "Choose your goal — we’ll map your path. Custom tracks based on your stream, skills & interests.",
        icon: FaLaptopCode,
        variant: "bg-blue text-blue",
    },
    {
        title: "Resume & Career Score Builder",
        description: "Track your career readiness with every module. Build a job-ready resume automatically.",
        icon: FaFileAlt,
        variant: "bg-success text-success",
    },
    {
        title: "Mock Interviews & Industry Mentors",
        description: "Practice with real interview questions, get feedback from industry experts.",
        icon: FaHeadphones,
        variant: "bg-orange text-orange",
    },
    {
        title: "Certifications That Count",
        description: "Industry-recognized certificates + capstone projects to showcase on LinkedIn.",
        icon: FaCertificate,
        variant: "bg-primary text-primary",
    },
    {
        title: "Assignments, Projects & Real Use Cases",
        description: "Every lesson ends with an action: assignment, quiz, or mini-project — not just passive watching.",
        icon: FaProjectDiagram,
        variant: "bg-info text-info",
    },
    {
        title: "Placement-Ready Workflow",
        description: "Complete a track → pass mock interviews → unlock job access.",
        icon: FaSuitcase,
        variant: "bg-warning text-warning",
    },
    {
        title: "Career Coach Support",
        description: "Feeling stuck? Our career mentors are just a message away.",
        icon: FaCube,
        variant: "bg-blue text-blue",
    },
];

const CategoryCard = ({ description, icon, title, variant }: CategoryType) => {
    const Icon = icon;
    return (
        <Card className="card-body shadow rounded-3 h-full">
            <div className="d-flex flex-column align-items-center">
                <div className={clsx("icon-xl bg-opacity-10 rounded-circle mb-4", variant)}>
                    <Icon />
                </div>
                <div className="text-center">
                    <h5 className="mb-3">
                        <a href="#" className="stretched-link">
                            {title}
                        </a>
                    </h5>
                    <p>{description}</p>
                </div>
            </div>
        </Card>
    );
};

const CourseCategories = ({ heading, subhead, footheading, footsubhead, classname }: CategoryProps) => {
    return (
        <section className={classname}>
            <Container>
                <div className="text-center mb-5">
                    <h2>{heading}</h2>
                    <p>{subhead}</p>
                </div>
                <Row className="g-4">
                    {courseCategories.map((category, idx) => (
                        <Col sm={6} xl={4} key={idx}>
                            <CategoryCard {...category} />
                        </Col>
                    ))}
                </Row>
                <div className="text-center mt-5">
                    <h4>{footheading}</h4>
                    <p className="fst-italic">{footsubhead}</p>
                </div>
            </Container>
        </section>
    );
};

export default CourseCategories;

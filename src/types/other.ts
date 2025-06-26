import type { StaticImageData } from "next/image";
export type IdType = string;

export type CourseType = {
    id: IdType;
    title: string;
    image: StaticImageData;
    description: string;
    category: "Micro Courses" | "Short Courses" | "Job Linked Tracks" | "Bootcamps" | "Non-Tech Essentials";
    studentImage: StaticImageData;
    avatar: StaticImageData;
    name: string;
};

export type TabDataType = {
    tabdescription: string;
    category: "Micro Courses" | "Short Courses" | "Job Linked Tracks" | "Bootcamps" | "Non-Tech Essentials";
};

export type expertTypes = {
    id: IdType;
    image: StaticImageData;
    title: string;
    designation: string;
    experience: string;
    coursetitle: string;
    price: number;
    rating: number;
    status: "Upcoming" | "Online";
};

export type headingType = {
    heading: string;
};

export type TestimonialType = {
    id: IdType;
    courseId: CourseType["id"];
    course?: CourseType;
    description: string;
    role?: string;
};

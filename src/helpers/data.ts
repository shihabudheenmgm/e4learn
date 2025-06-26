import { coursesData, tabData, allexpertsItems, testimonialData } from "@/assets/data/products";
import type { CourseType, TabDataType, expertTypes, TestimonialType } from "@/types/other";
const sleep = (ms: number = 100) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getAllCourses = async (): Promise<CourseType[]> => {
    await sleep();
    return coursesData;
};

export const getTabData = async (): Promise<TabDataType[]> => {
    await sleep();
    return tabData;
};

export const getExpertData = async (): Promise<expertTypes[]> => {
    await sleep();
    return allexpertsItems;
};

export const getAllTestimonials = async (): Promise<TestimonialType[]> => {
    const data = testimonialData.map((testimonial) => {
        const course = coursesData.find((course) => course.id === testimonial.courseId);
        return {
            ...testimonial,
            course,
        };
    });
    await sleep();
    return data;
};

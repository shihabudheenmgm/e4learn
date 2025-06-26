import type { CourseType, TabDataType, expertTypes, TestimonialType } from "@/types/other";
import courseImg1 from "@/assets/images/courses/01.jpg";
import courseImg2 from "@/assets/images/courses/02.jpg";
import courseImg3 from "@/assets/images/courses/03.jpg";
import courseImg4 from "@/assets/images/courses/04.jpg";
import courseImg5 from "@/assets/images/courses/05.jpg";
import courseImg6 from "@/assets/images/courses/06.jpg";
import courseImg7 from "@/assets/images/courses/07.jpg";
import courseImg8 from "@/assets/images/courses/08.jpg";
import courseImg9 from "@/assets/images/courses/09.jpg";
import courseImg10 from "@/assets/images/courses/10.jpg";
import courseImg11 from "@/assets/images/courses/11.jpg";
import courseImg12 from "@/assets/images/courses/12.jpg";
import courseImg13 from "@/assets/images/courses/13.jpg";
import courseImg14 from "@/assets/images/courses/14.jpg";
import courseImg15 from "@/assets/images/courses/15.jpg";

import studentImg14 from "@/assets/images/courses/14.jpg";
import studentImg15 from "@/assets/images/courses/15.jpg";
import studentImg16 from "@/assets/images/courses/16.jpg";
import studentImg17 from "@/assets/images/courses/17.jpg";
import studentImg18 from "@/assets/images/courses/18.jpg";
import studentImg19 from "@/assets/images/courses/19.jpg";
import studentImg20 from "@/assets/images/courses/20.jpg";
import studentImg21 from "@/assets/images/courses/21.jpg";
import studentImg22 from "@/assets/images/courses/22.jpg";

import avatar1 from "@/assets/images/avatar/01.jpg";
import avatar2 from "@/assets/images/avatar/02.jpg";
import avatar3 from "@/assets/images/avatar/03.jpg";
import avatar4 from "@/assets/images/avatar/04.jpg";

export const coursesData: CourseType[] = [
    {
        id: "1",
        image: courseImg1,
        title: "Digital Productivity",
        description: "Proposal indulged no do sociable he throwing settling.",
        category: "Micro Courses",
        studentImage: studentImg14,
        avatar: avatar1,
        name: "Billy Vasquez",
    },
    {
        id: "2",
        image: courseImg2,
        title: "Quick Excel Tricks",
        description: "Proposal indulged no do sociable he throwing settling.",
        category: "Micro Courses",
        studentImage: studentImg15,
        avatar: avatar2,
        name: "Billy Vasquez",
    },
    {
        id: "3",
        image: courseImg3,
        title: "Email Writing",
        description: "Proposal indulged no do sociable he throwing settling.",
        category: "Micro Courses",
        studentImage: studentImg16,
        avatar: avatar3,
        name: "Vasquez",
    },
    {
        id: "4",
        image: courseImg4,
        title: "Data Analysis Basics",
        description: "Proposal indulged no do sociable he throwing settling.",
        category: "Short Courses",
        studentImage: studentImg17,
        avatar: avatar4,
        name: "Valverde",
    },
    {
        id: "5",
        image: courseImg5,
        title: "Intro to Web Development",
        description: "Proposal indulged no do sociable he throwing settling.",
        category: "Short Courses",
        studentImage: studentImg18,
        avatar: avatar1,
        name: "Lucas Vasquez",
    },
    {
        id: "6",
        image: courseImg6,
        title: "Marketing Fundamentals",
        description: "Proposal indulged no do sociable he throwing settling.",
        category: "Short Courses",
        studentImage: studentImg19,
        avatar: avatar2,
        name: "Arnold",
    },
    {
        id: "7",
        image: courseImg7,
        title: "Full Stack Developer",
        description: "Proposal indulged no do sociable he throwing settling.",
        category: "Job Linked Tracks",
        studentImage: studentImg20,
        avatar: avatar3,
        name: "Sam Vasquez",
    },
    {
        id: "8",
        image: courseImg8,
        title: "Data Analyst Track",
        description: "Proposal indulged no do sociable he throwing settling.",
        category: "Job Linked Tracks",
        studentImage: studentImg21,
        avatar: avatar4,
        name: "Billy Vasquez",
    },
    {
        id: "9",
        image: courseImg9,
        title: "UI/UX Designer Track",
        description: "Proposal indulged no do sociable he throwing settling.",
        category: "Job Linked Tracks",
        studentImage: studentImg22,
        avatar: avatar1,
        name: "Billy Vasquez",
    },
    {
        id: "10",
        image: courseImg10,
        title: "AI & ML Bootcamp",
        description: "Proposal indulged no do sociable he throwing settling.",
        category: "Bootcamps",
        studentImage: studentImg22,
        avatar: avatar1,
        name: "Billy Vasquez",
    },
    {
        id: "11",
        image: courseImg11,
        title: "DevOps Bootcamp",
        description: "Proposal indulged no do sociable he throwing settling.",
        category: "Bootcamps",
        studentImage: studentImg22,
        avatar: avatar1,
        name: "Billy Vasquez",
    },
    {
        id: "12",
        image: courseImg12,
        title: "Cybersecurity Bootcamp",
        description: "Proposal indulged no do sociable he throwing settling.",
        category: "Bootcamps",
        studentImage: studentImg20,
        avatar: avatar1,
        name: "Billy Vasquez",
    },
    {
        id: "13",
        image: courseImg13,
        title: "Business Communication",
        description: "Proposal indulged no do sociable he throwing settling.",
        category: "Non-Tech Essentials",
        studentImage: studentImg18,
        avatar: avatar1,
        name: "Billy Vasquez",
    },
    {
        id: "14",
        image: courseImg14,
        title: "Leadership Basics",
        description: "Proposal indulged no do sociable he throwing settling.",
        category: "Non-Tech Essentials",
        studentImage: studentImg17,
        avatar: avatar1,
        name: "Billy Vasquez",
    },
    {
        id: "15",
        image: courseImg15,
        title: "Time Management",
        description: "Proposal indulged no do sociable he throwing settling.",
        category: "Non-Tech Essentials",
        studentImage: studentImg16,
        avatar: avatar1,
        name: "Billy Vasquez",
    },
];

export const tabData: TabDataType[] = [
    {
        tabdescription: "Bite-sized learning modules designed for quick upskilling in specific topics. Ideal for busy professionals and students looking to gain fast, focused knowledge.",
        category: "Micro Courses",
    },
    {
        tabdescription: "Compact courses that go deeper than micro courses. Perfect for learners looking to build a foundational skill set in 1-2 weeks.",
        category: "Short Courses",
    },
    {
        tabdescription: "Career-focused learning paths that include mentorship and job support. Designed to build real-world skills that lead to employment opportunities.",
        category: "Job Linked Tracks",
    },
    {
        tabdescription: "Intensive, cohort-based programs for serious learners. These are immersive experiences, ideal for career switchers and professionals looking to go deep.",
        category: "Bootcamps",
    },
    {
        tabdescription: "Equip yourself with essential life and soft skills applicable across any career. Suitable for both tech and non-tech professionals.",
        category: "Non-Tech Essentials",
    },
];

import expertImage1 from "@/assets/images/expert/expert.jpg";

export const allexpertsItems: expertTypes[] = [
    {
        id: "1",
        image: expertImage1,
        title: "Alex Morgan",
        designation: "Lead UX Designer at Acme Corp",
        experience: "8+ years",
        coursetitle: "Bootstrap",
        price: 100,
        rating: 4.5,
        status: "Online",
    },
    {
        id: "2",
        image: expertImage1,
        title: "Jamie Lee",
        designation: "Senior Data Engineer at DataWorks",
        experience: "8+ years",
        coursetitle: "Bootstrap",
        price: 100,
        rating: 4.5,
        status: "Upcoming",
    },
    {
        id: "3",
        image: expertImage1,
        title: "Ravi Patel",
        designation: "Cloud Architect at Nimbus",
        experience: "8+ years",
        coursetitle: "Bootstrap",
        price: 100,
        rating: 4.5,
        status: "Online",
    },
    {
        id: "4",
        image: expertImage1,
        title: "Kim Alvarez",
        designation: "Full-Stack Engineer at Innovo",
        experience: "8+ years",
        coursetitle: "Bootstrap",
        price: 100,
        rating: 4.5,
        status: "Online",
    },
];

export const testimonialData: TestimonialType[] = [
    {
        id: "301",
        courseId: "1",
        description: "Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen. At weddings believed laughing",
        role: "Backend developer at google",
    },
    {
        id: "302",
        courseId: "2",
        description: "Its enjoyment Moonlight newspaper up agreeable depending. Timed voice share led him to widen. At weddings believed laughing",
        role: "Backend developer at google",
    },
    {
        id: "303",
        courseId: "3",
        description: "Newspaper up its enjoyment agreeable depending. Timed voice share led him to widen. At weddings believed laughing",
        role: "Backend developer at google",
    },
    {
        id: "304",
        courseId: "4",
        description: "Newspaper up its enjoyment agreeable depending. Timed voice share led him to widen. At weddings believed laughing",
        role: "Backend developer at google",
    },
];

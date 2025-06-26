import HeroBanner from "@/components/banner/hero";
import HomeCategory from "@/components/category/CourseCategories";
import Courses from "@/components/courses/PopularCourse";
import Experts from "@/components/experts/expertsListing";
import LiveCourses from "@/components/courses/LiveCourses";
import InstructorShowcase from "@/components/courses/Instructorshow";
import ActionBox from "@/components/courses/ActionBox";
import LatestNews from "@/components/news/LatestNews";
import NewsLetter from "@/components/news/NewsLetter";
import Testimonial from "@/components/news/TestimonialSlider";
import BookClass from "@/components/courses/BookClass";
import LearnBox from "@/components/news/Earnbox";

export default function Home() {
    return (
        <>
            {/* Bannner */}
            <HeroBanner />
            {/* Section 1 */}
            <HomeCategory
                classname="bg-white"
                heading="What Sets E4Learn Apart from others?"
                subhead="Not just learning — we help you land careers."
                footheading="You Don’t Just “Finish a Course”"
                footsubhead="You Become a Confident, Hirable Professional."
            />
            {/* Section 2 */}
            <Courses classname="bluebg" heading="Explore Courses by Type" />
            {/* Section 3 */}
            <Experts heading="Learn from Verified Industry Experts" />
            {/* Live Courses */}
            <LiveCourses heading="Today's Top Free Live Courses" />
            {/* Instructor Slider */}
            <InstructorShowcase />
            {/* Section 6 */}
            <ActionBox />
            {/* Section 7 */}
            <LatestNews />
            {/* Section 8 */}
            <NewsLetter />
            {/* Section 9 */}
            <Testimonial />
            {/* Section 10 */}
            <BookClass />
            {/* Section 11 */}
            <LearnBox />
        </>
    );
}

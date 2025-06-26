"use client";
import { usePathname } from "next/navigation";
import Header from "./nav/TopNavigationBar";
import Footer from "./nav/Footer";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const authRoutes = ["/login", "/signup", "/forgotpassword", "/resetpassword"];
    const isAuthPage = authRoutes.includes(pathname);

    if (isAuthPage) {
        return <main>{children}</main>;
    }

    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer className="pt-5 bg-light" />
        </>
    );
}

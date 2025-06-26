import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Roboto } from "next/font/google";
import ConditionalLayout from "@/components/ConditionalLayout";
const AppProvidersWrapper = dynamic(() => import("@/components/wrappers/AppProvidersWrapper"));

import "@/assets/scss/style.scss";
import { NotificationProvider } from "@/context/useNotificationContext";

const roboto = Roboto({
    display: "swap",
    style: ["normal", "italic"],
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
    title: "New App",
    description: "Description here",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={roboto.className}>
            <body>
                <NotificationProvider>
                    <AppProvidersWrapper>
                        <ConditionalLayout>{children}</ConditionalLayout>
                    </AppProvidersWrapper>
                </NotificationProvider>
            </body>
        </html>
    );
}

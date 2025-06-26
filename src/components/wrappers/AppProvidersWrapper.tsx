"use client";
import type { ChildrenType } from "@/types/component-props";
import { Suspense, useEffect } from "react";
import dynamic from "next/dynamic";
import Aos from "aos";
import { NotificationProvider } from "@/context/useNotificationContext";
const LayoutProvider = dynamic(() => import("@/context/useLayoutContext").then((mod) => mod.LayoutProvider), { ssr: false });

const AppProvidersWrapper = ({ children }: ChildrenType) => {
    useEffect(() => {
        Aos.init();
        if (document) {
            const e = document.querySelector<HTMLDivElement>("#__next_splash");
            if (e?.hasChildNodes()) {
                document.querySelector("#splash-screen")?.classList.add("remove");
            }
            e?.addEventListener("DOMNodeInserted", () => {
                document.querySelector("#splash-screen")?.classList.add("remove");
            });
        }
    }, []);

    return (
        <LayoutProvider>
            <NotificationProvider>
                <Suspense>{children}</Suspense>
            </NotificationProvider>
        </LayoutProvider>
    );
};
export default AppProvidersWrapper;

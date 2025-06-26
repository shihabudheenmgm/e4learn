// "use client";
// import useToggle from "@/hooks/useToggle";
// import type { ChildrenType } from "@/types/component-props";
// import type { LayoutState, LayoutType } from "@/types/context";
// import { toggleDocumentAttribute } from "@/utils/layout";
// import { createContext, use, useMemo, useState } from "react";

// const ThemeContext = createContext<LayoutType | undefined>(undefined);

// const useLayoutContext = () => {
//     const context = use(ThemeContext);
//     if (!context) {
//         throw new Error("useLayoutContext can only be used within LayoutProvider");
//     }
//     return context;
// };

// const storageThemeKey = "";

// const themeKey = "data-bs-theme";

// const LayoutProvider = ({ children }: ChildrenType) => {
//     const getSavedTheme = (): LayoutState["theme"] => {
//         const foundTheme = localStorage.getItem(storageThemeKey);
//         const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
//         if (foundTheme) {
//             if (foundTheme === "auto") {
//                 toggleDocumentAttribute(themeKey, preferredTheme);
//                 return preferredTheme;
//             }
//             toggleDocumentAttribute(themeKey, foundTheme);
//             return foundTheme == "dark" ? "dark" : "light";
//         } else {
//             localStorage.setItem(storageThemeKey, preferredTheme);
//             return preferredTheme;
//         }
//     };

//     const INIT_STATE: LayoutState = {
//         theme: getSavedTheme(),
//     };

//     const [settings, setSettings] = useState<LayoutState>(INIT_STATE);

//     const { isTrue, toggle } = useToggle();

//     // update settings
//     const updateSettings = (_newSettings: Partial<LayoutState>) => setSettings({ ...settings, ..._newSettings });

//     // update theme mode
//     const changeTheme = (newTheme: LayoutState["theme"]) => {
//         const foundTheme = localStorage.getItem(themeKey);
//         if (foundTheme !== newTheme) {
//             toggleDocumentAttribute(themeKey, newTheme);
//             localStorage.setItem(storageThemeKey, newTheme);
//             updateSettings({ ...settings, theme: newTheme });
//         }
//     };

//     const appMenuControl: LayoutType["appMenuControl"] = {
//         open: isTrue,
//         toggle: toggle,
//     };
//     return (
//         <ThemeContext.Provider
//             value={useMemo(
//                 () => ({
//                     ...settings,
//                     theme: settings.theme,
//                     changeTheme,
//                     appMenuControl,
//                 }),
//                 [settings, isTrue]
//             )}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };

// export { LayoutProvider, useLayoutContext };
"use client";
import useToggle from "@/hooks/useToggle";
import type { ChildrenType } from "@/types/component-props";
import type { LayoutState, LayoutType } from "@/types/context";
import { toggleDocumentAttribute } from "@/utils/layout";
import { createContext, use, useMemo, useState } from "react";

const ThemeContext = createContext<LayoutType | undefined>(undefined);

const useLayoutContext = () => {
    const context = use(ThemeContext);
    if (!context) {
        throw new Error("useLayoutContext can only be used within LayoutProvider");
    }
    return context;
};

const storageThemeKey = "EDUPORT_THEME_KEY";
const themeKey = "data-bs-theme";

const LayoutProvider = ({ children }: ChildrenType) => {
    // Always return 'light' theme regardless of saved preferences or system preference
    const getSavedTheme = (): LayoutState["theme"] => {
        toggleDocumentAttribute(themeKey, "light");
        localStorage.setItem(storageThemeKey, "light");
        return "light";
    };

    const INIT_STATE: LayoutState = {
        theme: "light", // Force initial state to light
    };

    const [settings, setSettings] = useState<LayoutState>(INIT_STATE);

    const { isTrue, toggle } = useToggle();

    // update settings
    const updateSettings = (_newSettings: Partial<LayoutState>) => setSettings({ ...settings, ..._newSettings });

    // update theme mode - always set to light regardless of input
    const changeTheme = () => {
        toggleDocumentAttribute(themeKey, "light");
        localStorage.setItem(storageThemeKey, "light");
        updateSettings({ ...settings, theme: "light" });
    };

    const appMenuControl: LayoutType["appMenuControl"] = {
        open: isTrue,
        toggle: toggle,
    };

    return (
        <ThemeContext.Provider
            value={useMemo(
                () => ({
                    ...settings,
                    theme: "light", // Always return light theme
                    changeTheme, // Simplified changeTheme that only sets light theme
                    appMenuControl,
                }),
                [settings, isTrue]
            )}>
            {children}
        </ThemeContext.Provider>
    );
};

export { LayoutProvider, useLayoutContext };

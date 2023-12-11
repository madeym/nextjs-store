"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Navbar() {
    const OpenDropdown = (evt: any) => {
        let dropdownContainer = document.getElementsByClassName("dropdown-container")[0];
        dropdownContainer.classList.contains("dropdown-active") ? dropdownContainer.classList.remove("dropdown-active") : dropdownContainer.classList.add("dropdown-active");
    }

    useEffect(() => {
        // set theme
        if (localStorage.getItem("Theme") == null) {
            ChangeThemeMode("Light");
        } else {
            ChangeThemeMode(localStorage.getItem("Theme"));
        }
    }, []);

    const ChangeThemeMode = (theme: string | null) => {
        if (theme == "Light" || theme == null) {
            localStorage.setItem("Theme", "Light");
            document.documentElement.classList.remove("dark");
        } else {
            localStorage.setItem("Theme", "Dark");
            document.documentElement.classList.add("dark");
        }
    }

    const ScrollToSection = (section: string) => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <nav className="flex py-4 px-[150px] items-center justify-between text-[24px] text-gray-600">
            <div className="left-nav flex gap-4 items-center">
                <h2 className="text-[30px] font-semibold">Store</h2>
            </div>
            <div className="flex gap-[50px] items-center">
                <span onClick={() => ScrollToSection("NewReleaseSection")} className="text-[30px] font-semibold cursor-pointer">New Release</span>
                <span onClick={() => ScrollToSection("ProductSection")} className="text-[30px] font-semibold cursor-pointer">Product</span>
                <div className="flex gap-2">
                    <button onClick={() => ChangeThemeMode("Dark")} type="button" className="hs-dark-mode-active:hidden hs-dark-mode group flex items-center hover:text-blue-600 font-medium  dark:hover:text-gray-500" data-hs-theme-click-value="dark">
                        <svg className="flex-shrink-0 w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
                    </button>
                    <button onClick={() => ChangeThemeMode("Light")} type="button" className="hs-dark-mode-active:block hs-dark-mode group flex items-center hover:text-blue-600 font-medium  dark:hover:text-gray-500" data-hs-theme-click-value="light">
                        <svg className="flex-shrink-0 w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 8a2 2 0 1 0 4 4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                    </button>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-[30px] font-semibold">EN</span>
                    <i className="!text-[30px] bi bi-globe-americas"></i>
                </div>
            </div>
        </nav>
    )
}
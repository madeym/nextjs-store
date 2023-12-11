"use client";

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
        <nav className="flex py-4 px-4 lg:px-20 items-center justify-between text-[18px] lg:text-[24px] text-gray-600">
            <div className="left-nav flex gap-4 items-center">
                <h2 className="text-[30px] font-semibold">Store</h2>
                <div className="flex items-center relative w-100">
                    <input type="text" placeholder="Search ..." className="w-full text-[12px] md:text-[18px] lg:text-[24px] border-2 rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2 px-4" />
                    <i className="bi bi-search absolute end-4 text-gray-400 text-[12px] md:text-[18px] lg:text-[24px] cursor-pointer hover:scale-105"></i>
                </div>
            </div>
            <div className="flex gap-4 lg:gap-[50px] items-center">
                <span onClick={() => ScrollToSection("NewReleaseSection")} className="hidden md:block font-semibold cursor-pointer">New Release</span>
                <span onClick={() => ScrollToSection("ProductSection")} className="hidden md:block font-semibold cursor-pointer">Product</span>
                <div className="flex gap-2">
                    <button onClick={() => ChangeThemeMode("Dark")} type="button" className="hs-dark-mode-active:hidden hs-dark-mode group flex items-center hover:text-blue-600 font-medium  dark:hover:text-gray-500" data-hs-theme-click-value="dark">
                        <svg className="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
                    </button>
                    {/* <button onClick={() => ChangeThemeMode("Light")} type="button" className="hs-dark-mode-active:block hs-dark-mode group flex items-center hover:text-blue-600 font-medium  dark:hover:text-gray-500" data-hs-theme-click-value="light">
                        <svg className="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 8a2 2 0 1 0 4 4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                    </button> */}
                </div>
                <div className="flex items-center gap-4">
                    <span className=" font-semibold">EN</span>
                    <i className="bi bi-globe-americas"></i>
                </div>
                <div className="md:hidden">
                    <i className="bi bi-list"></i>
                </div>
            </div>
        </nav>
    )
}
"use client";
import React from "react";
import { FloatingNav } from "@/Components/ui/floating-navbar";

export function NavbarMain() {
    const navItems = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "#about-section",
        },
        {
            name: "Skills",
            link: "#skills-section",
        },
        {
            name: "Experience",
            link: "#exp-section",
        },
        {
            name: "Project",
            link: "#projects-section",
        },
    ];
    return (
        <div className="relative  w-full">
            <FloatingNav navItems={navItems} />
        </div>
    );
}


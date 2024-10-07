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
            link: "/about",
        },
        {
            name: "Skills",
            link: "/skills",
        },
        {
            name: "Experience",
            link: "/exp",
        },
        {
            name: "Project",
            link: "/project",
        },
    ];
    return (
        <div className="relative  w-full">
            <FloatingNav navItems={navItems} />
        </div>
    );
}


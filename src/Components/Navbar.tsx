"use client";
import React from "react";
import { FloatingNav } from "@/Components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export function NavbarMain() {
    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: <IconHome className="h-4 w-4 text-white" />
        },
        {
            name: "About",
            link: "#about-section",
            icon: <IconUser className="h-4 w-4 text-white" />,
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


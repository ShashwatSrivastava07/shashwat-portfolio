"use client";
import React from "react";
import { FloatingNav } from "@/Components/ui/floating-navbar";
import { IconHome, IconUser, IconCode,IconBriefcaseFilled,IconApps } from "@tabler/icons-react";

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
            icon: <IconCode className="h-4 w-4 text-white" />,
        },
        {
            name: "Experience",
            link: "#exp-section",
            icon: <IconBriefcaseFilled className="h-4 w-4 text-white" />,
        },
        {
            name: "Project",
            link: "#projects-section",
            icon: <IconApps className="h-4 w-4 text-white" />,
        },
    ];
    return (
        <div className="relative  w-full">
            <FloatingNav navItems={navItems} />
        </div>
    );
}


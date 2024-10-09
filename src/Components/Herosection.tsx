import React from "react";
import { FlipWords } from "../Components/ui/flip-words";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

export function HeroSection() {

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  }

    const words = ["Shashwat Srivastava", "Frontend Developer", "UI Specialist", "Creative Coder"];

    return (
      <>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="absolute w-16 h-16">
          <span className="w-16 h-16 bg-orange-600"></span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="h-[40rem] sm:h-[30rem] md:h-[50rem] flex-grow-0 flex justify-center items-center px-4">
            <div className="text-[40px] md:text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 leading-snug">
              I&#39;m
              <FlipWords words={words} /> <br />
              dedicated to crafting engaging web experiences.
            </div>
          </div>
          <Button onClick={scrollToProjects}
            borderRadius="1.75rem"
            className="bg-transparent text-white dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Projects
          </Button>
        </div>
        <div className="flex justify-center items-center tb:hidden">
          <div className="relative w-6 h-10 border-2 border-slate-50 opacity-75	rounded-3xl flex justify-center items-center translate-y-[-45px]">
            <span className="w-1 h-1 bg-white rounded-full absolute top-2 animate-scroll"></span>
          </div>
        </div>
      </>
    );
  }

"use client";
import React from "react";
import HeadingGrade from "./HeadingGrade";

function About() {
  return (
    <>
      <HeadingGrade headingTxt="About Me" />

      <div className="flex flex-col justify-center items-center gap-8 pb-10">
        <div className="py-5 px-48 w-full">
          <p className="leading-relaxed text-xl font-light text-[#fff]">
            Hi, I&#39;m{" "}
            <span className="font-bold text-sky-500">
              Shashwat Srivastava, a Frontend Developer
            </span>{" "}
            with over 2 years of hands-on experience in creating dynamic,
            user-centric web applications. My expertise lies in utilizing modern
            technologies like ReactJS, Tailwind CSS, and Aceternity UI to build
            seamless, engaging digital experiences that enhance user interaction.
          </p>
          <br />
          <p className="leading-relaxed text-xl font-light text-[#fff]">
            I am passionate about transforming complex ideas into beautiful,
            responsive interfaces. With a strong foundation in HTML, CSS,
            JavaScript, and frameworks like Angular and Bootstrap, I thrive on
            designing web applications that not only look great but also deliver
            an exceptional user experience. Constantly driven by curiosity, I
            keep myself updated on the latest trends in UI/UX design and explore
            innovative ways to improve web performance and accessibility. My
            approach is centered around writing clean, scalable code and
            collaborating effectively to solve complex challenges through
            technology.
          </p>
        </div>
        <button className="w-32 border font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full text-xl">
          <span>Contact</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
      </div>
    </>
  );
}

export default About;

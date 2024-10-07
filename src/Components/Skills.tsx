import React from 'react'
import HeadingGrade from './HeadingGrade'
import CompareSec from './CompareSec'
import Image from 'next/image';

import HTML from '../../Public/Assets/skill-img/html5.png'
import CSS from '../../public/Assets/skill-img/css.webp';
import JS from '../../public/Assets/skill-img/js.png';
import jQuery from '../../public/Assets/skill-img/jquery.png';
import ReactImg from '../../public/Assets/skill-img/react.webp';
import SCSS from '../../public/Assets/skill-img/scss.png';
import Bootstrap from '../../public/Assets/skill-img/boot.webp';
import Jira from '../../public/Assets/skill-img/jira.webp';
import TailwindCSS from '../../public/Assets/skill-img/tailwinf.webp';
import { div } from 'framer-motion/client';

const skills = [
  { src: HTML, alt: 'HTML5', label: 'HTML5' },
  { src: CSS, alt: 'CSS3', label: 'CSS3' },
  { src: JS, alt: 'JavaScript', label: 'JavaScript' },
  { src: jQuery, alt: 'jQuery', label: 'jQuery' },
  { src: ReactImg, alt: 'React', label: 'React' },
  { src: SCSS, alt: 'SCSS', label: 'SCSS' },
  { src: Bootstrap, alt: 'Bootstrap', label: 'Bootstrap' },
  { src: Jira, alt: 'Jira', label: 'Jira' },
  { src: TailwindCSS, alt: 'Tailwind CSS', label: 'Tailwind CSS' },
];

function Skills() {
  return (
    <>
      <div>
        <HeadingGrade headingTxt="My Stack" />
      </div>
      <div className='px-48 mt-8 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 grid-auto-rows-min grid-template-columns-[repeat(3,minmax(200px,1fr))] grid-template-rows-[repeat(2,min-content)]'>
        {skills.map((skill, index) => (
          <div className='backdrop-blur max-w-[900px] p-6'>
            <div key={index} className="flex flex-col items-center justify-center bg-white rounded-3xl p-6 h-full">
              <Image
                src={skill.src}
                alt={skill.alt}
                width={100}
                height={150}
                className="mb-2"
              />
              <p className="text-center text-black bold font-semibold text-2xl">{skill.label}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col justify-center items-center gap-8 pb-1'>
        <button className="w-44 border font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full text-lg">
          <span>View My Resume</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
      </div>
      <div className='px-48 mt-8 pb-8 flex justify-center'>
        <CompareSec />
      </div>

    </>
  )
}

export default Skills
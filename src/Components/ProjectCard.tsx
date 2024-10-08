import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'

interface ProjectCardProps {
    title: string;
    projectName: string;
    imageSrc: StaticImageData;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, projectName, imageSrc, link }) => {
    return (
        <div>
            <div className='flex flex-col p-6 bg-black h-full justify-between rounded-lg border border-white shadow-[10px_10px_0px_0px_rgba(255,255,255,1)]'>
                <a href={link} className="overflow-hidden rounded-lg">
                    <Image
                        src={imageSrc}
                        alt={`${projectName} image`}
                        className="h-72 w-full max-w-full cursor-pointer overflow-hidden rounded-lg hover:scale-110 transition-all ease-in"
                    />
                </a>
                <div className='flex flex-col gap-2 my-3 justify-start w-full'>
                    <p className='text-[#0EA5E9] font-bold'>{title}</p>
                    <h3 className='text-3xl text-[#F5F5F5] leading-9 cursor-pointer font-semibold underline-offset-2 hover:underline'>{projectName}</h3>
                    <a href={link} className='text-lg cursor-pointer font-semibold underline-offset-2 underline'>Visit</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;

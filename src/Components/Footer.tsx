import React from 'react'

import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Footer() {
    return (
        <>

            <div className='border-t border-t-[#191919] shadow-xl px-48 py-28'>
                <div className='flex justify-between pb-16 border-b border-b-[#18181B]'>
                    <div className='max-w-[30rem] flex flex-col gap-3'>
                        <h2 className="uppercase font-bold text-xl text-white">
                            Shashwat Srivastava
                        </h2>

                        <p className='text-sm'>A passionate Frontend Developer crafting seamless and engaging user experiences for websites and web applications,
                            focused on delivering exceptional results.</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h2 className='className="uppercase font-bold text-xl text-white"'>Social</h2>
                        <div className='flex gap-3 items-center'>
                            <a href="https://www.linkedin.com/in/shashwat-srivastava-6b8191137/" target='_blank'><FaLinkedin className="w-[30px] h-[30px] cursor-pointer" /></a>
                            <a><FaInstagramSquare className="w-[30px] h-[30px] cursor-pointer" /></a>
                            <a href="https://github.com/ShashwatSrivastava07" target='_blank'><FaGithub className="w-[30px] h-[30px] cursor-pointer" /></a>
                        </div>
                    </div>
                </div>
                <div className='pt-10'>
                    <p className="text-center text-[#e1e6f0] text-sm">
                        &copy; Copyright 2024. Made by Shashwat Srivastava
                    </p>
                </div>
            </div>

        </>
    )
}

export default Footer
"use client"
import About from '@/Components/About'
import Exp from '@/Components/Exp';
import { HeroSection } from '@/Components/Herosection'
import Project from '@/Components/Project';
import Skills from '@/Components/Skills';
import React, { useEffect } from 'react'

function page() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>

      <div className='bg-black text-white h-screen'>
        <HeroSection />
        <About />
        <Skills />
        <Exp />
        <Project />
      </div>

    </>
  )
}

export default page
"use client"
import About from '@/Components/About'
import Contact from '@/Components/Contact';
import Exp from '@/Components/Exp';
import Footer from '@/Components/Footer';
import { HeroSection } from '@/Components/Herosection'
import Project from '@/Components/Project';
import Skills from '@/Components/Skills';
import React, { useEffect } from 'react'

function Page() {
  
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
        <Contact />
        <Footer />
      </div>

    </>
  )
}

export default Page
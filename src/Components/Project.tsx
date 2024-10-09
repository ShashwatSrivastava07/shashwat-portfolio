import React from 'react'
import { ProjectLamp } from './ProjectLamp'
import ProjectCard from './ProjectCard'

import perso from '/Public/Assets/personal/perso-img-1.png'
import perso2 from '/Public/Assets/personal/perso-img-2.png'
import perso3 from '/Public/Assets/personal/perso-img-3.png'
import mac from '/Public/Assets/macpage.png'

function Project() {
  return (
    <>

      <div id="projects-section" className='bg-[#030616]'>

        <ProjectLamp />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 py-5 px-12 md:px-48 pb-44 -translate-y-8'>
          <ProjectCard
            title="Website"
            projectName="Macbook ThreeJS"
            imageSrc={mac}
            link="https://shashwat-macbook-react.netlify.app/"
          />
          <ProjectCard
            title="Website Clone"
            projectName="Ochi Design"
            imageSrc={perso2}
            link="https://shashwat-ochi.netlify.app/"
          />
          <ProjectCard
            title="Website Clone"
            projectName="Tindog ( Tinder for Dogs )"
            imageSrc={perso3}
            link="https://incredible-pithivier-704272.netlify.app/"
          />
          <ProjectCard
            title="Website"
            projectName="Nuflix Movie App"
            imageSrc={perso}
            link="https://shashwat-nuflix-movie.netlify.app/"
          />
        </div>

      </div>

    </>
  )
}

export default Project

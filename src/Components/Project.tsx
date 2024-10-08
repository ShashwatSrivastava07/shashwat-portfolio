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

      <div className='bg-[#030616]'>

        <ProjectLamp />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-24 px-4 md:px-40 pb-44'>
          <ProjectCard
            title="Website"
            projectName="Macbook ThreeJS"
            imageSrc={mac}
            link="https://example.com"
          />
          <ProjectCard
            title="Website Clone"
            projectName="Ochi Design"
            imageSrc={perso2}
            link="https://example.com"
          />
          <ProjectCard
            title="Website Clone"
            projectName="Tindog ( Tinder for Dogs )"
            imageSrc={perso3}
            link="https://example.com"
          />
          <ProjectCard
            title="Website"
            projectName="Nuflix Movie App"
            imageSrc={perso}
            link="https://example.com"
          />
        </div>

      </div>

    </>
  )
}

export default Project
import React from 'react'
import ProjectCard from '../sub/ProjectCard';

const Projects = () => {
    return (
   <div className='flex flex-col items-center justify-center py-20'>
    <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard 
            src='/NextWebsite.png'
            title='Modern Next.js Portfolio'
            description="Made using Javascript, TailwindCSS and React.JS"
            />


            <ProjectCard 
            src='/Chess.png'
            title='Interactive Website Cards'
            description="Chess game built with Python and deployed in Azure Cloud using APIs"
            />


            <ProjectCard 
            src='/SpaceWebsite.png'
            title='Space Themed Website'
            description="Made using Javascript, TailwindCSS and React.JS"
            />
        </div>
    </div>

    )
} 


export default Projects

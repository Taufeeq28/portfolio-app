"use client";
import { projectsData } from '@/utils/data/projects-data';
import { useState } from 'react';
import ProjectCard from './project-card';
//import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projectsToDisplay = showAll ? projectsData : projectsData.slice(0, 3);
  return (
    <div id='projects' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#ffbe28] to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#535353]"></span>
          <span className="bg-[#535353] w-fit text-white p-2 px-5 text-xl rounded-md">
            Projects
          </span>
          <span className="w-24 h-[2px] bg-[#535353]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
      {projectsToDisplay.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <div className="flex justify-center mt-5 lg:mt-12">
      <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-yellow-800 to-grey-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
        >
          <span>{showAll ? 'Show Less' : 'View More Projects'}</span>
          <FaArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Projects;

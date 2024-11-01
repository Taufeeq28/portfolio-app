// @flow strict
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import GlowCard from '../../lottiehelper/glow-card';  // Adjust path as necessary

function ProjectCard({ project }) {
  return (
    <GlowCard identifier={`project-${project.id}`}>
      <div className="p-3 relative text-white">
        <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
          <Image
            src={project.image}
            height={1080}
            width={1920}
            alt=""
            className='h-full w-full group-hover:scale-110 transition-all duration-300'
          />
        </div>
        <div className="flex flex-col">
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-yellow-600'>
            {project.name}
          </p>
          <p className='mb-2 text-sm text-[#9b9b9b]'>
            {project.tools.join(', ')}
          </p>
          <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
            {project.description}
          </p>
          <div className="flex space-x-4 mt-4">
            {project.demo && (
              <Link href={project.demo} target='_blank' className='flex items-center text-[#e09e3c] hover:text-white'>
                <FaExternalLinkAlt className='inline mr-1' /> Demo
              </Link>
            )}
            {project.code && (
              <Link href={project.code} target='_blank' className='flex items-center text-[#e09e3c] hover:text-white'>
                <FaGithub className='inline mr-1' /> GitHub
              </Link>
            )}
          </div>
          {project.url && (
            <Link href={project.url} target='_blank' className='bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs hover:bg-violet-600 transition duration-300 mt-4'>
              More Info
            </Link>
          )}
        </div>
      </div>
    </GlowCard>
  );
};

export default ProjectCard;

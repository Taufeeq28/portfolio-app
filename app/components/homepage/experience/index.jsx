"use client";
import React, { useState } from 'react';
import { experiences } from "@/utils/data/experience";


function Experience() {
  const [activeTab, setActiveTab] = useState(experiences[0].id); // Initializes the state to the first experience

  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#565656]">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#4b4b4b]"></span>
          <span className="bg-[#343434] w-fit text-white p-2 px-5 text-xl rounded-md">
            where Ive worked
          </span>
          <span className="w-24 h-[2px] bg-[#4b4b4b]"></span>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/8 border-r border-gray-300">
          <ul>
            {experiences.map((exp) => (
              <li key={exp.id} className={`p-4 ${activeTab === exp.id ? 'bg-[#4b4b4b]' : 'hover:bg-[#4b4b4b]'}`}
                  onClick={() => setActiveTab(exp.id)}>
                <a className="cursor-pointer font-bold">{exp.company}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/3 p-4">
          {experiences.filter(exp => exp.id === activeTab).map((experience) => (
            <div key={experience.id}>
              
              <div className="flex items-center gap-x-8 px-3 py-5">
                {/* <div className="text-[#e0a64f] transition-all duration-400 hover:scale-125">
                  <BsPersonWorkspace size={36} />
                </div> */}
                <div>
                  <p className="text-base sm:text-xl mb-2 font-medium uppercase text-[#e09e3c]">
                    {experience.title}
                  </p>
                  <div className="flex justify-left mb-4">
                <p className="text-xs sm:text-sm text-[#525252]">
                  {experience.duration}
                </p>
              </div>
                  <p className="text-sm sm:text-base">
                    {experience.description.join('. ')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;


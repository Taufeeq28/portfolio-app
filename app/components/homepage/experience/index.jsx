"use client";
import React, { useState } from 'react';
import { experiences } from "@/utils/data/experience";

function Experience() {
  const [activeTab, setActiveTab] = useState(experiences[0].id); // Initializes the state to the first experience

  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#565656]">
      {/* Header */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#4b4b4b]"></span>
          <span className="bg-[#343434] w-fit text-white p-2 px-5 text-xl rounded-md">
            Where Ive Worked
          </span>
          <span className="w-24 h-[2px] bg-[#4b4b4b]"></span>
        </div>
      </div>

      {/* Desktop Layout for Tabs and Content */}
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Tabs Section */}
        <div className="w-full lg:w-1/4 border-b lg:border-b-0 lg:border-r border-gray-500">
          <ul className="flex lg:flex-col w-full">
            {experiences.map((exp) => (
              <li 
                key={exp.id} 
                className={`p-4 text-left lg:text-left cursor-pointer font-bold transition-colors duration-300 ${activeTab === exp.id ? 'bg-[#4b4b4b] text-white' : 'hover:bg-[#4b4b4b] hover:text-white text-gray-400'}`}
                onClick={() => setActiveTab(exp.id)}
              >
                {exp.company}
              </li>
            ))}
          </ul>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-3/4 p-6">
          {experiences.filter(exp => exp.id === activeTab).map((experience) => (
            <div key={experience.id}>
              <h3 className="text-2xl font-bold text-[#e09e3c] mb-2">
                {experience.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {experience.duration}
              </p>
              <p className="text-lg text-white leading-relaxed">
                {experience.description.join('. ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;

// @flow strict

import Image from "next/image";
import { personalData } from "@/utils/data/personal-data";

function AboutSection() {
  return (
    <div id="about" className="my-8 lg:my-12 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-12 -left-8">
        <span className="bg-[#343434] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#343434]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-center order-1">
          <Image
            src={personalData.profile}
            width={250} // Smaller width
            height={180} // Smaller height
            alt="Taufeeq Ahmed"
            className="rounded-lg transition-all duration-500 grayscale hover:grayscale-0 transform hover:scale-105 cursor-pointer"
          />
        </div>
        {/* Text Section */}
        <div className="order-2 lg:order-2 text-center lg:text-left">
          <p className="font-medium mb-5 text-[#e09e3c] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg leading-relaxed">
            {personalData.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode, SiHackerrank } from "react-icons/si"; // Import HackerRank icon
import Image from "next/image";

function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-[80vh] py-4">
      <Image
        src="/sectionN1.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem] mb-6">
          Hello, <br />
          This is <span className="text-[#898989]">{personalData.name}</span>
          {` , I'm a Professional `}
          <span className="text-[#e09e3c]">{personalData.designation}</span>.
        </h1>

        <div className="flex justify-center gap-5 mb-8">
          <Link href={personalData.github} target="_blank" className="transition-all text-[#898989] hover:scale-125 duration-300">
            <BsGithub size={30} />
          </Link>
          <Link href={personalData.linkedIn} target="_blank" className="transition-all text-[#898989] hover:scale-125 duration-300">
            <BsLinkedin size={30} />
          </Link>
          <Link href={personalData.leetcode} target="_blank" className="transition-all text-[#898989] hover:scale-125 duration-300">
            <SiLeetcode size={30} />
          </Link>
          <Link href={personalData.hackerrank} target="_blank" className="transition-all text-[#898989] hover:scale-125 duration-300">
            <SiHackerrank size={30} />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link href="#contact" className="bg-gradient-to-r to-[#898989] from-[#e09e3c] p-[1px] rounded-full transition-all duration-300 hover:from-[#898989] hover:to-[#e09e3c]">
            <button className="px-6 py-3 bg-[#000000] rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider text-white transition-all duration-200 ease-out flex items-center gap-2 hover:scale-105">
              Contact Me <RiContactsFill size={16} />
            </button>
          </Link>
          <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r to-[#000000] from-[#e09e3c] px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}>
              <span>Get Resume</span>
              <MdDownload size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

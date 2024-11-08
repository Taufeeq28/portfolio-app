// @flow strict
import Image from "next/image";
import { educations } from "@/utils/data/educations";
import GlowCard from "../../lottiehelper/glow-card";

function Education() {
  return (
    <div id="education" className="education relative z-50 border-t my-12 lg:my-24 border-[#575757]" style={{
      position: 'relative',
      padding: '45px 0 15px 0'
    }}>
      <Image
        src="/sectionN1.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-12 md:w-24 h-[2px] bg-[#343434]"></span>
          <span className="bg-[#343434] w-fit text-white p-2 px-5 text-lg md:text-xl rounded-md">
            Education
          </span>
          <span className="w-12 md:w-24 h-[2px] bg-[#343434]"></span>
        </div>
      </div>

      <div className="timeline relative w-full">
        {/* Desktop timeline line */}
        <div className="hidden md:block absolute w-[2px] bg-[#efab23] top-0 bottom-0 left-1/2 -ml-[1px]"></div>
        
        {/* Mobile timeline line */}
        <div className="md:hidden absolute w-[2px] bg-[#efab23] top-0 bottom-0 left-[20px]"></div>

        {educations.map((education, index) => (
          <div 
            key={education.id}
            className={`
              timeline-item relative mb-[30px]
              w-full pl-[60px]
              md:w-1/2 md:pl-0
              ${index % 2 === 0 
                ? 'md:left-0 md:pr-[30px]' 
                : 'md:left-1/2 md:pl-[30px]'
              }
            `}
          >
            {/* Date indicator */}
            <div className={`
              absolute z-[1] text-[#efab23] font-semibold uppercase tracking-wider
              top-0 left-[60px]
              md:top-[44px] md:w-full
              ${index % 2 === 0 
                ? 'md:left-[calc(100%+55px)] md:text-left' 
                : 'md:right-[calc(100%+55px)] md:text-right md:left-auto'
              }
            `}>
              {education.duration}
            </div>

            <GlowCard identifier={`education-${education.id}`}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6 bg-opacity-10 bg-white relative">
                {/* Text content */}
                <div className="flex-grow">
                  <h2 className="text-lg md:text-2xl font-semibold mb-2">
                    {education.institution}
                  </h2>
                  <h4 className="text-sm md:text-base italic font-normal mb-2">
                    {education.title}
                  </h4>
                </div>

                {/* Education Image */}
                <div className="flex-shrink-0">
                  <Image 
                    src={education.imageSrc}
                    alt={education.institution}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>

                {/* Border styling */}
                <div className={`
                  hidden md:block absolute inset-y-0 w-[5px] bg-[#dddddd]
                  ${index % 2 === 0 ? 'right-0' : 'left-0'}
                `} />
              </div>
            </GlowCard>

            {/* Timeline dot */}
            <div className={`
  absolute w-4 h-4 bg-white border-2 border-[#efab23] rounded-full z-10
  top-[48px] left-[13px]
  md:top-[44px] md:left-auto
  ${index % 2 === 0 
    ? 'md:right-[-10px] md:left-auto' 
    : 'md:left-[-10px]'
  }
`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
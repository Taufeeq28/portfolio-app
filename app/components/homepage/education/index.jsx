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
          <span className="w-24 h-[2px] bg-[#343434]"></span>
          <span className="bg-[#343434] w-fit text-white p-2 px-5 text-xl rounded-md">
            Education
          </span>
          <span className="w-24 h-[2px] bg-[#343434]"></span>
        </div>
      </div>

      <div className="timeline" style={{ position: 'relative', width: '100%' }}>
        <div style={{
          content: "''",
          position: 'absolute',
          width: '2px',
          background: '#efab23',
          top: 0,
          bottom: 0,
          left: '50%',
          marginLeft: '-1px'
        }}></div>
        
        {educations.map((education, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={education.id} style={{
            position: 'relative',
            background: 'inherit',
            width: '50%',
            marginBottom: '30px',
            left: index % 2 === 0 ? '0' : '50%',
            paddingRight: index % 2 === 0 ? '30px' : '0',
            paddingLeft: index % 2 === 0 ? '0' : '30px'
          }}>
            <div className="timeline-date" style={{
              position: 'absolute',
              width: '100%',
              top: '44px',
              fontSize: '16px',
              fontWeight: '600',
              color: '#efab23',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              zIndex: 1,
              textAlign: index % 2 === 0 ? 'left' : 'right',
              [index % 2 === 0 ? 'left' : 'right']: 'calc(100% + 55px)'
            }}>
              {education.duration}
            </div>
            
            <GlowCard identifier={`education-${education.id}`}>
              <div className="timeline-text" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '30px',
                background: 'rgba(255, 255, 255, 0.1)', // Transparent background
                position: 'relative',
                borderRight: index % 2 === 0 ? '5px solid #dddddd' : 'none',
                borderLeft: index % 2 !== 0 ? '5px solid #dddddd' : 'none',
                boxShadow: '0 0 60px rgba(0, 0, 0, .08)',
              }}>
                {/* Text content */}
                <div style={{ textAlign: 'left', flexGrow: 1 }}>
                  <h2 style={{ margin: '0 0 5px 0', fontSize: '22px', fontWeight: '600' }}>
                    {education.institution}
                  </h2>
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', fontStyle: 'italic', fontWeight: '400' }}>
                    {education.title}
                  </h4>
                  <p style={{ margin: '0', fontSize: '16px' }}>
                    {education.description}
                  </p>
                </div>

                {/* Education Image on the right */}
                <div style={{ marginLeft: '15px' }}>
                  <Image 
                    src={education.imageSrc} // Assumes educations have an imageSrc property
                    alt={education.institution}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>

                {/* Arrow element */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  ...(index % 2 === 0 ? { 
                    right: '-15px', 
                    borderLeft: '10px solid rgba(255, 255, 255, 0.1)',
                    borderTop: '10px solid transparent',
                    borderBottom: '10px solid transparent'
                  } : { 
                    left: '-15px', 
                    borderRight: '10px solid rgba(255, 255, 255, 0.1)',
                    borderTop: '10px solid transparent',
                    borderBottom: '10px solid transparent'
                  })
                }}></div>
              </div>
            </GlowCard>
            
            <div style={{
              content: "''",
              position: 'absolute',
              width: '16px',
              height: '16px',
              top: '48px',
              right: index % 2 === 0 ? '-8px' : 'auto',
              left: index % 2 !== 0 ? '-8px' : 'auto',
              background: '#ffffff',
              border: '2px solid #efab23',
              borderRadius: '16px',
              zIndex: 1
            }}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;

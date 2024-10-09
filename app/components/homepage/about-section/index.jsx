// @flow strict


import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -left-8">
        <span className="bg-[#343434] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#343434]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
      <div className="flex justify-center order-1 lg:order-1">
          <Image
            src="/pic.jpg"
            width={280}
            height={280}
            alt="Taufeeq Ahmed"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
        <div className="order-2 lg:order-2">
          <p className="font-medium mb-5 text-[#e09e3c] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
          {`My name is Taufeeq. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. 
I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.`}
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default AboutSection;
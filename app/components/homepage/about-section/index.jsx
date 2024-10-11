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
            width={380}
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
          {`My name is Taufeeq, and I am a skilled full-stack developer with a focus on building dynamic web applications using React, .NET Core MVC, WebAPI, and PostgreSQL. I thrive in creating efficient, scalable solutions, and I have a strong foundation in both frontend and backend development. Beyond full-stack development, I am deeply involved in the field of artificial intelligence, specializing in Deep Learning, Neural Networks (ANN, RNN, LSTM), and Natural Language Processing with tools like Transformers, LangChain, and Hugging Face. I work extensively with Generative AI, exploring areas such as vector databases (FAISS, ChromaDB) and advanced LLMs like Llama3 and Gemma2. Additionally, I have experience deploying AI solutions on AWS, Azure, and Lamini AI Cloud, utilizing services like AWS SageMaker, Bedrock, and Lambda. My passion for innovation drives me to continuously learn and explore technologies like multi-AI agents, Langraph, and other AI orchestration tools.`}
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default AboutSection;
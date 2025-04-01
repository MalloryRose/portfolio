"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Software Skills",
    id: "software_skills",
    content: (
      <div className="grid grid-cols-3 gap-4">
      <ul className="list-disc pl-4">
        <li>C++</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Java</li>
        <li>Kotlin</li>
        <li>HTML/CSS</li>
        <li>SQL</li>
        <li>React.js</li>
        <li>React Native</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Next.js</li>
      </ul>
      <ul className="list-disc pl-4">
        <li>MongoDB</li>
        <li>PostgreSQL</li>
        <li>SQLDelight</li>
        <li>Git</li>
        <li>REST API</li>
        <li>Docker</li>
        <li>AWS</li>
        <li>Linux</li>
        <li>Agile</li>
        <li>Google Maps API</li>
        <li>Canvas LMS API</li>
        <li>NumPy</li>
        <li>Pandas</li>
      </ul>
      <ul className="list-disc pl-4">
        <li>TensorFlow</li>
        <li>Matplotlib</li>
        <li>Scikit-learn</li>
        <li>Bootstrap</li>
        <li>TailwindCSS</li>
        <li>Quartus Prime</li>
        <li>Atmel Studio</li>
        <li>VS Code</li>
        <li>Android Studio</li>
        <li>Gradle</li>
        <li>Bluetooth Integration</li>
        <li>FastAPI</li>
        <li>.NET</li>
        <li>QTCreator</li>
      </ul>
    </div>
    ),
  },

  {
    title: "Hardware Skills",
    id: "hardware_skills",
    content: (
      <ul className="list-disc pl-2">
        <li>ATxmega128A1U Microcontroller</li>
        <li>FPGA</li>
        <li>Inertial Measurement Unit (IMU)</li>
        <li>Soldering</li>
        <li>Oscilloscope</li>
        <li>Multimeter</li>
        <li>UART</li>
        <li>SPI</li>
        <li>DMA</li>
        <li>DAC</li>
        <li>BIOS/UEFI</li>
        <li>ARM Architecture</li>
        <li>x86 Architecture</li>
        <li>QEMU</li>
        <li>I2C</li>
        <li>VHDL</li>
        <li>Embedded C</li>
        <li>Assembly</li>
        <li>RTOS</li>
      </ul>
    ),
  },


  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Florida: Bachelor of Science in Computer Engineering</li>
        <li>Minor in Business Administration</li>
       
      </ul>
    ),
  },


  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
        Microsoft Technology Associate: Database Administration Fundamentals (MTA)</li>
        <li>Certified SOLIDWORKS Associate</li>
 
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("software_skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a fourth-year Computer Engineering student at the University of Florida, with a passion for 
          understanding how technology works. From a young age, I was fascinated by how everyday objects like cell phones 
          enable communication over long distances. While I’ve always enjoyed using technology, building it is where my true interest lies.
           In high school, I developed a love for programming and problem-solving, 
          which led me to pursue a Bachelor of Science in Computer Engineering, with a minor in Business Administration at UF. 
        
          In my free time, I enjoy interfacing with new technologies and microprocessor systems. I also enjoy learning about AI in 
          embedded systems and software development. The purpose of this website is to showcase my passion for technology and my skills. Please feel
          free to leave any feedback, thank you!
          
         
          
         
          

          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("software_skills")}
              active={tab === "software_skills"}
            >
              {" "}
              Software Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("hardware_skills")}
              active={tab === "hardware_skills"}
            >
              {" "}
              Hardware Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

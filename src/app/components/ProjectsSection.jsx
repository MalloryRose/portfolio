"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Gator Field Notebook",
    description: "Kotlin-based cross-platform mobile app that enables researchers to efficiently log field data with GPS, integrate environmental data via APIs, and print sample labels",
    image: "/images/projects/GatorFieldNotebok_Image.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Anthony42540/GatorFieldNotebook",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "MediConnect",
    description: "A winning business model for a cross-platform mobile application using React Native, Node.js, and PostgreSQL that helps travelers with chronic conditions navigate foreign healthcare systems, addressing the needs of 1.4 billion global travelers and securing first place in a Berlin Startup Community competition with the highest product valuation among 15 competitors.",
    image: "/images/projects/MediConnect_Image.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "HelpHub",
    description: "Full-stack food bank web application built using React, MongoDB, and Express.js that serves University of Florida students by providing real-time inventory tracking and a points-based ordering system, complete with UFID verification and role-based access control for enhanced security and equitable food distribution.",
    image: "/images/projects/HelpHub_Image.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HelpHubGroup/HelpHub",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "32-bit MIPS Processor",
    description: "A 32-bit MIPS processor implementation in VHDL that features a multi-cycle architecture, 256-word RAM with memory-mapped I/O, and supports a comprehensive subset of the MIPS instruction set including arithmetic, logical, memory access, and control flow operations.",
    image: "/images/projects/MIPS-architecture.png",
    tag: ["All", "Hardware"],
    gitUrl: "https://github.com/MalloryRose/MIPS",
    previewUrl: "/",
  },
  
  {
    id: 6,
    title: "Bootloader Development",
    description: "Custom bootloaders for both x86 and ARM platforms. The bootloaders were designed to load and display a message from an external file bin file through the UART protocol, which required work with low-level assembly programming, memory-mapped I/O, and system initialization.",
    image: "/images/projects/Bootloader.png",
    tag: ["All", "Hardware"],
    gitUrl: "https://github.com/MalloryRose/Bootloader",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Synchronous Serial Communication with SPI",
    description: "Developed a real-time 3D acceleration data acquisition system by configuring the ATxmega128A1U microcontroller to communicate with an LSM6DSL IMU via SPI, visualizing sensor data using SerialPlot over UART-to-USB, and verifying transmission with a logic analyzer.",
    image: "/images/projects/SPI.png",
    tag: ["All", "Hardware"],
    gitUrl: "https://github.com/MalloryRose/SPI",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Minesweeper",
    description: "Classic game of Minesweeper re-developed in C++",
    image: "/images/projects/Minesweeper.jpg",
    tag: ["All"],
    gitUrl: "https://github.com/MalloryRose/MineSweeper/tree/master",
    previewUrl: "/",
  },
 
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
          <ProjectTag
          onClick={handleTagChange}
          name="Hardware"
          isSelected={tag === "All"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

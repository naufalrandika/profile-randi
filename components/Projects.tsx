"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Water Quality Control",
        description: "Water Quality Control Technology in the Field of Aquatic Livestock Farming Based on Internet of Things Technology",
        image: "/images/projects/1.jpeg",
        tag: ["All", "IoT"],
        gitUrl: "/",
        previewUrl: "https://www.linkedin.com/posts/naufalrandika_im-happy-to-share-this-research-water-activity-7111797750853210112-YPPO?utm_source=share&utm_medium=member_desktop",
    },
    {
        id: 2,
        title: "Website Gallery Situs Perahu Kuno",
        description: "Website using ReactJS and TailwindCSS",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "https://gallery.desawisatapunjulharjo.com/",
    },
];

const Projects = () => {
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
            <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="flex flex-row justify-center items-center gap-2 py-6">
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
                    name="IoT"
                    isSelected={tag === "IoT"}
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

export default Projects;
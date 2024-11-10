"use client";

import React, { useState } from "react";
import { Card } from "flowbite-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const projects = [
  {
    title: "Tax Mapping (GIS Web Application)",
    description:
      "A GIS Web Application for an LGU. This application helps users locate the exact location of land properties and can also plot parcels using their land titles technical descriptions, as well as assign Property Index Numbers (PINs).",
    image: "/gis.png",
    technologies: ["React", "ExpressJS", "PostGreSql"],
  },
  {
    title: "Delinquency APP",
    description:
      "A Web Application for an LGU. This application generates delinquent reports for individuals who have not paid taxes on their properties. It can also create PDF notice reports to be received by the delinquent persons.",
    image: "/delinquent.png",
    technologies: ["React", "ExpressJS", "PostGreSql"],
  },
  {
    title: "GeoNX",
    description:
      "The innovative GIS application that lets you plot polygons using land title descriptions. Easily visualize and define property boundaries with precision.",
    href: "https://geonx-gis-app.vercel.app//",
    image: "/geonx.png",
    technologies: ["React", "Node/Express", "Tailwindcss"],
  },
  {
    title: "DiALFix",
    description:
      "DiAL Food hub App is a convenient and fast food delivery app that brings your favorite meals right to your doorstep. Explore a variety of local restaurants, customize your order, and enjoy a seamless delivery experience with just a few taps",
    href: "https://dialfix.vercel.app/",
    image: "/dialfix.png",
    technologies: ["Vite + React", "TypeScript", "Tailwindcss", "express"],
  },
  {
    title: "DiAL Food Hub Delivery App",
    description:
      "DiAL Food hub App is a convenient and fast food delivery app that brings your favorite meals right to your doorstep. Explore a variety of local restaurants, customize your order, and enjoy a seamless delivery experience with just a few taps",
    href: "https://dial-hub-food.vercel.app/",
    image: "/DialHubFoodApp.png",
    technologies: ["Vite + React", "TypeScript", "Tailwindcss", "express"],
  },
  {
    title: "DiAL Hub Smart Shop",
    description: "Online Store Web Application.",
    href: "https://dial-hub.vercel.app/",
    image: "/dialhub.png",
    technologies: ["React", "TypeScript", "Tailwindcss"],
  },
];

const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div
      className="bg-sky-800 py-16 flex flex-col items-center justify-center"
      id="projects"
    >
      <h1 className="font-serif font-bold text-xl md:text-3xl text-white flex flex-col md:flex-row gap-4 mb-5">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
        {projects
          .slice(0, showAll ? projects.length : 2)
          .map((project, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              whileHover={{ scale: 1.1 }}
              viewport={{ once: false, amount: 0.3 }}
              variants={cardVariants}
              className="perspective-1000"
            >
              <Card
                className="max-w-sm shadow-lg border-sky-900 rounded-lg h-[26rem] relative"
                renderImage={() => (
                  <Image
                    width={500}
                    height={500}
                    src={project.image}
                    alt={`image ${index + 1}`}
                  />
                )}
              >
                <div className="flex flex-col h-full justify-between">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-200 text-center">
                    {project.title}
                  </h5>
                  <p className="font-normal text-gray-400 hover:text-white px-2">
                    {project.description}
                  </p>
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 px-2"
                    >
                      Visit Site: {project.href}
                    </a>
                  )}
                  <ul className="flex gap-2 text-gray-200 py-2 mx-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <li
                        key={techIndex}
                        className="border px-2 py-1 rounded-full hover:text-orange-500 text-sm"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
      </div>
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-6 px-4 py-2 rounded-full border border-sky-500 shadow-lg text-white hover:bg-sky-700"
      >
        {showAll ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Projects;

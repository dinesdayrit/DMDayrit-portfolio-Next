"use client";

import React from "react";
import { Card } from "flowbite-react";
import Image from "next/image";
import { motion } from "framer-motion";

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
];

export default function Projects() {
  return (
    <div
      className="bg-sky-800 py-16 flex flex-col items-center justify-center"
      id="projects"
    >
      <h1 className="font-serif font-bold text-xl md:text-3xl text-white flex flex-col md:flex-row gap-4 mb-5">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
        {projects.map((project, index) => (
          <motion.div whileHover={{ scale: 1.1 }} className="hover:text-white">
            <Card
              key={index}
              className="max-w-sm shadow-lg border-sky-900 rounded-lg h-[26rem] "
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
                <p className="font-normal text-gray-400 hover:text-white  px-2 flex-grow">
                  {project.description}
                </p>
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
    </div>
  );
}

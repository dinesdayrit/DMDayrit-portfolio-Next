"use client";

import { motion } from "framer-motion";
import { GitBranchIcon, GithubIcon } from "lucide-react";
import { BiLogoJavascript } from "react-icons/bi";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCssmodules, SiExpress, SiRedux, SiTypescript } from "react-icons/si";

const listVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemVariants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.8 },
};

export default function Skills() {
  return (
    <div
      className="flex flex-col items-center justify-center py-16"
      id="skills"
    >
      <h2 className="font-serif font-bold text-xl md:text-3xl text-sky-700 flex flex-col md:flex-row gap-4 mb-5">
        Programming Skills
      </h2>

      <p className="font-serif font-semibold mb-1 text-sky-500">Tech Stack</p>

      <div className="flex flex-col gap-10 md:flex-row md:gap-40">
        <div>
          <p className="font-bold text-orange-500">Frontend:</p>
          <motion.ul
            className="text-gray-200"
            initial="hidden"
            animate="visible"
            variants={listVariants}
          >
            <motion.li
              className="bg-blue-950 rounded-full px-2 py-.5 mb-1 flex items-center gap-1"
              variants={itemVariants}
            >
              <BiLogoJavascript />
              JavaScript
            </motion.li>
            <motion.li
              className="bg-blue-950 rounded-full px-2 py-.5 mb-1 flex items-center gap-1"
              variants={itemVariants}
            >
              <FaReact />
              ReactJS
            </motion.li>
            <motion.li
              className="bg-blue-950 rounded-full px-2 py-.5 mb-1 flex items-center gap-1"
              variants={itemVariants}
            >
              <SiTypescript />
              TypeScript
            </motion.li>
            <motion.li
              className="bg-blue-950 rounded-full px-2 py-.5 mb-1 flex items-center gap-1"
              variants={itemVariants}
            >
              <SiCssmodules />
              css modules
            </motion.li>
            <motion.li
              className="bg-blue-950 rounded-full px-2 py-.5 mb-1 flex items-center gap-1"
              variants={itemVariants}
            >
              <RiTailwindCssFill />
              Tailwindcss
            </motion.li>
            <motion.li
              className="bg-blue-950 rounded-full px-2 py-.5 mb-1 flex items-center gap-1"
              variants={itemVariants}
            >
              <SiRedux />
              Redux
            </motion.li>
          </motion.ul>
        </div>

        <div>
          <p className="font-bold text-orange-500">Backend:</p>
          <motion.ul
            className="text-gray-300"
            initial="hidden"
            animate="visible"
            variants={listVariants}
          >
            <motion.li
              className="bg-blue-950 rounded-full px-2 py-.5 mb-1 flex items-center gap-1"
              variants={itemVariants}
            >
              Rest API
            </motion.li>
            <motion.li
              className="bg-blue-950 rounded-full px-2 py-.5 mb-1 flex items-center gap-1"
              variants={itemVariants}
            >
              <FaNodeJs />
              nodejs
            </motion.li>
            <motion.li
              className="bg-blue-950 rounded-full px-2 py-.5 mb-1 flex items-center gap-1"
              variants={itemVariants}
            >
              <SiExpress />
              ExpressJS
            </motion.li>
            <motion.li
              className="bg-blue-950 rounded-full px-2 py-.5 mb-1 flex items-center gap-1"
              variants={itemVariants}
            >
              <GitBranchIcon />
              Git
            </motion.li>
            <motion.li
              className="bg-blue-950 rounded-full px-2 py-.5 mb-1 flex items-center gap-1"
              variants={itemVariants}
            >
              <GithubIcon />
              GitHub
            </motion.li>
          </motion.ul>
        </div>

        <div>
          <p className="font-bold text-orange-500">DB:</p>
          <motion.ul
            className="text-gray-300"
            initial="hidden"
            animate="visible"
            variants={listVariants}
          >
            <motion.li
              className="bg-blue-950 rounded-full px-2 py-.5 mb-1 flex items-center gap-1"
              variants={itemVariants}
            >
              <DiMongodb />
              mongoDB
            </motion.li>
            <motion.li
              className="bg-blue-950 rounded-full px-2 py-.5 mb-1 flex items-center gap-1"
              variants={itemVariants}
            >
              <DiPostgresql />
              postgreSQL
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
}

"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage: `url('/herobg.jpg')`,
        width: "100%",
        height: "100vh",
      }}
      id="home"
    >
      <div className="flex justify-center items-center h-full bg-black bg-opacity-40">
        <div className="container">
          <div className="px-16 md:px-32">
            <h2 className="font-serif font-bold text-4xl md:text-6xl text-stone-100 lg:text-7xl">
              Hello, <br />
              I&apos;m Dines!
            </h2>
            <p className="md:text-lg ml-3 mr-3 text-white">
              A Web Developer{" "}
              <span className="text-orange-500 font-bold inline-flex typing-animation">
                <span className="typed-text">React.js | Node.js</span>
              </span>
            </p>

            <div className="mt-8 flex flex-row max-sm:gap-2 items-center">
              <motion.a
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="https://www.linkedin.com/in/dines-dayrit-067103284/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4 md:mb-0 md:mr-4"
              >
                <FaLinkedin className="inline-block mr-2" />
                LinkedIn
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="https://github.com/dinesdayrit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full mb-4 md:mb-0 md:mr-4"
              >
                <FaGithub className="inline-block mr-2" />
                GitHub
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

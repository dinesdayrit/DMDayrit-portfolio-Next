"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: { rotateY: 90 },
  visible: {
    rotateY: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function About() {
  return (
    <section
      className="flex flex-col justify-center items-center py-16"
      id="about"
    >
      <h2 className="font-serif font-bold text-xl md:text-3xl mb-5 text-sky-700">
        About me
      </h2>
      <div className="flex flex-col items-center md:flex-row gap-8 justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={imageVariants}
        >
          <Image
            src="profilepic.svg"
            width={250}
            height={250}
            alt="profile"
            className="bg-sky-800 rounded-s-full rounded-tr-xl mt-12"
            priority
          />
        </motion.div>
        <motion.p
          className="md:mt-16 ml-2 mr-2 md:w-1/3 font-mono text-xl text-balance text-center md:text-justify"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={textVariants}
        >
          &quot;Hey, I&apos;m Dines Dayrit, a dedicated web developer with a
          specialization in React.js. I&apos;m all about crafting dynamic and
          interactive user interfaces that breathe life into web
          applications.&quot;
        </motion.p>
      </div>
    </section>
  );
}

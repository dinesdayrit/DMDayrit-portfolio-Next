"use client";

import { motion } from "framer-motion";
import { InstagramIcon, Facebook, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const contactDetails = {
    location: "Davao City, Phillipines",
    messenger: "https://m.me/dines.dayrit",
    email: "dayritdines22@gmail.com",
  };

  const socialLinks = [
    {
      title: "Linkedin",
      href: "https://www.linkedin.com/in/dines-dayrit-067103284/",
      icon: Linkedin,
      color: "text-blue-600",
    },
    {
      title: "Github",
      href: "https://github.com/dinesdayrit",
      icon: Github,
      color: "text-white",
    },
    {
      title: "Facebook",
      href: "https://www.facebook.com/dines.dayrit",
      icon: Facebook,
      color: "text-blue-600",
    },
    {
      title: "Instagram",
      href: "https://instagram.com",
      icon: InstagramIcon,
      color: "text-pink-600",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <footer className="flex flex-col justify-center text-gray-300 px-4 py-5 mx-auto md:px-8 bg-slate-900 w-full">
      <div className="gap-6 justify-between md:flex">
        <div className="flex-1 mt-10 md:mt-0">
          <div className="flex justify-center">
            <ul className="space-y-4 mt-10">
              <h4 className="text-gray-300 text-xl font-medium">Contact me</h4>
              <li>
                <span className="block text-white">Messenger:</span>
                <a
                  href={contactDetails.messenger}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{contactDetails.messenger}</span>
                </a>
              </li>
              <li>
                <span className="block text-white">Email:</span>
                <span>{contactDetails.email}</span>
              </li>
              <li>
                <span className="block text-white">Location:</span>
                <span>{contactDetails.location}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2024 DinesDayrit All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={containerVariants}
            className="flex items-center space-x-4"
          >
            {socialLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 500 }}
                  className="w-10 h-10 border rounded-full flex items-center justify-center"
                >
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </footer>
  );
}

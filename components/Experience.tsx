import React from "react";

export default function Experience() {
  return (
    <div
      className="flex flex-col justify-center items-center w-full bg-gray-200 py-10 "
      id="experience"
    >
      <div>
        <h2 className="font-serif font-bold text-xl md:text-3xl mb-5  text-sky-700 text-center">
          Programming Experience
        </h2>

        <p className="font-serif font-semibold mb-1 text-black">
          (Aug 2023 - Present) 8 Nexity Technology <br />
          <span className="text-sky-500">
            Web Developer(GIS Web Application for LGU)
          </span>
        </p>
        <p className="font-bold text-orange-500 ">Tech used:</p>
        <ul className="list-disc pl-6 text-black">
          <li>ReactJS for Frontend</li>
          <li>ExpressJS/NodeJS for Backend</li>
          <li>postgre for db</li>
          <li>Oracle Cloud Instance (using PUTTY VM)</li>
        </ul>

        <p className="font-serif font-semibold mb-1 mt-12 text-black">
          (March 2024 - June 2024) Codebility (A Dev community for
          collaboration) <br />
          <span className="text-sky-500">Frontend Developer</span>
        </p>
        <ul className="list-disc pl-6 text-black">
          <li>React</li>
          <li>TypeScript</li>
          <li>NextJS</li>
          <li>Collaboration</li>
        </ul>
      </div>
      <div>
        <h2 className="font-serif font-bold text-xl md:text-3xl mb-5  text-sky-700 mt-20">
          Non-Programming Experience
        </h2>

        <p className="font-serif font-semibold mb-4 text-gray-900">
          *(Sept 2020 - Aug 2023) Novally <br />(
          <span className="text-sky-500">
            Lead Generation Quality Assurance Specialist
          </span>
          )
        </p>
        <p className="font-serif font-semibold mb-4 text-gray-900">
          *(Aug 2017 - Sept 2020) Alps Maintaineering Services <br />(
          <span className="text-sky-500">Asst. Branch Manager</span>)
        </p>
        <p className="font-serif font-semibold mb-4 text-gray-900">
          *(Apr 2014 - Apr 2017) Sixeleven Global Services <br />(
          <span className="text-sky-500">Senior Technical Support</span>)
        </p>
      </div>
    </div>
  );
}

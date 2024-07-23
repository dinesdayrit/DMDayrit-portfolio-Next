import { GitBranchIcon, GithubIcon } from "lucide-react";
import { BiLogoJavascript } from "react-icons/bi";
import {
  DiJavascript,
  DiMongodb,
  DiNodejs,
  DiPostgresql,
} from "react-icons/di";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiCssmodules,
  SiExpress,
  SiRedux,
  SiReduxsaga,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <h2 className="font-serif font-bold text-xl md:text-3xl text-sky-700 flex flex-col md:flex-row gap-4 mb-5">
        {" "}
        Programming Skills{" "}
      </h2>

      <p className="font-serif font-semibold mb-1 text-sky-500">Tech Stack</p>

      <div className="flex flex-col gap-10 md:flex-row md:gap-40">
        <div>
          <p className="font-bold text-orange-500">Frontend:</p>
          <ul className="text-gray-200">
            <li className="bg-blue-950 rounded-full px-2 py-.5 mb-1 flex items-center  gap-1">
              <BiLogoJavascript />
              JavaScript
            </li>
            <li className="bg-blue-950 rounded-full px-2 py-.5 mb-1 flex items-center  gap-1">
              <FaReact />
              ReactJS
            </li>
            <li className="bg-blue-950 rounded-full px-2 py-.5 mb-1 flex items-center  gap-1">
              <SiTypescript />
              TypeScript
            </li>
            <li className="bg-blue-950 rounded-full px-2 py-.5 mb-1 flex items-center  gap-1">
              <SiCssmodules />
              css modules
            </li>
            <li className="bg-blue-950 rounded-full px-2 py-.5 mb-1 flex items-center  gap-1">
              <RiTailwindCssFill />
              Tailwindcss
            </li>
            <li className="bg-blue-950 rounded-full px-2 py-.5 mb-1 flex items-center  gap-1">
              <SiRedux />
              Redux
            </li>
          </ul>
        </div>

        <div>
          <p className="font-bold text-orange-500">Backend:</p>
          <ul className="text-gray-300">
            <li className="bg-blue-950 rounded-full px-2 py-.5 mb-1 flex items-center  gap-1">
              Rest API
            </li>
            <li className="bg-blue-950 rounded-full px-2 py-.5 mb-1 flex items-center  gap-1">
              <FaNodeJs />
              nodejs
            </li>
            <li className="bg-blue-950 rounded-full px-2 py-.5 mb-1 flex items-center  gap-1">
              <SiExpress />
              ExpressJS
            </li>
            <li className="bg-blue-950 rounded-full px-2 py-.5 mb-1 flex items-center  gap-1">
              <GitBranchIcon />
              Git
            </li>
            <li className="bg-blue-950 rounded-full px-2 py-.5 mb-1 flex items-center  gap-1">
              <GithubIcon />
              GitHub
            </li>
          </ul>
        </div>

        <div>
          <p className="font-bold text-orange-500">DB:</p>
          <ul className="text-gray-300">
            <li className="bg-blue-950 rounded-full px-2 py-.5 mb-1 flex items-center  gap-1">
              <DiMongodb />
              mongoDB
            </li>
            <li className="bg-blue-950 rounded-full px-2 py-.5 mb-1 flex items-center  gap-1">
              <DiPostgresql />
              postgreSQL
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

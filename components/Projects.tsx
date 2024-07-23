import React from "react";
import { Card } from "flowbite-react";
import Image from "next/image";

export default function Projects() {
  return (
    <div
      className="bg-sky-900 py-16 flex flex-col items-center justify-center"
      id="projects"
    >
      <h1 className="font-serif font-bold text-xl md:text-3xl text-white flex flex-col md:flex-row gap-4 mb-5">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
        <Card
          className="max-w-sm shadow-lg border-transparent rounded-lg h-[26rem]"
          renderImage={() => (
            <Image width={500} height={500} src="/gis.png" alt="image 1" />
          )}
        >
          <div className="flex flex-col h-full justify-between">
            <h5 className="text-2xl font-bold tracking-tight text-gray-300 dark:text-white text-center">
              Tax Mapping (GIS Web Application)
            </h5>
            <p className="font-normal text-gray-400 dark:text-gray-400 px-2 flex-grow">
              A GIS Web Application for an LGU. This application helps users
              locate the exact location of land properties and can also plot
              parcels using their land titles' technical descriptions, as well
              as assign Property Index Numbers (PINs).
            </p>
            <ul className="flex gap-2 text-gray-200 py-2 mx-auto">
              <li className="border px-2 py-1 rounded-full text-sm">React</li>
              <li className="border px-2 py-1 rounded-full text-sm">
                ExpressJS
              </li>
              <li className="border px-2 py-1 rounded-full text-sm">
                PostGreSql
              </li>
            </ul>
          </div>
        </Card>

        <Card
          className="max-w-sm shadow-lg border-transparent rounded-lg h-[26rem]"
          renderImage={() => (
            <Image
              width={500}
              height={500}
              src="/delinquent.png"
              alt="image 2"
            />
          )}
        >
          <div className="flex flex-col h-full justify-between">
            <h5 className="text-2xl font-bold tracking-tight text-gray-300 dark:text-white text-center">
              Delinquency APP
            </h5>
            <p className="font-normal text-gray-400 dark:text-gray-400 px-2 flex-grow">
              A Web Application for an LGU. This application generates
              delinquent reports for individuals who have not paid taxes on
              their properties. It can also create PDF notice reports to be
              received by the delinquent persons.
            </p>
            <ul className="flex gap-2 text-gray-200 py-2 mx-auto">
              <li className="border px-2 py-1 rounded-full text-sm">React</li>
              <li className="border px-2 py-1 rounded-full text-sm">
                ExpressJS
              </li>
              <li className="border px-2 py-1 rounded-full text-sm">
                PostGreSql
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
}

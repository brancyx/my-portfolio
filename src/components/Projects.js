// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import { projects } from "../data";
import "aos/dist/aos.css"
import Aos from "aos";

export default function Projects() {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-30 mx-auto text-center lg:px-40 lg:py-40">
        <div data-aos="fade-up" className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Applications that I built for school projects or in 
            my spare time.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div data-aos="fade-up" className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-white mb-1">
                    {project.title}
                  </h1>
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-3">
                    {project.subtitle}
                  </h2>
                  <p className="leading-relaxed mb-5">{project.description}</p>
                  <div className="flex flex-row justify-center items-center">
                    <a
                      href={project.link}
                      className="inline-flex text-white bg-green-500 border-0 py-1 px-5 focus:outline-none hover:bg-green-600 rounded-sm text-lg">
                      View
                    </a>
                    <a
                      href={project.repo}
                      className="inline-flex items-center">
                      <i class="fab fa-github fa-2x transform ml-8 text-white hover:text-gray-400"></i>
                    </a>
                  </div>
                  
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
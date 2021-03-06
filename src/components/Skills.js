import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import { skills } from "../data";
import "aos/dist/aos.css"
import Aos from "aos";

export default function Skills() {
  useEffect(() => {
    Aos.init({duration: 500});
  }, []);
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div data-aos="fade-up" className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Along the way, I have worked on different projects
            in school and during internships. Here are the skillsets &amp;
            technologies I have picked up and would like to improve.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 mx-2">
          {skills.map((skill) => (
            <div data-aos="fade-up" key={skill.title} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <span className="flex-grow flex flex-col text-center items-center">
                  <BadgeCheckIcon className="text-green-400 w-10 h-10" />
                  <span className="title-font font-medium text-2xl text-white">
                      {skill.title}
                  </span>
                  <span className="title-font font-medium text-white">
                      {skill.tech}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
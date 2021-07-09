import React, { useEffect } from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";
import "aos/dist/aos.css"
import Aos from "aos";

export default function Testimonials() {
  useEffect(() => {
    Aos.init({duration: 500});
  }, []);
  return (
    <section id="testimonials">
      <div data-aos="fade-up" className="container px-5 py-10 mx-auto mt-20 text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Work Experience
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div data-aos="fade-up" className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-700 bg-opacity-80 p-8 rounded">
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font text-xl text-white">
                      {testimonial.position}
                    </span>
                    <span className="text-green-600 text-sm uppercase italic">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
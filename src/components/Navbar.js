import React, { useEffect } from "react";
import { HashLink} from 'react-router-hash-link';
import Aos from "aos";
import "aos/dist/aos.css"

export default function Navbar() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <header data-aos="fade-down" className="bg-gray-900 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <HashLink to="home" className="title-font ml-3 text-xl font-medium text-white mb-4 md:mb-0">
            brancyx
        </HashLink>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-grey-700	flex flex-wrap items-center text-base justify-center">
          <HashLink to="home#projects" className="mr-5 hover:text-yellow-300" smooth duration={1000}>
            Apps
          </HashLink>
          <HashLink to="home#skills" className="mr-5 hover:text-yellow-300" smooth duration={1000}>
            Skills
          </HashLink>
          <HashLink to="home#testimonials" className="mr-5 hover:text-yellow-300" smooth duration={1000}>
            Experience
          </HashLink>
          <HashLink to="readings" className="mr-5 hover:text-yellow-300" smooth duration={1000}>
            Inspirations
          </HashLink>
        </nav>
        <div className="flex justify-center mt-6 md:mt-0">
          <a
            href="https://www.linkedin.com/in/brandon-chen-123a7a178/"
            className="inline-flex items-center ">
            <i class="fab fa-linkedin transform scale-150 mr-8 text-white hover:text-gray-400"></i>
          </a>
          <a
            href="https://github.com/brancyx"
            className="inline-flex items-center">
            <i class="fab fa-github transform scale-150 mr-8 text-white hover:text-gray-400"></i>
          </a>
          <a
            href="mailto:bran0025@e.ntu.edu.sg"
            className="inline-flex items-center">
            <i class="far fa-envelope transform scale-150 current-fill text-white hover:text-gray-400"></i>
          </a>
        </div>
      </div>
    </header>
  );
}
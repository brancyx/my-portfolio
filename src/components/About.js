import React, { useEffect } from "react";
import "aos/dist/aos.css"
import Aos from "aos";
import Typed from "react-typed";

export default function About() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-0 md:flex-row flex-col items-center">
        
        <div data-aos="fade-right" className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-7xl text-3xl mb-4 font-medium text-white">
            Hi, I'm <strong>Brandon.</strong>
          </h1>
          <p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          I'm an aspiring&nbsp;
                  <Typed
                    strings={[
                      "data engineer.",
                      "back end developer.",
                      "software engineer."
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
          </p>
          <p className="mb-8 leading-relaxed text-gray-200">
            <br></br>Currently a penultimate-year undergraduate at
            <a href="https://www.ntu.edu.sg/" className="italic text-blue-400 hover:text-blue-600"> NTU</a>,
            on track to graduate in 2023 with a double degree in Computer Science and Business.
          </p>
          <div className="flex justify-center">
            <a
              href="https://drive.google.com/drive/folders/1fWxvmtyWV690DL1TWufghBKdBJFjA-Zr?usp=sharing"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              View Resume
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work  
            </a>
          </div>
        </div>
        <div data-aos="fade-left" className="lg:max-w-lg lg:w-full md:w-1/2 w-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./me3.png"
          />
        </div>
      </div>
    </section>
  );
}
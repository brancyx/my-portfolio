import React from  'react';
import {Link} from "react-router-dom"

export default function Readings() {
  return (
    <section id="readings">
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "75vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                    <h1 className="text-white font-semibold text-4xl italic">
                      Be Relentlessly Resourceful
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                      “When you grow up, you tend to get 
                      told that the world is the way it is and your life is just to 
                      live your life inside the world. Try not to bash into the walls 
                      too much. Try to have a nice family life, have fun, save a little 
                      money. That’s a very limited life. Life can be much broader once 
                      you discover one simple fact: Everything around you that you call 
                      life was made up by people that were no smarter than you. And you 
                      can change it, you can influence it… Once you learn that, you’ll 
                      never be the same again.” - <strong>Steve  Jobs</strong>
                    </p>
                  </div>
                </div>

              </div>
          </div>
          </div>
      <footer className="footer navbar-static-bottom">
        <div className="flex justify-center mt-6 md:mt-0">
          <span className="inline-flex items-center">
            <Link to="readings" smooth duration={1000}>
              <i className="fas fa-chevron-circle-up fa-3x hover:text-white"/>
            </Link>
          </span>
        </div>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <p className="leading-relaxed text-white italic">
            © {new Date().getFullYear()} {' '}
            Brandon Chen
          </p>
        </div>
      </footer>
    </section>
  );
}
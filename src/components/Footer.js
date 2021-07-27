import React from "react";
import { Link } from 'react-scroll';

export default function Footer() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <section id="footer">
      <footer className="footer navbar-static-bottom">
      {showModal ? (
        <div>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Congrats!
                  </h3>
                  <button
                    className="items-center ml-auto bg-transparent text-red-500 hover:opacity-75 text-3xl font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-0 text-blueGray-500 text-lg leading-relaxed">
                    You have discovered a <strong>secret feature</strong> that is still in testing! <br />
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
        <div className="flex justify-center mt-6 md:mt-0">
          <span className="inline-flex items-center">
            <Link to="about" smooth duration={1000}>
              <i className="fas fa-chevron-circle-up fa-3x hover:text-white"/>
            </Link>
          </span>
        </div>
        <div className="container justify-between mx-auto flex flex-wrap px-8 py-5 flex-col md:flex-row items-center mt-10">
          <div className="flex items-end space-x-8 md:mt-0">
            <a
            href="https://www.linkedin.com/in/brandon-chen-123a7a178/"
            className="inline-flex">
            <i class="fab fa-linkedin fa-2x text-white hover:text-gray-400"></i>
            </a>
            <a
            href="https://github.com/brancyx"
            className="inline-flex">
            <i class="fab fa-github fa-2x text-white hover:text-gray-400"></i>
            </a>
            <a
              href="mailto:bran0025@e.ntu.edu.sg"
              className="inline-flex">
              <i class="far fa-envelope fa-2x current-fill text-white hover:text-gray-400"></i>
            </a>
            <button onClick={() => setShowModal(true)} 
            className="bg-transparent text-grey-500 italic font-bold uppercase text-xs rounded shadow hover:shadow-lg hover:text-white outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button">
              Pop up
            </button>
          </div>
          <p className="leading-relaxed text-white italic">
            © {new Date().getFullYear()} {' '}
            Brandon Chen
          </p>
        </div>
      </footer>
    </section>
  );
}
import React from "react";
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <section id="footer">
      <footer className="footer navbar-static-bottom">
        <div className="flex justify-center mt-6 md:mt-0">
          <span className="inline-flex items-center">
            <Link to="about" smooth duration={1000}>
              <i className="fas fa-chevron-circle-up fa-3x hover:text-white"/>
            </Link>
          </span>
        </div>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center mt-10">
          <p className="leading-relaxed text-white italic">
            © {new Date().getFullYear()} {' '}
            Brandon Chen
          </p>
        </div>
      </footer>
    </section>
  );
}
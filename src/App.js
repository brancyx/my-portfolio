import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Readings from "./components/Readings";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 font-sans">
      <Router>
        <Navbar />
      
      
      <Switch>
        <Route path="/" exact>
          <About />
          <Projects />
          <Skills />
          <Testimonials />
          <Contact />
          <Footer />
        </Route>

        <Route path="/readings" exact>
          <Readings />
        </Route>
      </Switch>

      </Router>
    </main>
  );
}
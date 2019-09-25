import React from "react"
import "./layout.css"

import Header from "./header.js"
import Footer from "./footer.js"
import Projects from "./projects"
import About from "./about"
import Contact from "./contact"
import Button from "./button"

export default () => (
  <div>
    <Button />
    <Header />
    <Projects />
    <About />
    <Contact />
    <Footer />
  </div>
)


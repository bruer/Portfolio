import React from "react"

import "../styles/layout.css"

import Header from "../components/header"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import Footer from "../components/footer"
import Button from "../components/button"

export default () => (
  <div>
    <Header />
    <Projects />
    <About />
    <Contact />
    <Footer />
    <Button />
  </div>
)

import React from "react"
import "./layout.css"

import Footer from "./footer.js"
// import Header from "./header.js"
// import Projects from "./projects"
// import About from "./about"
// import Contact from "./contact"
// import Button from "./button"

export default ({ children }) => (
  <div>
    {children}
    <Footer />
  </div>
)

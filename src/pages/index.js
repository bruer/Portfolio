import React from "react"
import { css, StyleSheet } from "aphrodite"

import Header from "../components/Header"
import Projects from "../components/Projects"
import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import ScrollButton from "../components/buttons/ScrollButton"

import "../styles/layout.css"
import { fonts } from "../styles/aphrodite/fonts"

export default () => {
  const aphroStyles = StyleSheet.create({
    mainFont: { fontFamily: fonts.RALEWAY },
  })
  return (
    <div className={css(aphroStyles.mainFont)}>
      <Header />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <ScrollButton />
    </div>
  )
}

/* eslint-disable */

import React, { useState, useEffect } from "react"
import { css, StyleSheet } from "aphrodite"

import ScrollLink from "./links/ScrollLink"
import {
  getRandomProperty,
  getForegroundColor,
  checkContrastRatio,
  getNiceColors,
} from "../api"

import styles from "./Header.module.css"
import { transitions } from "../styles/aphrodite/default"
import { firstLetterFonts } from "../styles/aphrodite/fonts"
import { colorz } from "../styles/aphrodite/colors"
import { hex } from "wcag-contrast"

export default () => {
  const bgColor = colorz.WHITE
  const niceColors = getNiceColors(bgColor, colorz)

  // const [bgColor, setBgColor] = useState("")
  // useEffect(() => {
  //   setBgColor(colorz.WHITE)
  //   // setBgColor(getRandomProperty(colorz, true))
  // }, [])

  const [firstLetterColor, setFirstLetterColor] = useState("")
  useEffect(() => {
    // if (bgColor) {
    //   const colors = getNiceColors(colorz.BLACK, colorz)
    //   console.log(colors)

    //   setFirstLetterColor(getForegroundColor(bgColor, colors, true))
    // }

    // const colors = getNiceColors(colorz.BLACK, colorz)
    // console.log(colors)

    setFirstLetterColor(getForegroundColor(colorz.BLACK, niceColors, true))
  }, [bgColor])

  const [fgColor, setFgColor] = useState("")
  useEffect(() => {
    // if (firstLetterColor) {
    //   setFgColor(getForegroundColor(bgColor, colorz, true))
    // }

    let color = ""
    // while (color !== firstLetterColor) {
    //   color = getForegroundColor(colorz.BLACK, niceColors, true)
    // }
    
    setFgColor(getForegroundColor(colorz.BLACK, niceColors, true))
  }, [firstLetterColor])

  const [linkColor, setLinkColor] = useState("")
  useEffect(() => {
    // if (bgColor) {
    //   setLinkColor(getForegroundColor(bgColor, colorz, true))
    // }
    const filteredColors = niceColors.filter(
      color => color !== firstLetterColor && color !== fgColor
    )
    // console.log(filteredColors)
  }, [fgColor])

  const [shadow, setShadow] = useState("")
  useEffect(() => {
    setShadow(`15vw 10vw ${colorz.BLACK}`)
  }, [])

  const [font, setFont] = useState("")
  useEffect(() => {
    setFont(getRandomProperty(firstLetterFonts, true))
  }, [])

  const aphroStyles = StyleSheet.create({
    bgColor: { backgroundColor: bgColor },
    // bgColor: { backgroundColor: colorz.WHITE },
    fgColor: { color: fgColor },
    // fgColor: { color: colorz.BLACK },
    color: { color: firstLetterColor },
    // color: { color: colorz.BLACK },
    font: { fontFamily: font },
    shadow: {
      textShadow: shadow,
    },
    transition: { transition: transitions.FIRST_LETTER },
  })

  return (
    <header
      id="header"
      className={`
        ${styles.container} 
        ${css(aphroStyles.bgColor, aphroStyles.fgColor)}`}
    >
      <h1 className={styles.title}>
        <span
          className={`
            ${styles.firstLetter}
            ${css(
              aphroStyles.font,
              aphroStyles.color,
              aphroStyles.shadow,
              aphroStyles.transition
            )}`}
        >
          F
        </span>
        <div className={styles.titleWords}>
          <span>redrik's</span>
          <span>Portfolio</span>
        </div>
      </h1>
      <nav>
        <ul className={styles.linksList}>
          <li>
            <ScrollLink
              section="#projects"
              bgColor={bgColor}
              fgColor={fgColor}
              color={linkColor}
              delay="0"
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              section="#about"
              bgColor={bgColor}
              fgColor={fgColor}
              color={linkColor}
              delay=".25s"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              section="#contact"
              bgColor={bgColor}
              fgColor={fgColor}
              color={linkColor}
              delay=".5s"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

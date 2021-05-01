/* eslint-disable */

import React, { useState, useEffect } from "react"
import { css, StyleSheet } from "aphrodite"
import { getForegroundColor } from "../../api"

import styles from "./Links.module.css"
import { transitions, opacities } from "../../styles/aphrodite/default"
import { fonts } from "../../styles/aphrodite/fonts"
import { colorz } from "../../styles/aphrodite/colors"

export default ({ children, section, bgColor, fgColor, color, delay }) => {
  const scrollToSection = ({ target }) => {
    const sectionPosition = document
      .querySelector(target.id)
      .getBoundingClientRect().top

    window.scrollTo(0, sectionPosition)
  }

  const [opacity, setOpacity] = useState(opacities.NONE)
  useEffect(() => {
    setOpacity(opacities.FULL)
  }, [])

  const aphroStyles = StyleSheet.create({
    color: { color: color },
    // color: { color: colorz.BLACK },
    delay: { transitionDelay: delay },
    font: fonts.OLD_ENGLISH,
    opacity: { opacity: opacity },
    shadow: {
      ":hover": {
        // textShadow: `.2vw .2vw ${shadowColor}`,
        // textShadow: `.15vw .15vw ${colorz.AQUA}`,
        "@media (max-width: 500px)": {
          // textShadow: `.5vw .5vw ${colorz.AQUA}`,
        },
      },
    },
    transition: { transition: transitions.SCROLL_LINK },
  })

  return (
    <button
      id={section}
      onClick={scrollToSection}
      className={`
        ${styles.scroll} 
        ${css(
          aphroStyles.color,
          aphroStyles.font,
          aphroStyles.shadow,
          // aphroStyles.opacity
          aphroStyles.transition
          // aphroStyles.delay
        )}`}
    >
      {children}
    </button>
  )
}

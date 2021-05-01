/* eslint-disable */

import React, { useState, useEffect } from "react"
import { css, StyleSheet } from "aphrodite"

// import mail from "../img/me-as-a-post-guy.png"
import bike from "../img/me-on-a-bike.jpg"

import { handleStateOnResize } from "../api"

import styles from "./About.module.css"
import { transitions } from "../styles/aphrodite/default"
import { fonts } from "../styles/aphrodite/fonts"
import { colors, colorz } from "../styles/aphrodite/colors"

export default () => {
  const [image, setImageDimensions] = useState(0)
  handleStateOnResize(setImageDimensions, "#aboutImage")

  const aphroStyles = StyleSheet.create({
    bgColor: { backgroundColor: colorz.STEELBLUE },
    fgColor: { color: colorz.BLANCHEDALMOND },
    imageColor: { color: colorz.BLACK },
    textColor: { color: colorz.STEELBLUE },
    font: fonts.OLD_ENGLISH_GOTHIC,
    shadow: {
      ":hover": {
        boxShadow: `${image.width}px 0 ${colors.about.imageShadow}`,
        "@media (max-width: 500px)": {
          boxShadow: `0 ${image.width}px ${colors.about.imageShadow}`,
        },
      },
    },
    transition: { transition: transitions.ABOUT_IMAGE },
    contentHeight: {
      "@media (max-width: 500px)": {
        height: `${image.width * 2}px`,
      },
    },
  })

  return (
    <section
      id="about"
      className={`
        ${styles.container} 
        ${css(aphroStyles.bgColor, aphroStyles.fgColor)}`}
    >
      <h2
        className={`
          ${styles.title} 
          ${css(aphroStyles.font)}`}
      >
        Hello
      </h2>
      <div
        className={`
          ${styles.contentContainer} 
          ${css(aphroStyles.contentHeight)}`}
      >
        <img
          id="aboutImage"
          src={bike}
          alt="me on a bike"
          className={`
            ${styles.image}
            ${css(
              aphroStyles.imageColor,
              aphroStyles.shadow,
              aphroStyles.transition
            )}`}
        />
        <div className={styles.textContainer}>
          <h3 className={styles.myName}>I'm Fredrik</h3>
          <p
            className={`
              ${styles.aboutMe} 
              ${css(aphroStyles.textColor)}`}
          >
            former postman who nowadays study front end development
          </p>
        </div>
      </div>
    </section>
  )
}

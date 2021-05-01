/* eslint-disable */

import React from "react"
import { css, StyleSheet } from "aphrodite"

import styles from "./Buttons.module.css"
import { opacities, transitions } from "../../styles/aphrodite/default"

export default ({ fgColor, mgColor }) => {
  const aphroStyles = StyleSheet.create({
    bgColor: { backgroundColor: mgColor },
    fgColor: { color: fgColor },
    opacity: { opacity: opacities.HALF, ":hover": { opacity: opacities.FULL } },
    shadow: {
      ":hover": {
        boxShadow: `.6vw .6vw ${fgColor}`,
      },
    },
    transition: { transition: transitions.BUTTON },
  })
  return (
    <a
      href="/"
      className={`
        ${styles.default} ${styles.home} 
        ${css(
          aphroStyles.bgColor,
          aphroStyles.fgColor,
          aphroStyles.shadow,
          aphroStyles.opacity,
          aphroStyles.transition
        )}`}
    >
      ←
    </a>
  )
}

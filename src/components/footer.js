/* eslint-disable */

import React from "react"
import { css, StyleSheet } from "aphrodite"
import { getYear } from "../api"

import styles from "./Footer.module.css"
import { transitions } from "../styles/aphrodite/default"
import { colorz } from "../styles/aphrodite/colors"

export default () => {
  const aphroStyles = StyleSheet.create({
    color: { color: colorz.IVORY },
    shadow: {
      ":hover": { textShadow: `.4vw .4vw ${colorz.CRIMSON}` },
    },
    transition: { transition: transitions.COPYRIGHT },
  })
  return (
    <footer
      className={`
      ${styles.container} 
      ${css(aphroStyles.color)}`}
    >
      <p
        className={`
        ${styles.copyright} 
        ${css(aphroStyles.shadow, aphroStyles.transition)}`}
      >
        © {getYear()}
      </p>
    </footer>
  )
}

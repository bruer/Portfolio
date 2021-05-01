/* eslint-disable */

import React, { useState, useEffect } from "react"
import { css, StyleSheet } from "aphrodite"
import icon from "../../img/github-icon.png"
import { checkContrastRatio } from "../../api"
import { transitions } from "../../styles/aphrodite/default"
import { colors } from "../../styles/aphrodite/colors"

import { hex } from "wcag-contrast"

export default ({ url, styles, bgColor, fgColor, mgColor }) => {
  const [transition, setTransition] = useState("")

  useEffect(() => {
    setTransition(transitions.ICON)

    // console.log("fg to icon", hex(colors.project.icon, fgColor))
    // console.log("mg to bg", hex(bgColor, mgColor))

  }, [mgColor])

  const okContrastFgToIcon = checkContrastRatio(colors.project.icon, fgColor, 3)
  const okContrastMgToBg = checkContrastRatio(bgColor, mgColor, 3)
  const fabulousColor = okContrastFgToIcon
    ? fgColor
    : okContrastMgToBg
    ? mgColor
    : bgColor

  const aphroStyles = StyleSheet.create({
    bgColor: {
      backgroundColor: colors.project.icon,
      ":hover": { backgroundColor: `${fabulousColor}` },
    },
    border: { border: `solid ${fabulousColor}` },
    transition: { transition: transition },
  })

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.iconContainer}
    >
      <img
        src={icon}
        alt="github repository"
        className={`
          ${styles.icon} 
          ${css(
            aphroStyles.bgColor,
            aphroStyles.border,
            aphroStyles.transition
          )}`}
      />
    </a>
  )
}

/* eslint-disable */

import React, { useState, useEffect } from "react"
import { css, StyleSheet } from "aphrodite"

import { calculateLetterSpacing } from "../../api"
import styles from "./Links.module.css"
import { transitions } from "../../styles/aphrodite/default"
import { colorz } from "../../styles/aphrodite/colors"

export default ({ name, url, children }) => {
  const [letterSpacingMail, setLetterSpacingMail] = useState(0)
  const [letterSpacingGithub, setLetterSpacingGithub] = useState(0)
  const [letterSpacingTwitter, setLetterSpacingTwitter] = useState(0)
  const [letterSpacingLinkedin, setLetterSpacingLinkedin] = useState(0)

  useEffect(() => {
    const handleLetterSpacing = () => {
      setLetterSpacingMail(calculateLetterSpacing("#mail"))
      setLetterSpacingGithub(calculateLetterSpacing("#github"))
      setLetterSpacingTwitter(calculateLetterSpacing("#twitter"))
      setLetterSpacingLinkedin(calculateLetterSpacing("#linkedin"))
    }
    handleLetterSpacing()

    window.addEventListener("resize", handleLetterSpacing)
    return () => window.removeEventListener("resize", handleLetterSpacing)
  }, [])

  const aphroStyles = StyleSheet.create({
    color: { color: colorz.BLACK },
    shadow: {
      ":hover": { textShadow: `1vw 1vw ${colorz.AQUA}` },
    },
    transition: { transition: transitions.EXTERNAL_LINK },

    mailLetterSpacing: {
      ":hover": { letterSpacing: `${letterSpacingMail}px` },
    },
    githubLetterSpacing: {
      ":hover": { letterSpacing: `${letterSpacingGithub}px` },
    },
    twitterLetterSpacing: {
      ":hover": { letterSpacing: `${letterSpacingTwitter}px` },
    },
    linkedinLetterSpacing: {
      ":hover": { letterSpacing: `${letterSpacingLinkedin}px` },
    },
  })

  return (
    <a href={url} target="_blank" className={styles.external}>
      <div
        id={name}
        className={`
          ${styles.externalTitle} 
          ${css(
            aphroStyles.color,
            aphroStyles.shadow,
            aphroStyles.transition,
            aphroStyles[`${name}LetterSpacing`]
          )}`}
      >
        {children}
      </div>
    </a>
  )
}

/* eslint-disable */

import React from "react"
import { css, StyleSheet } from "aphrodite"
import ExternalLink from "./links/ExternalLink"

import styles from "./Contact.module.css"
import { fonts } from "../styles/aphrodite/fonts"
import { colorz } from "../styles/aphrodite/colors"

export default () => {
  const aphroStyles = StyleSheet.create({
    bgColor: { backgroundColor: colorz.CRIMSON },
    fgColor: { color: colorz.AQUA },
    font: fonts.OLD_ENGLISH_GOTHIC,
  })
  return (
    <section
      id="contact"
      className={`
      ${styles.container} 
      ${css(aphroStyles.bgColor, aphroStyles.fgColor)}`}
    >
      <h2
        className={`
        ${styles.title} 
        ${css(aphroStyles.font)}`}
      >
        Reach me here
      </h2>
      <ul className={styles.linksList}>
        <li>
          <ExternalLink name="mail" url="mailto:f.bruer@gmail.com">
            Mail
          </ExternalLink>
        </li>
        <li>
          <ExternalLink name="github" url="https://github.com/bruer">
            Github
          </ExternalLink>
        </li>
        <li>
          <ExternalLink name="twitter" url="https://twitter.com">
            Twitter
          </ExternalLink>
        </li>
        <li>
          <ExternalLink
            name="linkedin"
            url="https://linkedin.com/in/fredrik-bru%C3%A9r-5a2b22154"
          >
            LinkedIn
          </ExternalLink>
        </li>
      </ul>
    </section>
  )
}

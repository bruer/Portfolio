/* eslint-disable */

import React from "react"
import { Link } from "gatsby"
import { css } from "aphrodite"

import styles from "./Links.module.css"
import { textShadow, transition } from "../../styles/aphrodite/default"
import { font } from "../../styles/aphrodite/fonts"
import { color } from "../../styles/aphrodite/colors"

export default ({ slug, children }) => (
  <Link className={`${styles.internal}`} to={slug}>
    <h3
      className={`
      ${styles.internalTitle}
      ${css(
        color.internalLink,
        textShadow.internalLink,
        transition.internalLink
      )}`}
    >
      {children}
    </h3>
  </Link>
)

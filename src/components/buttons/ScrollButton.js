/* eslint-disable */

import React, { useEffect, useState } from "react"
import { css, StyleSheet } from "aphrodite"
import { scrollToTop } from "../../api"

import styles from "./Buttons.module.css"
import { opacities, transitions } from "../../styles/aphrodite/default"
import { colorz } from "../../styles/aphrodite/colors"

export default () => {
  const [headerHeight, setHeight] = useState(0)
  useEffect(() => {
    setHeight(document.querySelector("#header").offsetHeight)
  }, [])

  const [pagePostion, setPosition] = useState(-1)
  useEffect(() => {
    const handlePagePosition = () => {
      setPosition(window.scrollY)
    }
    window.addEventListener("scroll", handlePagePosition)
    return () => window.removeEventListener("scroll", handlePagePosition)
  }, [])

  const aphroStyles = StyleSheet.create({
    bgColor: { backgroundColor: colorz.IVORY },
    opacity: opacities.HOVER,
    opacityNone: { opacity: opacities.NONE },
    opacityHalf: { opacity: opacities.HALF },
    shadow: { ":hover": { boxShadow: `.5vw .5vw ${colorz.BLACK}` } },
    transition: { transition: transitions.BUTTON },
  })

  return (
    <button
      onClick={scrollToTop}
      className={`
        ${styles.default} 
        ${styles.scroll}
        ${css(
          aphroStyles.bgColor,
          aphroStyles.opacity,
          aphroStyles.shadow,
          aphroStyles.transition,
          pagePostion >= headerHeight
            ? aphroStyles.opacityHalf
            : aphroStyles.opacityNone
        )}`}
    >
      ↑
    </button>
  )
}

import React, { useEffect, useState } from "react"
import { css } from "aphrodite"
import { scrollToTop, getElementPosition } from "../api"
import styles from "./Button.module.css"

import { colorsStyleSheet } from "../styles/colorsNEW"

import { opacitiesStyleSheet, opacity, transition, boxShadowStyleSheet } from "../styles/default"

export default ({ home, scroll }) => {
  // const [headerHeight, setHeight] = useState(0)
  const [headerPostion, setPosition] = useState(0)

  useEffect(() => {
    // setHeight(getElementPosition(".header", "bottom"))

    let listener = () => {}
    window.addEventListener(
      "scroll",

      (listener = () =>
        setPosition(getElementPosition("documentElement", "top")))
    )
    return () => window.removeEventListener("scroll", listener)
  }, [])

  return (
    <>
      {home && (
        <a
          className={`
          ${styles.default} ${styles.home} 
          ${css(
            colorsStyleSheet.button, 
            // opacitiesStyleSheet.half
            opacity.button,
            transition.button,
            boxShadowStyleSheet.button
            )}`}
          href="/"
        >
          ←
        </a>
      )}
      {scroll && (
        <button
          className={`
          ${styles.default} 
          ${styles.scroll}
          ${css(
            colorsStyleSheet.button,
            opacity.button,
            transition.button,
            boxShadowStyleSheet.button,
            // headerPostion <= -headerHeight
            headerPostion <= -798
              ? opacitiesStyleSheet.half
              : opacitiesStyleSheet.none
          )}`}
          onClick={scrollToTop}
        >
          ↑
        </button>
      )}
    </>
  )
}

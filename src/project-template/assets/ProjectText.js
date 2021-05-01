/* eslint-disable */

import React, { useState } from "react"
import { handleStateOnResize } from "../../api"
import { css, StyleSheet } from "aphrodite"

export default ({ styles, mgColor, imageContainer, text }) => {
  const [projectText, setProjectTextDimensions] = useState(0)
  handleStateOnResize(setProjectTextDimensions, "#textContainer p")

  const aphroStyles = StyleSheet.create({
    color: { backgroundColor: mgColor },
    height: {
      height: `${
        document.body.offsetWidth > 768
          ? `${imageContainer.height}px`
          : "fit-content"
      }`,
      maxHeight: `${
        document.body.offsetWidth <= 768
          ? `${imageContainer.height}px`
          : "fit-content"
      }`,
    },
    flex: {
      display: "flex",
      alignItems: `${
        projectText.height < imageContainer.height ? "center" : "start"
      }`,
    },
  })

  return (
    <div
      id="textContainer"
      dangerouslySetInnerHTML={text}
      className={`
        ${styles.textContainer} 
        ${css(
          aphroStyles.color,
          aphroStyles.height,
          aphroStyles.flex
        )}`}
    />
  )
}

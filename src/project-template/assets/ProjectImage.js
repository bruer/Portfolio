/* eslint-disable */

import React, { useState } from "react"
import Img from "gatsby-image"
import { css, StyleSheet } from "aphrodite"
import { handleStateOnResize } from "../../api"
import { opacities, transitions } from "../../styles/aphrodite/default"

export default ({ styles, url, image, bgColor, fgColor }) => {
  const [imageText, setImageTextDimensions] = useState(0)
  handleStateOnResize(setImageTextDimensions, "#projectImageText")

  const aphroStyles = StyleSheet.create({
    color: { color: bgColor },
    opacity: opacities.HOVER,
    shadow: {
      ":hover": {
        boxShadow: ` ${
          document.body.offsetWidth > 768 ? `${imageText.left / 2}px` : "0px"
        }
        ${imageText.height}px
        ${fgColor}`,
      },
    },
    transition: { transition: transitions.PROJECT_IMAGE },
  })

  return (
    <div id="imageContainer" className={styles.imageContainer}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Img
          fluid={image}
          loading="auto"
          className={`
            ${styles.image} 
            ${css(
              aphroStyles.shadow,
              aphroStyles.opacity,
              aphroStyles.transition
            )}`}
        />
      </a>
      <p
        id="projectImageText"
        className={`
          ${styles.imageText} 
          ${css(aphroStyles.color)}`}
      >
        Click the image to try it
      </p>
    </div>
  )
}

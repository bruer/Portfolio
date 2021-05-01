/* eslint-disable */

import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { css, StyleSheet } from "aphrodite"

import HomeButton from "../components/buttons/HomeButton"
import ProjectImage from "./assets/ProjectImage"
import ProjectText from "./assets/ProjectText"
import Icon from "./assets/Icon"

import {
  getRandomProperty,
  getForegroundColor,
  handleStateOnResize,
} from "../api"

import styles from "./Project.module.css"
import { fonts } from "../styles/aphrodite/fonts"
import { colorz } from "../styles/aphrodite/colors"

export default ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  const { title, siteUrl, repoUrl, featuredImage } = frontmatter

  const [imageContainer, setContainerDimensions] = useState(0)
  handleStateOnResize(setContainerDimensions, "#imageContainer")

  const [bgColor, setBgColor] = useState("")
  useEffect(() => {
    setBgColor(getRandomProperty(colorz, true))
  }, [])

  const [fgColor, setFgColor] = useState("")
  useEffect(() => {
    if (bgColor) {
      setFgColor(getForegroundColor(bgColor, colorz, true))
    }
  }, [bgColor])

  const [mgColor, setMgColor] = useState("")
  useEffect(() => {
    if (fgColor) {
      setMgColor(getForegroundColor(fgColor, colorz, true))
    }
  }, [fgColor])

  const aphroStyles = StyleSheet.create({
    bgColor: { backgroundColor: bgColor },
    fgColor: { color: fgColor },
    mainFont: { fontFamily: fonts.RALEWAY },
    font: fonts.OLD_ENGLISH_GOTHIC,
  })

  return (
    <section
      className={`
        ${styles.container} 
        ${css(aphroStyles.mainFont, aphroStyles.bgColor, aphroStyles.fgColor)}`}
    >
      <HomeButton bgColor={bgColor} fgColor={fgColor} mgColor={mgColor} />
      <h1
        className={`
          ${styles.title} 
          ${css(aphroStyles.font)}`}
      >
        {title}
      </h1>
      <div className={styles.contentContainer}>
        <ProjectImage
          styles={styles}
          url={siteUrl}
          image={featuredImage.childImageSharp.fluid}
          bgColor={bgColor}
          fgColor={fgColor}
        />
        <ProjectText
          styles={styles}
          mgColor={mgColor}
          imageContainer={imageContainer}
          text={{ __html: html }}
        />
      </div>
      <Icon
        url={repoUrl}
        styles={styles}
        bgColor={bgColor}
        fgColor={fgColor}
        mgColor={mgColor}
      />
    </section>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        siteUrl
        repoUrl
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

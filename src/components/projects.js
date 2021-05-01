/* eslint-disable */

import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { css, StyleSheet } from "aphrodite"

import styles from "./Projects.module.css"
import { transitions } from "../styles/aphrodite/default"
import { fonts } from "../styles/aphrodite/fonts"
import { colorz } from "../styles/aphrodite/colors"

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `
  )

  const aphroStyles = StyleSheet.create({
    bgColor: { backgroundColor: colorz.THISTLE },
    fgColor: { color: colorz.GREEN },
    dateColor: { color: colorz.BLACK },
    headingColor: { color: colorz.DARKOLIVEGREEN },
    font: fonts.OLD_ENGLISH_GOTHIC,
    transition: { transition: transitions.INTERNAL_LINK },
  })

  return (
    <section
      id="projects"
      className={`
        ${styles.container}
        ${css(aphroStyles.bgColor, aphroStyles.fgColor)}`}
    >
      <h2 className={`${styles.title} ${css(aphroStyles.font)}`}>
        My Projects
      </h2>
      <ul className={styles.projectsList}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id} className={styles.project}>
            <Link
              to={node.fields.slug}
              className={`${styles.link} ${css(aphroStyles.fgColor)}`}
            >
              <h3
                className={`
                  ${styles.projectTitle}
                  ${css(aphroStyles.headingColor, aphroStyles.transition)}`}
              >
                {node.frontmatter.title}
              </h3>
              <p
                className={`
                  ${styles.date} 
                  ${css(aphroStyles.dateColor)}`}
              >
                {node.frontmatter.date}
              </p>
              <p className={styles.excerpt}>{node.excerpt}</p>
            </Link>
          </li>

          // <li
          //   key={node.id}
          //   className={`${styles.project} ${css()
          //   // textShadow.internalLink,
          //   // transition.internalLink
          //   }`}
          // >
          //   <Link
          //     className={`${styles.link} ${
          //       css()
          //       // textShadow.internalLink,
          //       // transition.internalLink
          //     }`}
          //     to={node.fields.slug}
          //   >
          //     <h3
          //       className={`
          //         ${styles.projectTitle}
          //         ${css(
          //           color.internalLink
          //           // textShadow.internalLink,
          //           // transition.internalLink
          //         )}`}
          //     >
          //       {node.frontmatter.title}
          //     </h3>
          //   </Link>
          //   <p
          //     className={`
          //   ${styles.date}
          //   ${css(color.date)}`}
          //   >
          //     {node.frontmatter.date}
          //   </p>
          //   <p className={styles.excerpt}>{node.excerpt}</p>
          // </li>
        ))}
      </ul>
    </section>
  )
}

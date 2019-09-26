import React from "react"
import styles from "./header.module.css"
import { graphql, useStaticQuery } from "gatsby"

const Link = props => (
  <a className={styles.link} href={props.url}>
    {props.text}
  </a>
)

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <header className={styles.container}>
      <h1>{data.site.siteMetadata.title}</h1>
      <nav>
        <Link text="Projects" url="#projects" />
        <Link text="About" url="#about" />
        <Link text="Contact" url="#contact" />
      </nav>
    </header>
  )
}

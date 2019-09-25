import React from "react"
// import Navigation from "./navigation"
import styles from "./header.module.css"

const Link = props => (
  <a className={styles.link} href={props.url}>
    {props.text}
  </a>
)

export default () => (
  <header>
    <h1>Fredrik's Portofolio</h1>
    <nav>
      <Link text="Projects" url="#projects" />
      <Link text="About" url="#about" />
      <Link text="Contact" url="#contact" />
    </nav>
  </header>
)

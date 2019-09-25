import React from "react"
import styles from "./contact.module.css"

const Link = props => (
  <a className={styles.link} href={props.url} target={props.target}>
    {props.text}
  </a>
)

export default () => (
  <section className={styles.container} id="contact">
    <h2>Reach me here</h2>
    <ul className={styles.list}>
      <li>
        <Link className={styles.link} text="Mail" url="mailto:f.bruer@gmail.com" target="_blank" />
      </li>
      <li>
        <Link text="Github" url="https://github.com/bruer" target="_blank" />
      </li>
      <li>
        <Link text="Twitter" url="https://twitter.com" target="_blank" />
      </li>
      <li>
        <Link text="Linkedin" url="https://linkedin.com/in/fredrik-bru%C3%A9r-5a2b22154" target="_blank" />
      </li>
    </ul>
  </section>
)

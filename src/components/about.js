import React from "react"
import styles from "./about.module.css"
import bike from "../img/me-crop.jpg"

export default () => (
  <section className={styles.container} id="about">
    <h2>Hello,</h2>
    <div className={styles.infoBox}>
      <img className={styles.image} src={bike} alt="me" />
      <div>
        <h3>I'm Fredrik</h3>
        <p>former postman who nowadays study front end development</p>
      </div>
    </div>
  </section>
)

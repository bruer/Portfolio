import React from "react"
import styles from "./footer.module.css"

export default () => (
  <footer>
    <p className={styles.copyright}>© {new Date().getFullYear()}</p>
  </footer>
)

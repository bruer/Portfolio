import React from "react"
import styles from "./button.module.css"

export default () => (
  <button
    style={{ display: "block" }}
    className={styles.button}
    onClick={() => {
      document.documentElement.scrollTop = 0
    }}
  >
    To top
  </button>
)

// const btn = document.querySelector("#to-top-btn")

// window.onscroll = () => {
//   console.log(document.documentElement.scrollTop)
//   if (
//     document.body.scrollTop > 20 ||
//     document.documentElement.scrollTop > 20
//   ) {
//     btn.style.display = "block"
//   } else {
//     btn.style.display = "none"
//   }
// }

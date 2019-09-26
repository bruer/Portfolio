import React from "react"
import styles from "./button.module.css"

export default () => (
  <button
    className={styles.button}
    id="to-top-btn"
    onClick={() => {
      document.documentElement.scrollTop = 0
    }}
  >
    To top
  </button>
)

// const btn = document.querySelector("#to-top-btn")

// if (window.addEventListener) {
//   window.addEventListener(
//     "DOMContentLoaded",
//     () => {
//       console.log(btn)
//     },
//     false
//   )
//   window.addEventListener(
//     "load",
//     () => {
//       console.log(btn)
//     },
//     false
//   )
//   window.addEventListener(
//     "scroll",
//     () => {
//       console.log(btn)
//     },
//     false
//   )
// }

// console.log(btn)
// console.log('hej')

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

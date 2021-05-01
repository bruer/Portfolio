// /* eslint-disable */

// import React from "react"
// import { Link } from "gatsby"
// import { css } from "aphrodite"
// import styles from "./CustomLink.module.css"

// import { fontsStyleSheet } from "../styles/fontsNEW"
// import { foregroundColorsStyleSheet } from "../styles/colorsNEW"
// import { shadowsStyleSheet, transition } from "../styles/default"

// export default ({
//   scroll,
//   internal,
//   external,
//   children,
//   slug,
//   url,
//   target,
//   section,
//   click,
// }) => (
//   <>
//     {scroll && (
//       <button
//         className={`
//         ${styles.default} 
//         ${styles.scroll} 
//         ${css(
//           fontsStyleSheet.scrollLink,
//           foregroundColorsStyleSheet.scrollLink,
//           shadowsStyleSheet.scrollLink
//         )}`}
//         id={section}
//         onClick={click}
//       >
//         {children}
//       </button>
//     )}
//     {internal && (
//       <Link
//         className={`
//         ${styles.default} 
//         ${styles.internal} 
//         ${css(
//           fontsStyleSheet.headingSmall,
//           foregroundColorsStyleSheet.internalLink,
//           shadowsStyleSheet.internalLink
//         )}`}
//         to={slug}
//       >
//         {children}
//       </Link>
//     )}
//     {external && (
//       <a
//         className={`
//         ${styles.default} 
//         ${styles.external} 
//         ${css(
//           fontsStyleSheet.headingSmall,
//           shadowsStyleSheet.externalLink,
//           foregroundColorsStyleSheet.externalLink
//         )}`}
//         href={url}
//         target={target}
//       >
//         {children}
//       </a>
//     )}
//   </>
// )

import { StyleSheet } from "aphrodite"
import { colors } from "./colorsNEW"

export const shadowsObject = {
  firstLetter: "15vw 10vw mediumvioletred",
}

export const shadowsStyleSheet = StyleSheet.create({
  firstLetter: { textShadow: "15vw 10vw mediumvioletred" },
  externalLink: {
    ":hover": { textShadow: `1vw 1vw ${colors.contact.foreground}` },
  },
  // externalLink: { ":hover": { textShadow: c } },
  // externalLink: { ":hover": { textShadow: "1vw 1vw #14EDC4" } },
})

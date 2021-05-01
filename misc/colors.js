import { StyleSheet } from "aphrodite"

export const colorsObject = {
  black: "black",
  blanchedalmond: "blanchedalmond",
  crimson: "crimson",
  gainsboro: "gainsboro",
  ivory: "ivory",
  lightgoldenrodyellow: "lightgoldenrodyellow",
  steelblue: "steelblue",
  tomato: "tomato",
  thistle: "thistle",
}

export const sectionColors = {
  tomato: "tomato",
  thistle: "thistle",
  steelblue: "steelblue",
  crimson: "crimson",
}

export const foregroundColors = {
  header: "#00008F",
  projects: "#1F3E1E",
  about: "#ffebcd",
  contact: "#14EDC4",
}

export const backgroundColors = {
  header: "#ff6347",
  projects: "#d8bfd8",
  about: "#4682b4",
  contact: "#dc143c",
}

export const colors = {
  header: { background: "#ff6347", foreground: "#00008F", heading: "#242424" },
  // projects: { foreground: "#4D2D00", date: "#213845" },
  projects: {
    background: "#d8bfd8",
    foreground: "#1F3E1E",
    heading: "#335233",
    date: "#213845",
  },
  about: { background: "#4682b4", foreground: "#4682b4", heading: "#ffebcd" },
  // contact: { background: "#dc143c", foreground: "#000", heading: "#14EDC4" },
  contact: { background: "#dc143c", foreground: "#BCF0E2", heading: "#14EDC4" },
}

export const foregroundColorsStyleSheet = StyleSheet.create({
  header: { color: colors.header.foreground },
  projects: { color: colors.projects.foreground },
  about: { color: colors.about.foreground },
  contact: { color: colors.contact.foreground },
})

export const headingColorsStyleSheet = StyleSheet.create({
  header: { color: colors.header.heading },
  projects: { color: colors.projects.heading },
  about: { color: colors.about.heading },
  contact: { color: colors.contact.heading },
})

export const componentColorsStyleSheet = StyleSheet.create({
  body: { color: colorsObject.blanchedalmond },
  header: { color: colorsObject.tomato },
  projects: { color: colors.projects.date },
  about: { color: colorsObject.steelblue },
  contact: { color: colorsObject.crimson },
  footer: { color: colorsObject.ivory },
  button: { color: colorsObject.ivory },
  link: { color: colorsObject.black },
  icon: { color: colorsObject.lightgoldenrodyellow },
})

export const componentBackgroundColorsStyleSheet = StyleSheet.create({
  header: { backgroundColor: colors.header.background },
  projects: { backgroundColor: colorsObject.thistle },
  about: { backgroundColor: colorsObject.steelblue },
  contact: { backgroundColor: colorsObject.crimson },
  footer: { backgroundColor: colorsObject.black },
  button: { backgroundColor: colorsObject.ivory },
  link: { backgroundColor: colorsObject.black },
  icon: { backgroundColor: colorsObject.lightgoldenrodyellow },
})

export const colorsStyleSheet = StyleSheet.create({
  black: { color: colorsObject.black },
  blanchedalmond: { color: colorsObject.blanchedalmond },
  crimson: { color: colorsObject.crimson },
  gainsboro: { color: colorsObject.gainsboro },
  ivory: { color: colorsObject.ivory },
  lightgoldenrodyellow: { color: colorsObject.lightgoldenrodyellow },
  steelblue: { color: colorsObject.steelblue },
  tomato: { color: colorsObject.tomato },
  thistle: { color: colorsObject.thistle },
})

export const backgroundColorsStyleSheet = StyleSheet.create({
  black: { backgroundColor: colorsObject.black },
  blanchedalmond: { backgroundColor: colorsObject.blanchedalmond },
  crimson: { backgroundColor: colorsObject.crimson },
  gainsboro: { backgroundColor: colorsObject.gainsboro },
  ivory: { backgroundColor: colorsObject.ivory },
  lightgoldenrodyellow: { backgroundColor: colorsObject.lightgoldenrodyellow },
  steelblue: { backgroundColor: colorsObject.steelblue },
  tomato: { backgroundColor: colorsObject.tomato },
  thistle: { backgroundColor: colorsObject.thistle },
})

export const hoverColorsStyleSheet = StyleSheet.create({
  icon: { ":hover": { backgroundColor: colorsObject.lightgoldenrodyellow } },
})

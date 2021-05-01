/* eslint-disable */

/** @module src/api/index */

import { hex } from "wcag-contrast"
import { useEffect } from "react"
import { firstLetterFonts } from "../styles/aphrodite/fonts"

/**
 * if the spacing between the characters in a selected word is larger than 0,
 * return the amount of space required to expand the word across the viewport
 * (left to right), or else return the number of letters in the word.
 *
 * @param {string} selector get element (that contains the word) by a selector
 *
 * @returns the amount of pixels between each character or the number of letters
 */
export function calculateLetterSpacing(selector) {
  const pageWidth = document.body.getBoundingClientRect().width

  const { width, height, left } = document
    .querySelector(selector)
    .getBoundingClientRect()

  const distance = pageWidth - height - (width + left)

  const letters = document.querySelector(selector).innerHTML.length

  let letterSpacing = distance / letters

  letterSpacing = letterSpacing > 0 ? letterSpacing : letters

  return letterSpacing > 0 ? letterSpacing : letters
}

/**
 * @param {string} firstColor must be in hex format
 * @param {string} secondColor must be in hex format
 * @param {number} threshold value that the ratio should surpass
 *
 * @returns contrast ratio between the colors if the ratio is greater than the threshold
 */
export function checkContrastRatio(firstColor, secondColor, threshold) {
  const ratio = hex(firstColor, secondColor)

  return ratio >= threshold ? ratio : 0
}

/**
 * @param {object} object object to convert
 * @param {boolean} getPropertiesValues get the values from the properties
 *
 * @returns {[string]} an array with either the names or the values of the object's properties
 */
export function convertToArray(object, getPropertiesValues) {
  let array = []

  for (const property in object) {
    // console.log(property.toUpperCase())

    getPropertiesValues
      ? (array = [...array, object[property]])
      : (array = [...array, property])
  }
  return array
}

/**
 * @param {array} styleSheets array of StyleSheet objects
 *
 * @returns {[string]} array of color values
 */
export function getColorsFromStyleSheetObjects(styleSheets) {
  let colors = []

  styleSheets.forEach(
    styleSheet => (colors = [...colors, styleSheet._definition.color])
  )
  return colors
}

/**
 * @param {string} backgroundColor must be in hex format
 * @param {object} colors object with properties of color values (must be in hex format) to compare with the background color
 * @param {boolean} random get a random color
 *
 * @returns {string} foreground color with highest contrast ratio to the background color or a random color with an acceptable contrast ratio
 */
export function getForegroundColor(backgroundColor, colors, random) {
  let foregroundColors = []
  let highest = 0

  colors = convertToArray(colors, true)

  colors.forEach(color => {
    const okContrast = checkContrastRatio(backgroundColor, color, 4.5)

    if (random && okContrast) {
      foregroundColors = [...foregroundColors, color]
    } else {
      if (okContrast > highest) {
        highest = okContrast
        foregroundColors = [color]
      }
    }
  })

  const fgColor = foregroundColors[getRandomNumber(foregroundColors.length)]

  // console.log(foregroundColors)
  // console.log(fgColor)
  // console.log(checkContrastRatio(backgroundColor, fgColor))

  return fgColor
}

export function getNiceColors(backgroundColor, colors) {
  let niceColors = []

  colors = convertToArray(colors, true)

  colors.forEach(color => {
    const okContrast = checkContrastRatio(backgroundColor, color, 3)

    if (okContrast) {
      niceColors = [...niceColors, color]
    }
  })
  return niceColors
}

/**
 * @param {number} range
 *
 * @returns a random number within the given range
 */
export function getRandomNumber(range) {
  return Math.floor(Math.random() * range)
}

/**
 * @param {object} object object with the properties
 * @param {boolean} getPropertyValue get value of property from the object
 *
 * @returns {string} either name or value of a property at a random index in an array converted from the object
 */
export function getRandomProperty(object, getPropertyValue) {
  const array = convertToArray(object, getPropertyValue)

  return array[getRandomNumber(array.length)]
}

/**
 * @param {{key}} object
 * @param {string} property property to get from the object
 *
 * @returns {[string]} an array with the values from the requested property
 */
export function getValuesOfProperty(object, property) {
  let array = []

  Object.entries(object).forEach(([, value]) => {
    if (typeof value === "object") {
      Object.entries(value).forEach(([key]) => {
        if (key === property) {
          array = [...array, value[property]]
        }
      })
    } else {
      array = [...array, value]
    }
  })
  return array
}

/**
 * @returns the current year
 */
export function getYear() {
  return new Date().getFullYear()
}

/**
 * get the dimensions of an element and set these to the component's state.
 * if the page is resized the state will be updated with the new dimensions
 * of the element.
 *
 * @param {function} setState React setState function
 * @param {string} selector get the element by a selector
 */
export function handleStateOnResize(setState, selector) {
  useEffect(() => {
    const handler = () => {
      setState(document.querySelector(selector).getBoundingClientRect())
    }
    handler()

    window.addEventListener("resize", handler)
    return () => window.removeEventListener("resize", handler)
  }, [])
}

/**
 * scroll viewport to top of the page
 */
export function scrollToTop() {
  window.scrollTo(0, 0)
}

/**
 * @param {{property: string}} object
 * @param {string} objectProperty property of the object
 * @returns {[string]} an array with the values from the requested property
 */
export function getProperty(object, objectProperty) {
  let array = []

  if (!object) {
    throw new Error(`object is ${object}`)
  } else if (object.constructor !== Object) {
    throw new Error(
      `expected ${
        object.constructor === Array ? `[${object}]` : `${object}`
      } to have a constructor of type Object but is of type ${
        object.constructor.name
      }`
    )
  } else if (Object.entries(object).length < 1) {
    throw new Error("the object is empty")
  } else if (objectProperty === undefined || objectProperty === null) {
    throw new Error(`objectProperty is ${objectProperty}`)
  } else if (objectProperty.constructor !== String) {
    throw new Error(
      `expected ${
        objectProperty.constructor === Array
          ? `[${objectProperty}]`
          : `${objectProperty}`
      } to be a string but is of type ${objectProperty.constructor.name}`
    )
  } else if (objectProperty.trim() === "") {
    throw new Error("argument objectProperty is empty")
  } else {
    for (const property in object) {
      if (typeof object[property] === "string") {
        if (property === objectProperty) {
          array = [...array, object[property]]
        }
      } else {
        throw new Error(
          `expected value ${object[property]}` +
            ` of property ${property} to be a string` +
            ` but is of type ${typeof object[property]}`
        )
      }
    }
  }
  return array
}

/**
 * @param {string} selector get element node by selector
 * @param {string} property to match a property of the getBoundingClientRect method
 *
 * @returns position of the element relative to the viewport
 */
export function getElementPosition(selector, property) {
  let position = 0
  const element =
    selector === "documentElement"
      ? document.documentElement
      : document.querySelector(selector)

  switch (property) {
    case "top":
      position = element.getBoundingClientRect().top
      break
    case "left":
      position = element.getBoundingClientRect().left
      break
    case "right":
      position = element.getBoundingClientRect().right
      break
    case "bottom":
      position = element.getBoundingClientRect().bottom
      break
    default:
      throw new Error(
        property
          ? `${property} is not a valid property for getBoundingClientRect`
          : `argument for the property of getBoundingClientRect was not given`
      )
  }
  // console.log(position)
  return position
}

export function getElementDimensions(selector, property) {
  let length = 0
  const element = document.querySelector(selector)

  switch (property) {
    case "width":
      length = element.width
      break
    case "height":
      length = element.height
      break
    default:
      throw new Error(
        property
          ? `${property} is not a valid property of the ${HTMLElement.name} interface`
          : `argument for the property of "${selector}" was not given`
      )
  }
  // console.log(position)
  return length
}

/**
 * @param {string} backgroundColor must be in hex format
 * @param {[string]} colors array of color values (must be in hex format) to compare with the background color
 *
 * @returns foreground color with highest contrast ratio to background color
 */
export function getForegroundColor(backgroundColor, colors) {
  let foregroundColor = "#000"
  let highest = 0

  colors.forEach(color => {
    const ratio = checkContrastRatio(backgroundColor, color)

    if (ratio > highest) {
      highest = ratio
      foregroundColor = color
    }
  })
  return foregroundColor
}

/**
 * @param {string} backgroundColor must be in hex format
 * @param {[string]} colors array of color values (must be in hex format) to compare with the background color
 * @param {boolean} random get a random color
 *
 * @returns {string} a random color with an acceptable contrast ratio to the background color
 */
export function getRandomForegroundColor(backgroundColor, colors) {
  let foregroundColors = []

  colors.forEach(color => {
    const ratio = checkContrastRatio(backgroundColor, color)

    if (ratio) {
      foregroundColors = [...foregroundColors, color]
    }
  })
  return foregroundColors[getRandomNumber(foregroundColors.length)]
}

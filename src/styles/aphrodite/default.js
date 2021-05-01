export const opacities = {
  NONE: 0,
  HALF: 0.5,
  FULL: 1,
  HOVER: { opacity: 0.5, ":hover": { opacity: 1 } },
}

export const transitions = {
  BUTTON: "opacity .5s, box-shadow .5s",
  FIRST_LETTER: "text-shadow 2.5s linear",
  COPYRIGHT: "text-shadow 1s",
  ICON: "background-color 1s",
  ABOUT_IMAGE: "box-shadow 2s",
  PROJECT_IMAGE: "opacity .75s, box-shadow .75s",
  SCROLL_LINK: "opacity 1s ease-in, text-shadow 1s, letter-spacing 1s",
  INTERNAL_LINK: "text-shadow 1s, letter-spacing 1s",
  EXTERNAL_LINK: "text-shadow 1s, letter-spacing 1s ease-in-out",
}

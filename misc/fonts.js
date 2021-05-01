import { StyleSheet } from "aphrodite"

export const fonts = {
  raleway: "Raleway, sans-serif",
  oldEnglish: "Old English",
  oldEnglishGothic: "Old English Gothic",
  cinzelDecorative: "Cinzel Decorative",
}

export const fontsStyleSheet = StyleSheet.create({
  body: {
    fontFamily: fonts.raleway,
    fontWeight: "normal",
  },
  oldEnglish: {
    fontFamily: fonts.oldEnglish,
    textTransform: "uppercase",
  },
  oldEnglishGothic: {
    fontFamily: fonts.oldEnglishGothic,
    textTransform: "uppercase",
    fontWeight: "normal",
  },
  cinzelDecorative: {
    fontFamily: fonts.cinzelDecorative,
    textTransform: "uppercase",
    fontWeight: "900",
  },
  raleway: {
    fontFamily: fonts.raleway
  }
})

export const firstLetterFonts = {
  Akronim: "Akronim",
  Almendra: "Almendra Display",
  Astloch: "Astloch",
  Benguiat: "Benguiat",
  Bonbon: "Bonbon",
  Creepster: "Creepster",
  ElsieSwash: "Elsie Swash",
  Ewert: "Ewert",
  FrizQuadrata: "Friz Quadrata",
  GlassAntiqua: "Glass Antiqua",
  MedievalSharp: "MedievalSharp",
  Megrim: "Megrim",
  NewRocker: "New Rocker",
  OldEnglishGothic: "Old English Gothic",
  OldEnglish: "Old English Std",
  Pirata: "Pirata One",
  RuslanDisplay: "Ruslan Display",
  Rye: "Rye",
  Sevillana: "Sevillana",
  Spirax: "Spirax",
  UnifrakturCook: "UnifrakturCook",
  UnifrakturMaguntia: "UnifrakturMaguntia",
}

export const firstLetterFontsStyleSheet = StyleSheet.create({
  Akronim: { fontFamily: firstLetterFonts.Akronim },
  Almendra: { fontFamily: firstLetterFonts.Almendra },
  Astloch: { fontFamily: firstLetterFonts.Astloch },
  Benguiat: { fontFamily: firstLetterFonts.Benguiat },
  Bonbon: { fontFamily: firstLetterFonts.Bonbon },
  Creepster: { fontFamily: firstLetterFonts.Creepster },
  ElsieSwash: { fontFamily: firstLetterFonts.ElsieSwash },
  Ewert: { fontFamily: firstLetterFonts.Ewert },
  FrizQuadrata: { fontFamily: firstLetterFonts.FrizQuadrata },
  GlassAntiqua: { fontFamily: firstLetterFonts.GlassAntiqua },
  MedievalSharp: { fontFamily: firstLetterFonts.MedievalSharp },
  Megrim: { fontFamily: firstLetterFonts.Megrim },
  NewRocker: { fontFamily: firstLetterFonts.NewRocker },
  OldEnglishGothic: { fontFamily: firstLetterFonts.OldEnglishGothic },
  OldEnglish: { fontFamily: firstLetterFonts.OldEnglish },
  PirataPirata: { fontFamily: firstLetterFonts.PirataPirata },
  RuslanDisplay: { fontFamily: firstLetterFonts.RuslanDisplay },
  Rye: { fontFamily: firstLetterFonts.Rye },
  Sevillana: { fontFamily: firstLetterFonts.Sevillana },
  Spirax: { fontFamily: firstLetterFonts.Spirax },
  UnifrakturCook: { fontFamily: firstLetterFonts.UnifrakturCook },
  UnifrakturMaguntia: { fontFamily: firstLetterFonts.UnifrakturMaguntia },
})

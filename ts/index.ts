enum eColorThemes {
  light = 'light',
  dark = 'dark'
}

enum eLangs {
  eng = 'en',
  rus = 'ru'
}

type iColorThemes = eColorThemes.light | eColorThemes.dark;
type iLangs = eLangs.eng | eLangs.rus;

export {
  eColorThemes,
  eLangs,
  iColorThemes,
  iLangs,
};

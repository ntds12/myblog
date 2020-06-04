let firstFont = false;
let secondFont = false;

const firstFontLoaded = () => firstFont = true;
const secondFontLoaded = () => secondFont = true;

export {
  firstFont,
  secondFont,
  firstFontLoaded,
  secondFontLoaded
}
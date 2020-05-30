export const rand = () => {
  const randNum = Math.random() * 3 - 3;
  if (randNum > -.5 && randNum < .5) return rand();
  return randNum;
}

export const randForHeading = () => {
  const randNum = Math.random() * 8;
  return Math.floor(randNum);
}

export const nNumberOfBlackRects = () => {
  const randNum = Math.random() * 4;
  return Math.floor(randNum);
}

export const randDelay = () => {
  const randNum = Math.random() * 100 + 10;
  return randNum;
}
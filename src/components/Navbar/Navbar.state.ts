var counterDown: any = 0;
var counterUp: any = 0;

const incrementDown = () => {
  return new Promise((res: any) => {
    counterDown++;
    res();
  });
}

const downDefault = () => {
  counterDown = 0;
}

const incrementUp = () => {
  counterUp++;
}

const upDefault = () => {
  counterUp = 0;
}

export {
  counterDown,
  counterUp,
  incrementDown,
  incrementUp,
  downDefault,
  upDefault
};
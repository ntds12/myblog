var counter1 = 0;
var loaderClone = 0;

const loaderCloneInc = () => loaderClone++;
const loaderCloneHalf = () => loaderClone = 50;

const loaderCloneFull = () => loaderClone = 100;

export {
  counter1,
  loaderClone,
  loaderCloneHalf,
  loaderCloneFull,
  loaderCloneInc
};
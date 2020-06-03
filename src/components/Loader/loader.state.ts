var counter1 = 0;
var loaderClone = 0;


const incrementCounter1 = () => counter1++;
const incerementLoaderClone = () => loaderClone++;
const loaderCloneHalf = () => loaderClone = 50;
const loaderCloneFull = () => loaderClone = 100;

export {
  counter1,
  loaderClone,
  incrementCounter1,
  incerementLoaderClone,
  loaderCloneHalf,
  loaderCloneFull
};
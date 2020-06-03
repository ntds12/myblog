import React, { FC, useEffect, useState, memo } from 'react';

import gif from "./g.gif";
import { sleep } from '../../utils/sleep';
import {
  counter1,
  incrementCounter1,
  loaderClone,
  incerementLoaderClone,
  loaderCloneHalf,
  loaderCloneFull,
  loaderDefault
} from './loader.state';

const loader: FC<any> = ({ fontLoad, fontLoad2, allow }) => {
  let [loadedNumber, setLoadedNumber] = useState(0);

  const loadedWatcher = async () => {


    while (true) {

      if (loaderClone > 100) {
        await sleep(100);
        loaderDefault();
        break;
      }
      setLoadedNumber((val: any) => val + 1);
      incerementLoaderClone();


      await sleep(1);
    }

    if (fontLoad && counter1 === 0) {
      loaderCloneHalf();
      setLoadedNumber(50);
    }

    if (fontLoad2) {
      loaderCloneFull();
      setLoadedNumber(100);

    }

    console.log(allow);

    incrementCounter1();

  }

  useEffect(() => {
    loadedWatcher();
  }, [fontLoad, fontLoad2]);



  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: "200px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
      }}
    >
      <img
        src={gif}
        alt="loading_gif"
        style={{
          width: "80px"
        }}
      />
      <div
        style={{
          color: "white",
          fontFamily: "sans-serif",
          letterSpacing: "1px"
        }}
      >Buffering {loaderClone}%</div>
    </div>
  )
}

export default loader;
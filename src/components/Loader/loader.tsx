import React, { FC, useEffect, useState, memo, useRef } from 'react';

import gif from "./g.gif";
import { sleep } from '../../utils/sleep';
import {
  loaderClone, loaderCloneHalf, loaderCloneFull, loaderCloneInc
} from './loader.state';
import { firstFont, secondFont, firstFontLoaded } from '../index.state';


var locationArr: any = [];
const loader: FC<any> = () => {
  function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => ++value); // update the state to force render
  }
  let [loadedNumber, setLoadedNumber] = useState(0);
  let [topVal, setTopVal] = useState("50%");
  let interval: any = useRef();

  const inc = () => {
    return new Promise((res) => {
      setLoadedNumber((val: any) => val + 1);
      res();
    });
  }


  const loadedWatcher = async () => {
    while (true) {

      if (firstFont && secondFont) {
        setLoadedNumber((val: any) => 100);
        loaderCloneFull();
        break;
      }

      if (loaderClone < 100) {
        await inc();
      };

      if (!firstFont || !secondFont) {
        loaderCloneInc();
      }
      await sleep(10);
    }
  }

  useEffect(() => {
    loadedWatcher();

  }, []);


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
        top: topVal,
        left: "50%",
        transform: "translate(-50%,-50%)",

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
      >Buffering {loadedNumber}%</div>
    </div>
  )
}

export default loader;
import React, { FC, useEffect, useState, memo, useRef } from 'react';

import gif from "./g.gif";
import { sleep } from '../../utils/sleep';
import {
  counter1,
  incrementCounter1,
  loaderClone,
  loaderCloneHalf,
  loaderCloneFull,
  incerementLoaderClone,
  loaderDefault,
} from './loader.state';


var locationArr: any = [];
const loader: FC<any> = ({ fontLoad, fontLoad2, allow }) => {
  let [loadedNumber, setLoadedNumber] = useState(0);
  let interval: any = useRef();


  const loadedWatcher = async () => {

    if (fontLoad && fontLoad.number === 49 && counter1 === 0) {
      loaderCloneHalf();
      setLoadedNumber(1);
    }

    if (fontLoad && fontLoad2.number === 49) {
      loaderCloneFull();
      setLoadedNumber(1);
      await sleep(100)
    }


    var loc = window.location.href.split("/");
    locationArr.push(loc[loc.length - 2] + "/" + loc[loc.length - 1]);
    if (locationArr.length > 50 && locationArr[locationArr.length - 1] !== locationArr[locationArr.length - 2]) {
      locationArr = [];
      loaderDefault();
    }

    if (loaderClone < 99) incerementLoaderClone();
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
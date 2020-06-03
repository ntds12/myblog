import React, { FC, useEffect, useState, memo } from 'react';

import gif from "./g.gif";
import { sleep } from '../../utils/sleep';

const loader: FC<any> = ({ fontLoad, fontLoad2 }) => {
  let [loadedNumber, setLoadedNumber] = useState(0);
  let loadedClone = 0;

  const loadedWatcher = async () => {


    if (loadedNumber < 50 || (loadedNumber >= 50 && loadedNumber < 100)) {
      while (true) {
        setLoadedNumber((val: any) => val + 1);
        loadedClone++;

        if (loadedClone === 50 || loadedNumber === 100) {
          break;
        }

        await sleep(5);
      }
    }

    if (fontLoad) {
      loadedClone = 50;
      setLoadedNumber((val: any) => 50);
    }

    if (fontLoad2) {
      loadedClone = 100;
      setLoadedNumber((val: any) => 100);
    }



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
      >Buffering {loadedNumber}%</div>
    </div>
  )
}

export default loader;
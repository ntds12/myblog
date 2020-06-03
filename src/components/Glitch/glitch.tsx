import React, {
  useState,
  useEffect,
  useRef
} from 'react';

import glitchImage from './glich.jpg';

import * as GlitchStyles from './Glitch.module.scss';
import { sleep } from '../../utils/sleep';
import shortid from 'shortid';
import { randRect, randPick } from './glitchRandomUtil';

const glitch = () => {

  const [imgs, setImgs]: any = useState([]);
  const [update, setUpdate]: any = useState("");
  let valArr: any = [];

  const mounted = useRef(false);

  const setImg = (signal: any) => {
    if (mounted.current) {
      setImgs((arr: any) => arr = Array.from(Array(5)).map(el => {
        return <img
          src={glitchImage as any}
          className={GlitchStyles.glitch_one} key={shortid.generate() + shortid.generate()}
          style={{
            "position": "absolute",
            "clip": `rect(${valArr[randPick()]}px,${valArr[randPick()]}px,${valArr[randPick()]}px,${valArr[randPick()]}px)`,
            "top": `${valArr[randPick()]}px`,
            "right": `${valArr[randPick()]}px`,
            "zIndex": 3
          }}
        />
      }));
    }
  }


  const changeVars = async (signal: any) => {

    if (mounted.current) {
      while (true) {
        for (let k = 0; k < 10; k++) {
          valArr = [];
          for (let i = 0; i < 20; i++) {
            valArr.push(randRect());
          }

          if (mounted.current) setImg(signal);

          if (mounted.current) setUpdate((val: any) => val = shortid.generate());
          await sleep(100);
        }
        if (mounted.current) setImgs([]);
        await sleep(5000);
      }
    }
  }


  useEffect(() => {
    mounted.current = true;

    if (mounted.current) setImg(1);
    if (mounted.current) changeVars(1);

    return () => {
      mounted.current = false;
    }
  }, []);

  return (
    <div>
      {
        imgs.map((el: any) => el)
      }
    </div>
  )
}

export default glitch;
